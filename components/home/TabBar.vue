<template>
  <div
    class="tabbar"
    :class="`style${typesetting}`"
    :style="{background: bgColour,}">
    <nuxt-link
      v-for="(item, idx) in arrangement"
      :key="idx"
      class="icon"
      :to="`./`">
      <img :src="`/tabbar/colour${typesetting}/${item.type}.png`"/>
      <div
        v-if="item.caption"
        class="caption">{{ item.caption }}</div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    typesetting: {
      type: Number,
      required: false,
      default: 0,
    },
    arrangement: {
      type: Array,
      required: false,
      default() {
        return [
          { type: 'home', caption: '首頁', link: '', },
          { type: 'lobby', caption: '遊戲大廳', link: 'lobby', },
          { type: 'deposit', caption: '存款', link: 'deposit', emphasis: true },
          { type: 'cs', caption: '客服', link: 'cs', },
          { type: 'profile', caption: '會員中心', link: 'profile', },
        ]
      },
    },
    bgType: {
      type: String,
      default: 'plain',
      required: false,
    },
    bgColour: {
      type: String,
      default: '#323232',
      required: false,
    },
  },
};
</script>
<style lang="sass" scoped>
.tabbar
  position: fixed
  bottom: 0
  min-height: 42px
  width: 100vw
  z-index: 250
  display: flex
  +no-select
  padding-bottom: constant(safe-area-inset-bottom)
  padding-bottom: env(safe-area-inset-bottom)
  .icon
    flex-basis: 20%
    text-align: center
    padding: 2px
    +no-decoration  
    img
      width: auto
      max-height: 30px
    .caption
      font-size: $size-7
  &.style0
    .icon
      .caption
        color: $grey-lighter
  &.style1
    .icon
      .caption
        color: $grey-lighter
  &.style2
    background: white
    box-shadow: 0 0 1rem $grey-dark
    .icon
      .caption
        color: $primary-accent-3
        font-weight: 780
  &.style3
    padding: 5px 0 1px 0
    border-top: 3px solid $complimentary-accent-4
    .icon
      .caption
        font-size: $size-7
        color: $primary-accent-4
        font-weight: normal
      img
        box-shadow: 0 0 3px 1px $primary-accent-4
        border-radius: 100px
        max-height: 26px
  &.style4
    .icon
      .caption
        color: $grey-lighter
  &.style5
    .icon
      .caption
        color: $grey-lighter
  

@media screen and (max-width: $mobile-width)
  .tabbar

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .tabbar
</style>

