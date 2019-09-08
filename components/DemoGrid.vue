<template>
  <div class="demogrid">
    <br/><br/><br/>
    <div class="grid">
      <nuxt-link
        v-for="(item, idx) in demos"
        :key="idx"
        :to="`/demo${(idx + 1)}/`">
        <img :src="item.imgUrl"/>
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
        { path: '/demo1/', imgUrl: '/preview1.png' },
        { path: '/demo2/', imgUrl: '/preview2.png' },
        { path: '/demo3/', imgUrl: 'https://bulma.io/images/placeholders/320x640.png' },
        { path: '/demo4/', imgUrl: 'https://bulma.io/images/placeholders/320x640.png' },
        { path: '/demo5/', imgUrl: 'https://bulma.io/images/placeholders/320x640.png' },
        { path: '/demo6/', imgUrl: 'https://bulma.io/images/placeholders/320x640.png' },
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

