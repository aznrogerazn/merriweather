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
          <span>{{ item.name }}</span>
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
    background: $black-ter
    .grid-title
      .leftmost,.more
        color: $primary-accent-2
        font-weight: 780
    .grid
      .item
        .title
          color: $grey-light
        .icon
          img
            border-radius: 100px
  &.type2
    .grid-title
      .leftmost,.more
        color: $primary-accent-3
        font-weight: 780
        border-left: 5px solid $primary-accent-3
        padding-left: .5rem
    .grid
      .item
        .title
          font-size: $size-7

        .icon
          padding: 1rem 1rem .5rem 1rem
          img
            border-radius: 100px
            box-shadow: 0 0 1rem 0 $grey-light
  &.type3
    .grid-title
      .leftmost,.more
        color: $primary-accent-4
        border-bottom: 3px solid $primary-accent-4
        padding-bottom: 3px
        padding-right: 1rem
    .grid
      .item
        .title
          font-size: $size-65
          color: $primary-accent-4
          min-height: 1.25rem
          span
            vertical-align: middle
        .icon
          padding: 1rem 1rem .5rem 1rem
          text-align: center
          img
            width: calc(22vw - 2rem)
            border-radius: 100px
            border: 2px solid $complimentary-accent-4
  &.type4
    .grid-title
      .leftmost,.more
        background: $primary-accent-5
        color: $white-bis
        padding: 3px 5px
        font-weight: 780
    .grid
      .item
        .title
          color: $primary-accent-5
        .icon
          img
            border-radius: 100px
  &.type5
    .grid-title
      .leftmost,.more
        color: $complimentary-accent-6
        font-weight: 780
        &:before
          content: '>'
          padding-right: .25rem
    .grid
      .item
        .title
          font-size: $size-7
          font-weight: 780
          padding-bottom: 1rem
          color: $complimentary-accent-6
        .icon
          img
            border-radius: 100px
          
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

