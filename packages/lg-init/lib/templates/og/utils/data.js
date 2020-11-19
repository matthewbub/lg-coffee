exports.data = {
  store: {
    name: 'Dog-Gone Goods',
    logo: '/logo.svg',
    hero: '/hero.svg',
    url: '',
    description: 'A dog treat shop',
    about: 'Everyone loves a happy dog!',
    contact: 'youremail@here.com',
    info: {
      faq: [
        {
          q: 'Are these treats tasty?',
          a: 'Yes you bet they are!',
        },
        {
          q: 'How long will it take to recieve my purchase?',
          a: 'Unless otherwise stated, All orders go out via Priority Mail.',
        },
        {
          q: 'What is your policy on refunds?',
          a: 'At this time, we are unable to honor refunds.',
        },
      ],
    },
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  },
  theme: {
    text: { color: '#212529' },
    secondaryText: { color: '#6C757D' },
    primaryBackground: { backgroundColor: '#F8F9FA' },
    secondaryBackground: { backgroundColor: '#FFFFFF' },
  },
  products: {
    heading: 'Tasty Treats',
    products: [
      {
        name: 'Strawberry Bone',
        description: 'Super colorful, your dog will love this!',
        price: 197,
        sku: 'srw_bn_',
        images: ['/pink.png'],
      },
      {
        name: 'Chocolate Bone',
        description: 'Super chocolately, your dog will love this!',
        price: 197,
        sku: 'chc_bn_',
        images: ['/dark.png'],
      },
      {
        name: 'Lemon Bone',
        description: 'Super lemony, your dog will love this!',
        price: 197,
        sku: 'lnm_bn_',
        images: ['/yellow.png'],
      },
      {
        name: 'Orange Bone',
        description: 'Super colorful, your dog will love this!',
        price: 197,
        sku: 'ong_bn_',
        images: ['/orange.png'],
      },
    ],
  },
};
