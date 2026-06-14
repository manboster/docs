## Start to contribute Manboster?

This document guides you contribute Manboster in ease.

## Fork the repo

Fork the Manboster repository to your GitHub account.

## Clone the repo down you your machine

Use this command to clone Manboster (git required and configure SSH keys in advance)

```shell
git clone git@github.com:/your-username/manboster.git
```

## Install development dependencies

When modifying Manboster, you need to install development dependencies or you can't run Manboster.

Install [the Go Programming Language](https://go.dev/) and Makefile is enough.

Use this command to install modules:

```shell
go mod download
```

And use `make` to start developing:

```shell
make run (params)
```

## Pick a good-first-issue to fix

If you're first to contribute, don't hesitate to get some `good-first-issues` from [our issues](https://github.com/manboster/manboster/issues) list.

## Open a new branch

We strongly recommend you to do that.

Use this command to open a new branch to fix this problem:

```shell
git branch fix/your-branch-name
git checkout fix/your-branch-name
```

## Fix the code

We don't care what AI Agent you are using, but we will reject AI slops with no value.

## Push & Open a new pull request

Use this to push it back to your repository:

```shell
git push origin fix/your-branch-name
```

Then [open a new pull request](https://github.com/manboster/manboster/pulls/new) to us.
