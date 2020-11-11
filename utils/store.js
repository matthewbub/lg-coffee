module.exports = {
  URL: process.env.LOCAL_URL || process.env.PUBLIC_URL,
  storeName: 'VisionSpeaks',
  logo: '/logo.png',
  accountOwner: 'Yulissa V',
  products: [
    {
      name: 'Lady In The Void',
      description: 'Holographic Sticker, This thing is bad ass',
      price: '287',
      sku: 'lad_vs_',
      images: [
        '/lady_in_the_void_TRANSP.png',
        '/lady_001.png',
        '/lady_002.png',
      ],
    },
    {
      name: 'Bunns In The Void',
      description: 'Holographic Sticker, This thing is bad ass',
      price: '287',
      sku: 'bun_vs_',
      images: [
        '/bunns_in_the_void_TRANSP.png',
        '/bunns_001.png',
        '/bunns_002.png',
      ],
    },
  ],
  pages: {
    globals: {
      // navigations
      navigation: [
        {
          title: 'Products',
          path: '/',
        },
        {
          title: 'Made To Order',
          path: '/info/contact',
        },
        {
          title: 'About',
          path: '/info/about',
        },
        {
          title: 'Cart',
          path: '/view-cart',
        },
      ],
      footer: [
        {
          title: 'Contact',
          path: 'mailto:support@visionspeaks.art',
        },
        {
          title: 'FAQ',
          path: '/info/faq',
        },
      ],
    },
    homePage: {
      hero: {
        image: '/heatpress.jpeg',
        headline: 'Made To Order',
        subHeadline: 'The highest quality work comes from custom work.',
        buttonName: 'Start Your Order',
        buttonPath: '/products',
        styles: {},
      },
    },
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
};
