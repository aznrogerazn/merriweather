<template>
  <div class="demogrid">
    <br/><br/><br/>
    <div class="grid">
      <nuxt-link
        v-for="(item, idx) in demos"
        :key="idx"
        :to="`/demo${(idx + 1)}/`">
        <img :src="item.imgUrl"/>
        <span v-if="item.isWIP">UNDER CONSTRUCTION</span>
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
        { path: '/demo1/', imgUrl: '/preview1.png', isWIP: false, },
        { path: '/demo2/', imgUrl: '/preview2.png', isWIP: false, },
        { path: '/demo3/', imgUrl: '/preview3.png', isWIP: false, },
        { path: '/demo4/', imgUrl: '/preview4.png', isWIP: false, },
        { path: '/demo5/', imgUrl: '/preview5.png', isWIP: false, },
        { path: '/demo6/', imgUrl: 'https://bulma.io/images/placeholders/320x640.png', isWIP: true, },
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
        box-shadow: 0 2px 10px 0 $grey-lighter
      span
        position: absolute
        padding: .5rem 1rem
        bottom: .5rem
        right: .5rem
        text-align: right
        +no-decoration
        +no-select
        color: $grey-dark
        font-weight: 780
        font-size: $size-65

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

