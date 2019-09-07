<template>
  <div
    class="tabbar"
    :class="`style${typesetting}`"
    :style="{background: bgColour,}">
    <div
      v-for="(item, idx) in arrangement"
      :key="idx"
      class="icon">
      <img :src="`/tabbar/colour${typesetting}/${item.type}.png`"/>
      <div
        v-if="item.caption"
        class="caption">{{ item.caption }}</div>
    </div>
    
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
          { type: 'home', caption: '首頁', },
          { type: 'lobby', caption: '遊戲大廳', },
          { type: 'deposit', caption: '存款', emphasis: true },
          { type: 'cs', caption: '客服', },
          { type: 'profile', caption: '會員中心', },
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
  .icon
    flex-basis: 20%
    text-align: center
    padding: 2px
    img
      width: auto
      max-height: 30px
    .caption
      font-size: $size-7
  &.style0
    .icon
      .caption
        color: $grey-lighter

@media screen and (max-width: $mobile-width)
  .tabbar

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .tabbar
</style>

