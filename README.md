<img src="/public/lg-coffee-logo.png" alt="lg-coffee" />

<p align="center">  
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

<br>
<br>

Bootstrap a production ready Ecommerce App. Built with minimal maintaince/ fees in mind. 

#### This project depends on

- [ ] [Stripe](https://stripe.com/docs/api) for payment intents
- [ ] [SendGrid](https://app.sendgrid.com/) for the contact form

## Set up

### 1. Bootstrap a new project

```bash
$ npx lg-init myawesomestore
```

Once install is complete, update your store's information via the [store.js file](https://github.com/hi-matbub/lg-coffee/blob/main/packages/lg-init/lib/templates/og/utils/store.js).

### 2. Update your Environment Variables

Rename your `example.env` to `.env.local`, replace the placeholders with your unique keys and restart your server.

```bash
PUBLISHABLE_KEY=stripe_api_key
SECRET_KEY=stripe_secret_key
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=facbook_pixel_id
SENDGRID_API_KEY=sendgrid_api_key
```

### 3. Adding/ Managing products

Easily manage your products via the [Products section of your Stripe Dashboard](https://dashboard.stripe.com/products)

**Important Caveat :star:** 

In order for lg-coffee to read product prices, add a `price` key with a _whole integer_ as a value to the metadata of each product. 

> Example: </br>
> If your product cost $2.78 USD, you would input `287`

**Another Important Caveat :star:** 

You won't see your Stripe products on your local machine. This is because we are on `test mode` with Stripe. 

To fix this, go to your [Stripe Dashboard](https://dashboard.stripe.com/products) and toggle the `view test data` switch and add your test products. 

### 4. Accept and manage payments via the [Stripe Dashboard](https://dashboard.stripe.com)


While testing on your local machine use 
> Stripes Test Cards e.g `4242 4242 4242 4242`. 

_All local payment intents will be viewable while viewing the test data on your Stripe Dashboard_

## Contributing 

This turned into a full blown app pretty quick, I would love to get some help. Checkout out the [Contributing Guide](/CONTRIBUTING.md) to get involved and learn how to read this repo.

## Issues

Please submit any and all issues/ opinions/ thoughts or concerns [here](https://github.com/hi-matbub/lg-coffee/issues/new)

## Who uses lg-coffee? 

Are you using lg-coffee? I'd love to hear from you! Get in touch with me at <a href="mailto:6matbub@gmail.com">6matbub@gmail.com</a>

