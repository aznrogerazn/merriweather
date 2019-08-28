<template>
  <div
    class="title-bar"
    :class="fixed ? 'fixed' : '' "
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
       * B: Branding Image
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

@media screen and (max-width: $mobile-width)
  .title-bar

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .title-bar
</style>

