# lg-coffee

<p align="center">  
  
  <img alt="code style: prettier" src="https://img.shields.io/badge/type_check_with-prop_types-ff69b4.svg" />
  
  
  <a href="https://github.com/facebook/jest">
    <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest" />
  </a>  

</p>

## Set up

```bash
$ npm i 
```

## Environment Variables

Rename your `example.env` file to `.env.local`. After entering your unique api keys you will need to restart your server for these changes to take effect.

```bash
PUBLISHABLE_KEY=stripe_api_key
SECRET_KEY=stripe_secret_key
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=facbook_pixel_id
SENDGRID_API_KEY=sendgrid_api_key
```

## Setup your Store

via the [data object](/utils/data.js)

Visit the docs for more info https://github.com/hi-matbub/lg-coffee


## Test

Tests using Jest

``` bash
$ npm run test 
$ npm run test:dev #development mode
```