<template>
  <div class="titlebarpad">
  </div>
</template>
<script>
export default {
  name: 'TitleBarPad'
};
</script>
<style lang="sass" scoped>
.titlebarpad
  min-height: 40px

@media screen and (max-width: $mobile-width)
  .titlebarpad

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .titlebarpad
</style>

