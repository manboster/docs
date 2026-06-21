# Manboster Packaging Documentation

This is a documentation for packagers of Manboster, intending to introducing Manboster's releases and how it is assembled.

## Release Channels

It's suggested to contain these channels in your package:

| Channel                             | Versions Contained                                                                                                                                                                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stable                              | Stable Versions (i.e. v0.1.0, v0.2.0,...)                          |
| Beta                                | Beta Versions (i.e. v0.1.0-beta.1, v0.1.0-rc, ...) |
| Canary(optional) | Canary Versions (GitHub Tag `canary`)                                                                                                                                                                              |

For better experience, a `canary` version is good to go.

## Release Version Standards

Based on the [Contributing Guideline], we have 3 types of releasing:

1. Stable release: Tagged as `v0.x.x`, this is the stable and safe version for all users
2. Release Candidate: Tagged as `v0.x.x-rc`, this is a version with features frozen and only accept bug fixes.
3. Beta: Tagged as `v0.x.x-beta.1`, `v0.x.x-beta.x`, this is a version with experimental features and not stable as well.
4. Canary: Tagged as `canary`, it provides latest developer preview of this application.
