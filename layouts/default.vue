<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    const { APP_LAYOUT } = process.env;
    /**
     * Modular Layout, Global CSS Hook
     */
    const _layoutStyle = document.createElement('style');
    _layoutStyle.innerHTML = 'html{font-family:'
    + APP_LAYOUT.fontStack + ';'
    + '}';
    const _firstScript = document.querySelector('script');
    _firstScript.parentNode.insertBefore(_layoutStyle, _firstScript);
  },
};
</script>
<style lang="sass">
html
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box


*,
*:before,
*:after
  box-sizing: border-box
  margin: 0

</style>
