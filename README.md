# lgco ☕

<p align="center">
  <a href="https://travis-ci.com/hi-matbub/coffee-menu.svg?token=wsyKr5ypVsdRwKJab6d2&branch=main" target="_blank">
    <img src="https://travis-ci.com/hi-matbub/coffee-menu.svg?token=wsyKr5ypVsdRwKJab6d2&branch=main" alt="travis ci"
  </a>
    
  <a href= "https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" />
  </a>
  
  <a href="https://github.com/facebook/jest">
    <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest">
  </a>
</p>


> Large Commerce</br>
> Simple Solutions

Bootstrap an Ecommerce App for Physical Goods e.g. Standard ECommerce, Delivery Services

## What do I need to know before I attempt this?

The more you know the better. This Project was built using Next.js, Stripe's Api and Node. You will also need to have a basic understanding of Git as we will be utilizing vercels continuous integration and hosting with our Next.js app.

More info coming soon :construction:

## Warning everything here is subject to breaking change.

## Set up

```bash
$ npm i 
```
In addition to installing the required dependencies you will need to provide the credintials listed below in the Environment Variables.

## Workflow

This project uses <a href="https://www.conventionalcommits.org/en/v1.0.0/">Conventional Commits</a> and is enforced using Airbnb's Styleguide. Most breaking changes will be caught in the pre-commit stage. However shit happens and mistakes slide. Those will either be caught in the <a href="https://github.com/hi-matbub/coffee-menu/actions">GitHub Workflow</a> Script or in the <a href="https://travis-ci.com/hi-matbub/coffee-menu">Travis Build</a>.


## Test

Insure you've completed the Set up instructions above.

``` bash
# run test suite
$ npm run test

# watch tests
$ npm run test:dev
```

## Environment Variables

```bash
PUBLIC_URL=https://yourdomainhere.com
LOCAL_URL=http://localhost:3000
# Update these with your Stripe credentials
PUBLISHABLE_KEY=stripe_publishable_key
SECRET_KEY=stripe_secret_key
```
