<template>
  <div
    class="announcements"
    :class="`type${typesetting}`">
    <div class="news-tag">
      <span><i class="fas fa-volume-up"/></span>
    </div>
    <div class="marquee">
      <span
        ref="marqueeContent"
        class="marquee-content">
        {{ marqueeContent }}
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Announcements',
  props: {
    typesetting: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  data() {
    return {
      marqueeInterval: null,
      carouselWidth: 360,
    }
  },
  computed: {
    marqueeContent() {
      return this['brand/marqueeContent'];
    },
    ...mapGetters([
      'brand/marqueeContent'
    ])
  },
  methods: {
    startMarquee() {
      const vm = this;
      const { marqueeContent } = vm.$refs;
      const { carouselWidth } = this;
      const widthToScroll = marqueeContent.offsetWidth + window.innerWidth;
      const TIME_TO_PAUSE = 3000;
      let currentOffset = 0;
      let step = 1;
      let paused = false;
      // set initial offset
      marqueeContent.style.marginLeft = carouselWidth + 'px';

      clearInterval(vm.marqueeInterval);
      vm.marqueeInterval = setInterval(() => {
        if (!paused) {
          if ((currentOffset + step) >= widthToScroll) {
            paused = true;
            setTimeout(() => {
              paused = false;
              currentOffset = 0;
            }, TIME_TO_PAUSE)
          } else {
            currentOffset += step;
            window.requestAnimationFrame(() => {
              marqueeContent.style.marginLeft = (carouselWidth - currentOffset) + 'px';
            });
          }
        }
      }, 16);
    },
  },
  mounted() {
    this.startMarquee();
  },
  beforeDestroy() {
    clearInterval(this.marqueeInterval);
  },
  watch: {
    marqueeContent(newVal) {
      console.log('marqueeContent has new value');
      setTimeout(() => {
        this.startMarquee();
      }, 300);
    },
  }
};
</script>
<style lang="sass" scoped>
.announcements
  display: flex
  width: 100%
  z-index: 10
  overflow: hidden
  color: $grey-darker
  align-items: center
  &.type0
    background: $white-ter
    .news-tag
      background: grey
  &.type1
    background: $secondary-accent-2
    .news-tag
      background: $grey-dark
      padding: .5rem .5rem
      i
        color: $complimentary-accent-2
    .marquee
      color: $white-bis
      font-size: $size-65
  &.type2
    border-top: 3px solid $complimentary-accent-3
    border-bottom: 3px solid $complimentary-accent-3
    .news-tag
      background: $grey-light
      i
        color: $complimentary-accent-3
  &.type3
    background: $grey-lighter
    .news-tag
      background: $grey-light
      i
        color: $complimentary-accent-4
  &.type4
    background: $grey-lighter
    .news-tag
      background: grey
  &.type5
    background: $grey-lighter
    .news-tag
      background: $secondary-accent-6
      padding: .5rem
      i
        color: $white-bis
    .marquee
      font-size: $size-65
  
  &.type9
    background: linear-gradient(to right, #AE8D2C 0%, #E6DB47 40%, #E6DB47 80%, #AE8D2C 100%)
  .news-tag
    white-space: nowrap
    width: 100px
    background: linear-gradient(to right, #AE8D2C 0%, #AE8D2C 80%, transparent 100%)
    // background: $theme-accent
    padding: .2rem .5rem
    z-index: 11
    i
      padding-right: .5em
      color: $white-bis
      font-size: $size-65
  .marquee
    padding: .2em 0
    font-size: $size-7
    width: calc(#{$desktop-width} - 100px - 1rem)
    white-space: nowrap
    .marquee-content
      white-space: nowrap
      z-index: 109
@media screen and (max-width: $mobile-width)
  .announcements

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .announcements
</style>

