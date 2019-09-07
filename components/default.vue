<template>
  <div class="default">
  </div>
</template>
<script>
export default {
  name: 'default'
};
</script>
<style lang="sass" scoped>
.default

@media screen and (max-width: $mobile-width)
  .default

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .default
</style>

