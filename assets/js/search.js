window.onload = function() {

    function displaySearchResults(results, store, ) {
        let searchResults = document.getElementsByClassName('search-results');
        let searchListHeadings = document.getElementsByClassName('search-list-heading');

        let headingText = 'Search results for: ' + searchTerm;

        for (let i = 0; i < searchListHeadings.length; i++) {
            searchListHeadings[i].innerHTML = headingText;
        }

        if (results.length) { // Are there any results?

            let appendString = '';

            for (let i = 0; i < results.length; i++) {  // Iterate over the results
                let item = store[results[i].ref];
                appendString += getPostHtml(item);
            }

            for (let i = 0; i < searchResults.length; i++) {
                searchResults[i].innerHTML = appendString;
            }

        } else {
            for (let i = 0; i < searchResults.length; i++) {
                searchResults[i].innerHTML = '<h2 class="post-list-heading">No results found.</h2>';
            }
        }
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
            }
        }
    }

    var searchTerm = getQueryVariable('query');

    if (searchTerm) {
        searchInput = document.getElementById('search-box');
        searchInput.focus();
        searchInput.setAttribute("value", searchTerm);
        searchInput.selectionEnd=searchInput.selectionStart=searchTerm.length;


        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
            this.field('title', { boost: 10 });
            this.field('tags');
            this.field('categories');
            this.field('excerpt');

            for (var key in window.store) { // Add the data to lunr
                this.add({
                    'id': key,
                    'title': window.store[key].title,
                    'tags': window.store[key].tags,
                    'categories': window.store[key].categories,
                    'excerpt': window.store[key].excerpt
                });

            }
        });

        let results = idx.search(searchTerm); // Get lunr to perform a search
        displaySearchResults(results, window.store, searchTerm); // We'll write this in the next section

    }


    function getPostHtml(post) {

        let html = '<div class="post-item">';

        html += '<h3 class="post-title">';

        html+= '<a class="post-link" href="' + post.url + '">' + post.title + '</a>';

        html += '</h3>';

        html += '<hr class="mt-0 mb-1">';

        html += 'Posted on <span class="post-meta">' + new Date(post.date).toLocaleDateString("en-US",{year: 'numeric', month: 'short', day: 'numeric'}) + '</span>';

        html += '<div class="post-excerpt mt-2 "><p>' + post.excerpt + '</p></div>';

        html += 'Posted in <span class="post-meta" style="text-transform: capitalize;">' + post.categories.replace(/\[|\]|&quot;/g,'') + '</span>';

        html += '<hr class="mt-0 mb-4">';

        html += '</div>';

        return html;
    }

};
