# Tatum ETH Balance Checker

This is a simple app for checking actual ETH wallet balance using Tatum SDK

## Running & Development

Recommended Node.js version is `20.18` (at least this one was used for development)

Steps to prepare and run project:
1. run `npm install` to install all dependencies
2. update `.env` file (or even better - add new `.env.local` file) with your Tatum api key
3. run `npm run dev` script
4. You're good to go

If you want to build an app, simply run `npm run build` script. App will be built into `dist` directory.

## Code of Conduct

### Code formatting
There is Prettier used for formatting and `lint-staged` to run it on `pre-commit` hook.
Hooks should be installed automatically - if not, please run `npm run format` before committing any changes.

### Repo organization
For branch / commits naming convention there are [conventional commits](https://www.conventionalcommits.org/) specification 
along  with "git flow"-like used. By "git-flow"-like I mean every branch name should be prefixed with general definition 
of what is being done on particular branch based on commit types from conventional commits spec. Eg. in case of feature 
it would be `feat/xyz`.

General work is done on `develop` branch with release commits on `master` branch. Every release commit should have
ready-for-production app with list of changes in commit's body. This will make repo self-documented in case of changelog.
