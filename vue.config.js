module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/scss.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "prd"
    ? "/"
    : "/",
}
