<template>
  <div
    class="smallgamegrid"
    :class="`type${typesetting}`">
    <div class="grid-title">
      <div>
        <span class="leftmost">平台推薦</span>
        <span class="disc">本週熱門</span>
      </div>
      <div v-if="false">
        <span class="more">更多</span>
        <span>＞</span>
      </div>
    </div>
    <div class="grid">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="item"
        @click="navigate(item.destination, item.assign)">
        <div class="icon">
          <img :src="item.src"/>
        </div>
        <div class="title">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/utils/request';
import { mapGetters } from 'vuex';

export default {
  name: 'SmallGameGrid',
  computed: {
    ...mapGetters([
      'isMobile'
    ])
  },
  props: {
    items: {
      type: Array,
      default: [],
      required: false,
    },
    expanded: {
      type: Boolean,
      default: false,
      required: false,
    },
    lobbyLink: {
      type: String,
      default: '/games',
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
    itemType: {
      type: String,
      default: 'circle',  // 'circle', or 'square'
      required: false,
    },
    typesetting: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  methods: {
    navigate(id, assign) {
      //
    },
  },
};
</script>
<style lang="sass" scoped>
.smallgamegrid
  &.type0
    .grid
      .item
        .icon
          img
            box-shadow: 0 0 10px $grey-lighter
            border-radius: 100%
        .title
          font-size: $size-65
          
  &.type1
    .grid
      .item
        .title
          background: $warning-accent
  .grid-title
    // border-top: 7px solid #533125
    display: flex
    justify-content: space-between
    padding: 1rem .5rem 0 .5rem
    font-size: $size-65
    .leftmost,.more
      color: $error-accent
      font-weight: 560
    .disc
      color: $grey
      padding-left: 1rem
  .grid
    display: flex
    flex-wrap: wrap
    padding: .5rem 1vw
    .item
      +no-select
      flex: 1
      flex-basis: 25%
      width: 24vw
      .icon
        padding: 1rem
        img
          width: calc(24vw - 2rem)
      .title
        text-align: center
        color: $grey-dark

@media screen and (max-width: $mobile-width)
  .smallgamegrid

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .smallgamegrid
</style>

