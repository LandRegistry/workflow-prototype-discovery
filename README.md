Workflow Management Prototypes
===================
[![Build Status](https://travis-ci.org/LandRegistry/workflow-prototypes.svg?branch=master)](https://travis-ci.org/LandRegistry/workflow-prototypes)

Made with [Jekyll](http://jekyllrb.com/), [Bootstrap](http://getbootstrap.com/) & [Font Awesome](http://fortawesome.github.io/Font-Awesome/).

Tested with [HTML Proofer](https://github.com/gjtorikian/html-proofer).

Deployed by [Travis CI](https://travis-ci.org/LandRegistry/workflow-prototypes).

Hosted by [MaxCDN](http://www.bootstrapcdn.com/) and [GitHub Pages](https://pages.github.com/).

### Getting started
Requires [Ruby](https://www.ruby-lang.org/en/downloads/),  [RubyGems](http://rubygems.org/pages/download) and [Bundler](http://bundler.io)
```
git clone git@github.com:LandRegistry/workflow-prototypes.git
cd workflow-prototypes
bundle install
bundle exec jekyll serve
```

### Running tests
This is the same script that Travis runs during the build, run this locally before pushing to avoid broken builds:
```
./script/cibuild
```

### Adding pages
Place a new `.html` file in the appropriate prototype subject folder and add the following Front Matter, replacing the `<tags>` with your information:
```
---
layout: service
title: <Prototype Subject> <Major Version>.<Revision>
permalink: <Prototype Subject>/<Major Version>/<Revision>
---
```
