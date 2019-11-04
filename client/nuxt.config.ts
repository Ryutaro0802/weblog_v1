export default {
  env: {},
  head: {
    title: "app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js TypeScript project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/reset.css", "~/assets/css/reset_helper.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: [
    "@nuxtjs/axios",
  ],
  // axios: {
  //   baseURL: "http://server:4000",
  //   browserBaseURL: "http://localhost:4000"
  // }
}
