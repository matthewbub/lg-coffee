# Contributing to lg-coffee

Help is always welcome. Please look into the [issues](https://github.com/hi-matbub/lg-coffee/issues) for more info.

Issues labeled `good first issue`and `help wanted` are a great place to begin. If something seems veg I am happy to clarify.

This project was built with lerna for scalability and next.js for simplicity. 

## Setup

Super easy setup where ever you go. 

- Install root directorys dependencies `npm i` 
- Install the dependecies in whichever `/package/..` you are working on.

**CHECKOUT TO A NEW BRANCH**

`git checkout -b my-feature`

What are you looking to work on?

- [Website Templates](https://github.com/hi-matbub/lg-coffee/tree/main/packages/lg-init/workspace)
- [Documentation](https://github.com/hi-matbub/lg-coffee/tree/main/packages/lg-docs)
- [lg-calc](https://github.com/hi-matbub/lg-coffee/tree/main/packages/lg-calc)
- [lg-init](https://github.com/hi-matbub/lg-coffee/tree/main/packages/lg-init)

## Submitting PRs

- [x] Verify all Unit and Smoke tests are passing `npm run test:dev`
- [x] If you've built a new feature, it's been tested
- [x] Verify gh workflow builds are successful

There are alot of moving peices here. If you need help [contact me](mailto:6matbub@gmail.com)

## Workflow

This project uses <a href="https://www.conventionalcommits.org/en/v1.0.0/">Conventional Commits</a> and is enforced using Airbnb's Styleguide. Most breaking changes will be caught in the pre-commit stage. However shit happens and mistakes slide. Those will either be caught in the <a href="https://github.com/hi-matbub/lg-coffee/actions">GitHub Workflow</a> Script or in the <a href="https://travis-ci.com/hi-matbub/lg-coffee">Travis Build</a>.
