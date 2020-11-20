<img src="/public/lg-coffee-logo.png" alt="lg-coffee" />

## :construction: Offical docs coming soon :construction: 

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


> Large Commerce</br>
> Simple Solutions

Bootstrap a production ready Ecommerce App. Built with minimal maintaince/ fees in mind. 

#### This project depends on

- [ ] [Stripe Account](https://stripe.com/docs/api)
- [ ] [SendGrid Accout](https://app.sendgrid.com/)

## Set up

Bootstrap a new project, setup your environmental variables and store's information via the data.js file and publish your site!

```bash
$ npx lg-init myAwesomeStore
```

### Update your Environment Variables

Rename your `example.env` to `.env.local`, replace the placeholders with your unique keys and restart your server.

```bash
PUBLISHABLE_KEY=stripe_api_key
SECRET_KEY=stripe_secret_key
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=facbook_pixel_id
SENDGRID_API_KEY=sendgrid_api_key
```

## Contributing 

This turned into a full blown app pretty quick, I would love to get some help. Checkout out the [Contributing Guide](/CONTRIBUTING) to get involved.

#### Workflow

This project uses <a href="https://www.conventionalcommits.org/en/v1.0.0/">Conventional Commits</a> and is enforced using Airbnb's Styleguide. Most breaking changes will be caught in the pre-commit stage. However shit happens and mistakes slide. Those will either be caught in the <a href="https://github.com/hi-matbub/lg-coffee/actions">GitHub Workflow</a> Script or in the <a href="https://travis-ci.com/hi-matbub/lg-coffee">Travis Build</a>.

## Example Sites

_note: checkout disabled in demo applications_

- https://lg-coffee-og-example.vercel.app/

## Who uses lg-coffee? 

Are you using lg-coffee? I'd love to hear from you! Get in touch with me at <a href="mailto:6matbub@gmail.com">6matbub@gmail.com</a>

## Support

Proud to support? </br>
<a href="https://www.buymeacoffee.com/himatbub" target="_blank"><img src="/public/buy-me-a-coffee.png" alt="Buy Me A Coffee"></a>
