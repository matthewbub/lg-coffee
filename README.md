<img src="/public/lg-coffee-logo.png" alt="lg-coffee" />

<p align="center">
  <a href="https://travis-ci.com/hi-matbub/lg-coffee.svg?token=wsyKr5ypVsdRwKJab6d2&branch=main" target="_blank">
    <img src="https://travis-ci.com/hi-matbub/lg-coffee.svg?token=wsyKr5ypVsdRwKJab6d2&branch=main" alt="travis ci" />
  </a>
    
  <a href= "https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" />
  </a>
  
  <a href="https://github.com/facebook/jest">
    <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest" />
  </a>

  <a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="Maintained with lerna" />
  </a>

</p>


> Large Commerce</br>
> Simple Solutions

Bootstrap an Ecommerce App for Physical Goods e.g. Standard ECommerce, Delivery Services

## What do I need to know before I attempt this?

This project was built with minimal maintaince/fees in mind. Being familiar with modern javascript would help, however is not required.

More info coming soon :construction:

## Warning everything here is subject to breaking change.

## Set up

```bash
$ npx lg-init myAwesomeStore
```

## Contributing 

### Workflow

This project uses <a href="https://www.conventionalcommits.org/en/v1.0.0/">Conventional Commits</a> and is enforced using Airbnb's Styleguide. Most breaking changes will be caught in the pre-commit stage. However shit happens and mistakes slide. Those will either be caught in the <a href="https://github.com/hi-matbub/lg-coffee/actions">GitHub Workflow</a> Script or in the <a href="https://travis-ci.com/hi-matbub/lg-coffee">Travis Build</a>.


### Test

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
## Support

Proud to support? </br>
<a href="https://www.buymeacoffee.com/himatbub" target="_blank"><img src="/public/buy-me-a-coffee.png" alt="Buy Me A Coffee"></a>