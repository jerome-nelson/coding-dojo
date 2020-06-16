# Contributing

- [Installing Dependencies](#installing)
- [Npm Tasks](#npm-tasks)
- [Commit Guidelines](commit-guidelines)
- [Bumping of packages](#package-bumps)
- [Pull Requests](#pull-requests)

## [Installing Dependencies](#installing)

```
npm install
```

There is a `postinstall` script that after `npm install` has finished will bootstrap the mono repo.

## [NPM Tasks](#npm-tasks)

| Task       | Description                                                                           |
|------------|---------------------------------------------------------------------------------------|
| build      | Build all typescript files inside monorepo packages                                   |
| test       | Runs all React and JS/TS tests in monorepo                                            |
| ci:publish | Publishes individual packages                                                         |

## [Commit Guidelines](commit-guidelines)

All commits should use the (Conventional Commits Specification)[https://www.conventionalcommits.org/en/v1.0.0/#summary]. Commits are linted using (husky)[https://github.com/typicode/husky/] to enforce this.


## [Bumping of packages](#package-bumps)
LernaJS is used to manage the monorepo dependencies; it will generate changelogs and package bumps based on (Semantic Versioning)[https://semver.org/]. This means:

* `fix` commits will up the PATCH number
* `feat` commits will up the MINOR number
* `BREAKING CHANGE` will up MAJOR number

## [Pull Requests](#pull-requests)
Repositories should be forked and pull requests made from the fork to the main repository.
You'll need to add the main repository as a remote (example below):
```bash
git remote add github https://github.com/jerome-nelson/coding-dojo.git
```