exports.data = {
  store: {
    accountOwner: 'Yulissa V',
    dateCreated: '08/2020',
    storeName: 'VisionSpeaks',
    logo: '/logo.png',
    info: {
      faq: [
        {
          q: 'Do you make custom products?',
          a: 'Yes',
        },
        {
          q: 'How long will it take to recieve my purchase?',
          a: 'Unless otherwise stated, All orders go out via Priority Mail.',
        },
        {
          q: 'What is your policy on refunds?',
          a: 'At this time, we are unable to honor refunds.',
        },
        {
          q:
            "I never received my purchase or something isn't right with my order. What can I do?",
          a: 'Reach out to support@visionspeaks.art.',
        },
      ],
      about: `
        VisionSpeaks is a custom art collective.
      `,
    },
  },
  products: [
    {
      imagePath: '/front_page_bunns@2x.png',
      imagePathHovered: '/front_page_bunns_hover@2x.png', // drop image opacity to .6
      productTitle: 'Bunns In The Void',
      productDescription: 'Holographic Sticker, This thing is bad ass',
      productPrice: '$2.87',
      productSku: 'bun_vs_',
      productBgIsLight: 'true',
      productImages: [
        '/bunns_in_the_void_TRANSP.png',
        '/bunns_001.png',
        '/bunns_002.png',
      ],
    },
    {
      productTitle: 'Lady In The Void',
      productDescription: 'Holographic Sticker, This thing is bad ass',
      productPrice: '$2.87',
      productSku: 'lad_vs_',
      productBgIsLight: false,
      productImages: [
        '/lady_in_the_void_TRANSP.png',
        '/lady_001.png',
        '/lady_002.png',
      ],
    },
  ],
  hero: {
    heroImage: '/heatpress.jpeg',
    heroHeadline: 'Made To Order',
    heroSubHeadline: 'The highest quality work comes from custom work.',
    heroButton: 'Start Your Order',
    heroPath: '/products',
    styles: {},
  },
  navigation: [
    {
      title: 'Cart',
      path: '/checkout',
    },
  ],
  footer: [
    {
      title: 'Contact',
      path: 'mailto:support@visionspeaks.art',
    },
  ],
};
