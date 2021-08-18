export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wasla',
    htmlAttrs: {
      lang: 'ar',
      dir: 'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'مؤسسة وصلة هي مؤسسة مجتمعية معتمدة في المملكة العربية السعودية برقم ( 020/000003 )، وبترخيص من الهيئة العامة للإعلام المرئي والمسموع برقم ( 57914 ) ، متخصصة في مجالات العلاقات العامة والاتصال' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"stylesheet" , href:"https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"},

    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js", type: "text/javascript"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/normaliz.css',
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage

  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

}
