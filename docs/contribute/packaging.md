# Manboster Packaging Documentation

This is a documentation for packagers of Manboster, intending to introducing Manboster's releases and how it is assembled.

## Release Channels

It's suggested to contain these channels in your package:

| Channel         | Versions Contained                                 |
|-----------------|----------------------------------------------------|
| Stable          | Stable Versions (i.e. v0.1.0, v0.2.0,...)          |
| Beta            | Beta Versions (i.e. v0.1.0-beta.1, v0.1.0-rc, ...) |
| Canary(optional)| Canary Versions (GitHub Tag `canary`)              |

For better experience, a `canary` version is good to go.

## Release Version Standards

Based on the [Contributing Guideline], we have 3 types of releasing:

1. Stable release: Tagged as `v0.x.x`, this is the stable and safe version for all users
2. Release Candidate: Tagged as `v0.x.x-rc`, this is a version with features frozen and only accept bug fixes.
3. Beta: Tagged as `v0.x.x-beta.1`, `v0.x.x-beta.x`, this is a version with experimental features and not stable as well.
4. Canary: Tagged as `canary`, it provides latest developer preview of Manboster.

## Release Artifact Standards

After `v0.2.0`, we have unify the overall release artiface of Manboster, it would be that:

```
checksums.txt
manboster_0.2.0_darwin_amd64.tar.gz
manboster_0.2.0_darwin_arm64.tar.gz
manboster_0.2.0_linux_amd64.tar.gz
manboster_0.2.0_linux_arm64.tar.gz
manboster_0.2.0_linux_riscv64.tar.gz
manboster_0.2.0_windows_amd64.zip
manboster_0.2.0_windows_arm64.zip 
```

Its structure would be like `manboster_{version}_{platform}_{architecture}.tar.gz(for windows it's .zip)`.

For canary, it would be like `{version}_{commithash}`.

Inside this compress there is a `manboster(.exe)` executable file so just move it to executable.

Also, you can define `MANBOSTER_HOME` variable to determine Manboster's home, it will create a `.manboster` in that directory but in next version we will remove `.manboster` and use it directly.

checksums.txt contains sha256 checksum for Manboster.
