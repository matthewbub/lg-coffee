exports.data = {
  store: {
    accountOwner: "Yulissa V",
    dateCreated: "08/2020",
    storeName: "VisionSpeaks",
    logo: "/logo.png",
    hero: {
      heroImage: "/heatpress.jpeg",
      heroHeadline: "Made To Order",
      heroSubHeadline: "The highest quality work comes from custom work.",
      heroButton: "Start Your Order",
      heroPath: "/products",
      styles: {},
    },
    nav: {
      links: [
        {
          title: "Products",
          path: "/",
        },
        {
          title: "Made To Order",
          path: "/made-to-order",
        },
        {
          title: "About",
          path: "/about",
        },
      ],
      style: {
        nav: {
          background: "#FAFAFA",
        },
        link: {
          color: "#181818",
        },
      },
    },
    footer: {
      col: [
        {
          title: "Contact",
          link: "/contact",
        },
        {
          title: "Contact",
          link: "/contact",
        },
      ],
    },
  },
  products: [
    {
      imagePath: "/front_page_bunns@2x.png",
      imagePathHovered: "/front_page_bunns_hover@2x.png", // drop image opacity to .6
      productTitle: "Bunns In The Void",
      productDescription: "Holographic Sticker, This thing is bad ass",
      productPrice: "$2.87",
      productSku: "/bun_vs_",
      productBgIsLight: "true",
    },
    {
      imagePath: "/front_page_lady@2x.png",
      imagePathHovered: "/front_page_lady_hover@2x.png",
      productTitle: "Lady In The Void",
      productDescription: "Holographic Sticker, This thing is bad ass",
      productPrice: "$2.87",
      productSku: "/lad_vs_",
      productBgIsLight: false,
    },
  ],
};
