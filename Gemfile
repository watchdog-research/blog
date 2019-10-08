source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end


gem 'jekyll', '>= 3.7.4'

group :jekyll_plugins do
  gem 'jekyll-seo-tag'
  gem 'jekyll-feed'
  gem 'jekyll-paginate'
  gem 'jekyll-archives'
end
