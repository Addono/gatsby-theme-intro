# [2.0.0](https://github.com/addono/gatsby-theme-intro/compare/v1.0.10...v2.0.0) (2020-07-10)


### Bug Fixes

* **site:** updates plugin name in gatsby config ([9aa0a70](https://github.com/addono/gatsby-theme-intro/commit/9aa0a708277592fd90199950380932dc9de198b8))


### Features

* **projects:** adds the posibility to add multiple icons to a project, each with their own link ([8003014](https://github.com/addono/gatsby-theme-intro/commit/8003014419da42d1609853f6843bfd66069fc0c5))


### BREAKING CHANGES

* **projects:** Removes "icon" field on projects and instead uses "icons". To migrate, rename icon
and make the string value the only key for an object. The value of this key should be the empty
string ("").
