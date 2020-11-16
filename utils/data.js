exports.data = {
  store: {
    name: 'VisionSpeaks',
    logo: '/logo.png',
    url: process.env.PUBLIC_URL,
    description: 'Custom sticker shop',
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
    social: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
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
        qty: 40,
      },
    ],
  },
  navigation: [
    {
      name: 'Blog',
      href: '/blog',
    },
  ],
  footer: [
    {
      title: 'Contact',
      path: 'mailto:support@visionspeaks.art',
    },
  ],
  threeCardComponent: [
    {
      image: 'https://via.placeholder.com/150',
      heading: 'Demo Heading',
      subheading: "Lorem Ipsem is probably what you don't want here",
      href: '/example',
    },
    {
      image: 'https://via.placeholder.com/150',
      heading: 'Another Heading',
      subheading: "Lorem Ipsem is probably what you don't want here",
      href: '/example',
    },
    {
      image: 'https://via.placeholder.com/150',
      heading: 'Another Heading',
      subheading: "Lorem Ipsem is probably what you don't want here",
      href: '/example',
    },
  ],
  textBlockComponent: {
    heading: 'This is a demo heading',
    subheading: 'Lorem Ipsem and Hello world do not belong here!',
  },
  hero: {
    image: '/heatpress.jpeg',
    heading: 'Made To Order',
    subheading: 'The highest quality work comes from custom work.',
    button: 'Start Your Order',
    href: '/products',
  },
  productsRowComponent: {
    heading: 'New Arrivals',
    products: [
      {
        name: 'Demo Product',
        description: "Lorem Ipsum isn't what we should use here",
        price: '287',
        sku: 'bun_vs_',
        images: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
      },
      {
        name: 'Demo Product',
        description: "Lorem Ipsum isn't what we should use here",
        price: '287',
        sku: 'bun_vs_',
        images: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
      },
      {
        name: 'Demo Product',
        description: "Lorem Ipsum isn't what we should use here",
        price: '287',
        sku: 'bun_vs_',
        images: [
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
          'https://via.placeholder.com/300',
        ],
      },
    ],
  },
  navigationComponent: {
    logo: 'https://via.placeholder.com/30',
  },
};
