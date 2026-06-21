# The versioning and branch standard of Manboster

## Versioning

Manboster versioning is based on `SemVer`. And we use these git tags to release:

`v1.0.0` means the stable version

`v1.0.0-rc` means the RC(Release candidate) version

`v1.0.0-beta` means the Beta version

`v1.0.0-alpha` means the Alpha version

`nightly-2026xxxx` means the Nightly version, `2026xxxx` means its release date

`canary` means the developing canary version

For more information, read [the guideline](https://github.com/manboster/manboster/blob/master/CONTRIBUTING.md).

## Branch Standard

We only open 3 branches:

`master`: the main branch of current stable version (when versioning, it will be merged)

`0.x.0-fix`: the fixing version branch (used for last version's safety patches)

`dev`: the developing branch of the next version
