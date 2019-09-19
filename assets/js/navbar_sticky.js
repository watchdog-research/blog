$(document).ready(() => {

    const stickyYOffsetThreshold = 16;


    const navbar$ = $('#main_navbar');

    if (navbar$.length) {
        let navbarUpdateDirection = 0;

        const updateNavbar = () => {
            if (window.pageYOffset >= stickyYOffsetThreshold) { // start sticky at about 1rem (base font size is usually 16px)
                if (navbarUpdateDirection === -1) {
                    navbarUpdateDirection = 0;
                }
                if (navbarUpdateDirection === 0) {
                    navbar$.addClass("navbar--sticky");
                    navbarUpdateDirection = 1;
                }
            } else {
                if (navbarUpdateDirection === 1) {
                    navbarUpdateDirection = 0;
                }
                if (navbarUpdateDirection === 0) {
                    navbar$.removeClass("navbar--sticky");
                    navbarUpdateDirection = -1;
                }
            }
        };

        // attach on-scroll event handler
        window.onscroll = function () {
            updateNavbar();
        };

        // update on 1st load (or refresh)
        updateNavbar();
    }

});
