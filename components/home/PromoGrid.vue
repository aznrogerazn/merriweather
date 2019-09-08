<template>
  <div
    class="promo"
    :class="`style${typesetting}`">
    <div class="title">
      <span>
        最新活動
      </span>
    </div>
    <div class="promogrid">
      <div
        v-for="(_vItem, _idx) in new Array(columns)"
        :key="_idx"
        class="col"
        :class="borderCollapse ? 'collapse ' : ' ' + _idx == (columns - 1) ? 'rightmost' : ''">
        <div
          v-for="(item, idx) in getColumnItems(_idx)"
          :key="idx"
          class="promo-item"
          :class="'size' + item.size"
          :style="{backgroundImage: `url(${item.url})`}">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PromoGrid',
  props: {
    typesetting: {
      type: Number,
      required: false,
      default: 0,
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
    borderCollapse: {
      type: Boolean,
      default: false,
      required: false,
    },
    columns: {
      type: Number,
      default: 2,
      required: false,
    },
    items: {
      type: Array,
      default: () => [
        { url: '/img/l_58f8957c3286fe19a80a5e8d.png', title: '彩票', size: 1, col: 0 },
        { url: '/img/23379ae2c5ed4e0b0ed2efe0e78a4e15032b9e53ff06c-wGAUUh_fw658.jpg', title: '彩票', size: 2, col: 1 },        
        { url: '/img/15378652377735685.jpg', title: '彩票', size: 3, col: 0 },
        { url: '/img/l_58f8957c3286fe19a80a5e8d.png', title: '彩票', size: 1, col: 1 },
        { url: '/img/1441798070-680471764.jpg', title: '彩票', size: 1, col: 1 },
      ],
      required: false,
    },
  },
  methods: {
    getColumnItems(idx) {
      // console.log(idx);
      const { items } = this;
      const _col = [];
      items.map((item, _idx) => {
        if (item.col === idx) {
          _col.push(item);
        }
      });
      // console.log(_col);
      return _col;
    },
  },
};
</script>
<style lang="sass" scoped>
.promo
  .title
    font-size: $size-65
    color: $error-accent
    font-weight: 560
    padding: .5rem
  .promogrid
    display: flex
    flex-direction: row
    margin: 0 auto
    width: 100%
    padding: .5rem
    .col
      display: flex
      flex-direction: column
      flex: 1
      margin-right: .5rem
      &.rightmost
        margin-right: 0
      &.collapse
        margin: 0
      .promo-item
        // width: calc(50vw - .5rem)
        background-size: auto 100%
        background-position: center
        padding: .5rem
        color: $white-bis
        border-radius: 5px
        +no-select
        +normal-transition
        span
          text-shadow: 0 0 3px grey
        &:hover
          background-size: auto 105%
          cursor: pointer
        &.size1
          height: calc(50vw - 1rem)
          margin-bottom: .5rem
        &.size2
          height: calc(100vw - 1.5rem)
          margin-bottom: .5rem
        &.size3
          height: calc(150vw - 2rem)
          margin-bottom: .5rem
  &.style0
  &.style1
    background: $black-ter
    .title
      color: $primary-accent-2
      font-weight: 800
  &.style2
    .title
      span
        border-left: 5px solid $primary-accent-3
        padding-left: .5rem
  &.style3
    .title
      span
        color: $primary-accent-4
        border-bottom: 3px solid $primary-accent-4
        padding-bottom: 3px
        padding-right: 1rem
    .promogrid
      .col
        .promo-item
          border-radius: 1px
  &.style4
  &.style5

@media screen and (max-width: $mobile-width)
  .promogrid

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .promogrid
</style>


