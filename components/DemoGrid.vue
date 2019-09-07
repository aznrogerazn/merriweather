<template>
  <div class="demogrid">
    <br/><br/><br/>
    <div class="grid">
      <nuxt-link
        v-for="(item, idx) in demos"
        :key="idx"
        :to="`/demo${(idx + 1)}/`">
        <img src="https://bulma.io/images/placeholders/320x640.png"/>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoGrid',
  data() {
    return {
      demos: [
        { path: '/demo1/' },
        { path: '/demo2/' },
        { path: '/demo3/' },
        { path: '/demo4/' },
        { path: '/demo5/' },
        { path: '/demo6/' },
      ]
    }
  },
};
</script>
<style lang="sass" scoped>
.demogrid
  .grid
    display: flex
    flex-wrap: wrap
    a
      position: relative
      flex-basis: 20%
      padding: 0 1rem 1rem 1rem
      img
        width: 100%

@media screen and (max-width: $mobile-width)
  .demogrid
    .grid
      a
        flex-basis: 50%
        padding: 0 .5rem .5rem .5rem

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .demogrid
    .grid
      a
        flex-basis: 33%
        padding: 0 .5rem .5rem .5rem
</style>

