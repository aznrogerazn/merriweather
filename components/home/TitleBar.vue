<template>
  <div
    class="title-bar"
    :class="(fixed ? 'fixed ' : '' )+ `style${typesetting}`"
    :style="{ background: bgColour }">
    <div
      class="item"
      v-for="(el, idx) in arrangement"
      :key="idx"
      :class="el">
      <div
        v-if="el === 'B'">
        {{ brandname }}
      </div>
      <img
        class="image"
        v-if="el === 'I'"
        src="/logo/rect.png"/>
      <div
        v-if="el === 'M'">
        =
      </div>
      <div
        v-if="el === 'C'">
        線上客服
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TitleBar',
  computed: {
    brandname() {
      return this['brand/name'];
    },
    ...mapGetters([
      'brand/name',
    ])
  },
  props: {
    typesetting: {
      type: Number,
      required: false,
      default: 0,
    },
    fixed: {
      type: Boolean,
      default: true,
      required: false,
    },
    arrangement: {
      type: String,
      default: 'NBN',
      /**
       * Elements explained:
       * N: Nothing
       * B: Branding Text
       * I: Branding Image
       * M: Menu (to replace TabBar)
       * C: Customer service link
       */
      required: false,
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
  mounted() {
    if (this.arrangement.length !== 3) {
      console.error('<TitleBar>: Invalid arrangement!');
    }
  },
};
</script>
<style lang="sass" scoped>
.title-bar
  position: relative
  width: 100vw
  min-height: 40px
  color: $white-bis
  display: flex
  justify-content: space-between
  align-items: center
  z-index: 100

  &.fixed
    position: fixed
  .item
    flex: 1
    text-align: center
    &.N
      opacity: 0
      pointer-events: none
    &.B
    &.M
    &.C
    &.I
      display: flex
      justify-content: center
      align-items: center
      height: 100%
      img
        max-height: 32px
        margin: 2px 0
  &.style0
  &.style1
  &.style2
    box-shadow: 0 0 1rem $grey
  &.style3
  &.style4
  &.style5
  

@media screen and (max-width: $mobile-width)
  .title-bar

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .title-bar
</style>

