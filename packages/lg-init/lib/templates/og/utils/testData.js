// used for testing purposes

exports.testData = {
  store: {
    name: 'Dog-Gone Goods',
    logo: '/logo.svg',
    hero: '/hero.svg',
    description: 'A dog treat shop',
    contact: 'youremail@here.com',
    social: { facebook: '', twitter: '', instagram: '' },
  },
  products: [
    {
      id: 'prod_IRbpyL6fgse3n',
      object: 'product',
      active: true,
      attributes: [],
      created: 1606151601,
      description: 'demo product description',
      images: ['img.jpg'],
      livemode: false,
      metadata: {
        price: 287,
      },
      name: 'Large Demo Product',
      statement_descriptor: null,
      type: 'service',
      unit_label: null,
      updated: 1606153202,
    },
    {
      id: 'prod_IRbouvicOUom16',
      object: 'product',
      active: true,
      attributes: [],
      created: 1606151551,
      description: 'demo product description',
      images: ['img.jpg'],
      livemode: false,
      metadata: {
        price: 287,
      },
      name: 'Demo Product',
      statement_descriptor: null,
      type: 'service',
      unit_label: null,
      updated: 1606153221,
    },
  ],
};

exports.testCart = {
  one: {
    product: {
      name: 'Strawberry Bone',
      description: 'Super colorful, your dog will love this!',
      id: 'srw_bn_',
      images: ['/pink.png'],
    },
    qty: 2,
    price: 197,
  },
};
