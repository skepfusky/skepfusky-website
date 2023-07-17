// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
      link: [{ rel: "icon", href: "/favicon.png", fetchpriority: "high" }],
      meta: [
        { name: "robots", content: "noai, noimageai" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge;chrome=1" },
        {
          property: "og:site_name",
          content: "Kuroji Fusky Blog",
        },
      ],
      bodyAttrs: {
        class: "text-white bg-kuro-dark2",
      },
    },
  },
  runtimeConfig: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
  },
  modules: ["@nuxt/image-edge"],
  css: ["~/assets/css/main.scss"],
  typescript: {
    strict: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
  webpack: {
    extractCSS: true,
  },
  image: {
    domains: ["images.ctfassets.net", "res.cloudinary.net"],
    contentful: {},
  },
})