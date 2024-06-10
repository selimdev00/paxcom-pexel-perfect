// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo", "@nuxt/eslint"],
  site: {
    url: "https://compas.ru",
    name: "Compas - Анализ штрафов",
    description: "Проверьте штрафы и зарегестрируйтесь в 1 клик",
    defaultLocale: "ru",
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
});
