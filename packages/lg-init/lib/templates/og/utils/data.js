exports.data = {
  store: {
    name: 'VisionSpeaks',
    logo: '/logo.png',
    url: '',
    description: 'Custom sticker shop',
    contact: 'youremail@here.com',
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
    heading: 'New Arrivials',
    products: [
      {
        name: 'Bunns In The Void',
        description: 'Holographic Sticker, This thing is bad ass',
        price: 287,
        sku: 'bun_vs_',
        images: [
          '/bunns_in_the_void_TRANSP.png',
          '/bunns_001.png',
          '/bunns_002.png',
        ],
        type: 'sticker',
        qty: 40,
      },
      {
        name: 'Lady In The Void',
        description: 'Holographic Sticker, This thing is bad ass',
        price: 287,
        sku: 'lad_vs_',
        images: [
          '/lady_in_the_void_TRANSP.png',
          '/lady_001.png',
          '/lady_002.png',
        ],
        type: 'sticker',
        qty: 40,
      },
    ],
  },
};
