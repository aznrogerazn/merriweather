<template>
  <div
    ref="carouselWrapper"
    class="carousel-wrapper"
    :class="`style${typesetting}`">
    <div
      v-for="(image, idx) in carousel"
      :key="idx"
      class="item"
      @click="showCarouselContent(image)">
      <img :src="image.url"/>
      <div class="comments">
        <div
          v-if="false"
          class="title">{{ image.title }}</div>
        <div
          v-if="false"
          class="subtitle">{{ image.subtitle }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/utils/request';

export default {
  name: 'Carousel',
  props: {
    carousel: {
      type: Array,
      required: false,
      default: [],
    },
    typesetting: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  data() {
    return {
      autoplayTimer: null,
      currentIdx: 0,
    };
  },
  methods: {
    showCarouselContent(item) {
      if (item.content) this.$router.push('/promo/carousel?id=' + item.id);
    },
    getCarouselContent() {
      api('/api/v1/carousel', null, 'get').then(d => {
        console.log(d.data);
        if (d.data.length > 0) {
          this.carousel = d.data;
        } else {
          this.carousel = [
          ];
        }
        this.$forceUpdate();
      }).catch(e => {
        console.error(e.message);
      });
    },
    next() {
      const vm = this;
      let { currentIdx, carousel, isMy16888, isStar888 } = this;
      const { carouselWrapper } = vm.$refs;
      const w = carouselWrapper.clientWidth;
      let scrollBehavior = '';
      if (currentIdx !== (carousel.length)) {
        // Scroll ++
        // console.log('Scroll ++');
        vm.currentIdx ++;
        scrollBehavior = 'smooth';
      } else {
        vm.currentIdx = 0;
        currentIdx = 0;
        this.currentIdx = 0;
        // Scroll to 0
        // console.log('Scroll to 0');
        scrollBehavior = (isMy16888 || isStar888) ? '' : 'smooth';
      }
      let behaviorObj = scrollBehavior ? { behavior: scrollBehavior } : {};
      const destination = w * currentIdx;
      const options = {
        left: destination,
        ...behaviorObj
      };
      // console.log('options: ' + JSON.stringify(options));
      carouselWrapper.scrollTo(options);
    },
  },
  mounted() {
    const vm = this;
    // vm.getCarouselContent();
    vm.autoplayTimer = setInterval(() => {
      vm.next();
    }, 6000);
  },
  beforeDestroy() {
    clearInterval(this.autoplayTimer);
  },
};
</script>
<style lang="sass" scoped>
.carousel-wrapper
  width: 100vw
  white-space: nowrap
  overflow-x: auto
  overflow-y: hidden
  height: 42vw
  display: flex
  scroll-snap-type: x mandatory
  scroll-snap-points-x: repeat(100%)
  -webkit-overflow-scrolling: touch
  background: $black-bis
  .item
    position: relative
    scroll-snap-coordinate: 0% 0%
    scroll-snap-align: start
    overflow-y: visible
    height: 50vw
    img
      margin-top:
      width: 100vw
    .comments
      +no-select
      position: absolute
      bottom: 5px
      right: 10px
      text-align: right
      text-shadow: .5px -1px 5px $white-bis
      .title
        font-size: 1.5rem
      .subtitle
        font-size: 1.05rem
        font-style: italic
  &.style0
  &.style1
    height: 28vw
  &.style2
    height: 34vw
  &.style3
  &.style4
    height: 35vw
  &.style5
    height: 45vw
  
@media screen and (max-width: $mobile-width)
  .carousel-wrapper

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .carousel-wrapper
</style>

