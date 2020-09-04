## [2.0.4](https://github.com/addono/gatsby-theme-intro/compare/v2.0.3...v2.0.4) (2020-09-04)


### Bug Fixes

* typo in sidebar ([ad46b9c](https://github.com/addono/gatsby-theme-intro/commit/ad46b9c3c64befb9feda237a819f007f1ddc2478)), closes [wkocjan/gatsby-theme-intro#b8ae03f83c18cc0d52cfaf7d20f84807f0efe83](https://github.com/wkocjan/gatsby-theme-intro/issues/b8ae03f83c18cc0d52cfaf7d20f84807f0efe83)

## [2.0.3](https://github.com/addono/gatsby-theme-intro/compare/v2.0.2...v2.0.3) (2020-07-11)


### Bug Fixes

* **projects:** adds missing margin above the icons ([ded5b2a](https://github.com/addono/gatsby-theme-intro/commit/ded5b2a8746d0fd66c247ff79d70cdc1104dfb37))

## [2.0.2](https://github.com/addono/gatsby-theme-intro/compare/v2.0.1...v2.0.2) (2020-07-10)


### Bug Fixes

* **project:** remove debugging logging statement ([e819c27](https://github.com/addono/gatsby-theme-intro/commit/e819c275fd7ba8226fdf63ac2d3e633e1784343f))

## [2.0.1](https://github.com/addono/gatsby-theme-intro/compare/v2.0.0...v2.0.1) (2020-07-10)

### Bug Fixes

- **projects:** aligns icons completely to the right ([da2991f](https://github.com/addono/gatsby-theme-intro/commit/da2991f9b07feb77348ff3f668050d7a71f30fd1)), closes [#10](https://github.com/addono/gatsby-theme-intro/issues/10)

# [2.0.0](https://github.com/addono/gatsby-theme-intro/compare/v1.0.10...v2.0.0) (2020-07-10)

### Bug Fixes

- **site:** updates plugin name in gatsby config ([9aa0a70](https://github.com/addono/gatsby-theme-intro/commit/9aa0a708277592fd90199950380932dc9de198b8))

### Features

- **projects:** adds the posibility to add multiple icons to a project, each with their own link ([8003014](https://github.com/addono/gatsby-theme-intro/commit/8003014419da42d1609853f6843bfd66069fc0c5))

### BREAKING CHANGES

- **projects:** Removes "icon" field on projects and instead uses "icons". To migrate, rename icon
  and make the string value the only key for an object. The value of this key should be the empty
  string ("").
