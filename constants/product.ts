export const PRODUCT = {
  NAME: "CHENXI AZURE STEEL",
  WATCH_NAME: "Chenxi Azure Steel Chronograph Watch",
  WATCH_TAGLINE: "Precision timekeeping with sophisticated design",
  BRACELET_NAME: "Sterling Strand Premium Steel Bracelet",
  BRACELET_DESCRIPTION:
    "Sterling Strand, a refined multi-link bracelet that blends modern aesthetics with enduring craftsmanship",
  HEADLINE: "Elevate Every Moment with Chenxi Azure Steel",
  SUBTITLE: "(The Premium Watch & Bracelet Set That Defines Your Style)",
  TAGLINE: "The Perfect Combination for the Modern Professional",
  PAY_ON_DELIVERY_SUBTITLE:
    "Ready to make your statement with the Chenxi Azure Steel watch? We deliver right to your doorstep in Lagos, Abuja, and port harcourt. You only pay when your presidential timepiece arrives safely in your hands",
  LUCKY_NUMBER: 7,
  DELIVERY_REGION: "Lagos State",
  WHATSAPP_NUMBER: "2348000000000",
  WHATSAPP_MESSAGE:
    "Hi! I just placed an order for the Chenxi Azure Steel watch set and I'm ready for delivery today!",
} as const;

export const WHATSAPP_LINK = `https://wa.me/${PRODUCT.WHATSAPP_NUMBER}?text=${encodeURIComponent(PRODUCT.WHATSAPP_MESSAGE)}`;

export const PRODUCT_IMAGES = {
  HERO: "/assets/imgi_5_download.webp",
  WATCH_GALLERY: [
    "/assets/imgi_6_imgi_99_7-rg6xx2gzkuekh4redlsyil0a91ujax1ssoeot1v9u0.webp",
    "/assets/imgi_7_download-2-rg6xxqwsijc0uzrwewd9beu9p2i2v1qtk1dba8v1c8.webp",
    "/assets/imgi_8_download-1-rg6xy42j67u1dj8sa221abiq0gp7ut729ui404bix4.webp",
  ],
  WATCH_PRICING: "/assets/imgi_5_download.webp",
  BRACELET: "/assets/imgi_9_H707fed6688d34460a30b0a0f34f5566bq.webp",
} as const;
