module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/style/colours.scss"; @import "~@/style/font.scss";`,
      },
    },
  },
};
