# lg-coffee

<p align="center">  
  
  <img alt="code style: prettier" src="https://img.shields.io/badge/type_check_with-prop_types-ff69b4.svg" />
  
  
  <a href="https://github.com/facebook/jest">
    <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with Jest" />
  </a>  

</p>

Bootstrap a production ready Ecommerce App. Built with minimal maintaince/ fees in mind. _Note: This project depends on [Stripe](https://stripe.com/docs/api) for payment intents_

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
```

### 3. Adding/ Managing products

Easily manage your products via the [Products section of your Stripe Dashboard](https://dashboard.stripe.com/products). Updates to Stripe Produts will automatically reflect to your lg-coffee app.

### Accept and manage payments via the [Stripe Dashboard](https://dashboard.stripe.com)

While testing on your local machine use 
> Stripes Test Cards e.g `4242 4242 4242 4242`. 

_All local payment intents will be viewable while viewing the test data on your Stripe Dashboard_

Learn more about [testing Stripe payments](https://stripe.com/docs/testing)
