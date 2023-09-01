// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css"
  ],
  build: {
    transpile: ["vuetify"]
  },
  vite: {
    define: {
      "process.env.DEBUG": false
    }
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-vuefire", "@pinia/nuxt"],
  vuefire: {
    config: {
      apiKey: "AIzaSyBvWYTX8NtJ0OIE7OF2kK2VWHqrX_7lNlg",
      authDomain: "hibofoods.firebaseapp.com",
      projectId: "hibofoods",
      storageBucket: "hibofoods.appspot.com",
      messagingSenderId: "178270178027",
      appId: "1:178270178027:web:77d8e3beb9031ef770ccae",
      measurementId: "G-JP3NG7LB1S"
      // there could be other properties depending on the project
    }
  }
})
