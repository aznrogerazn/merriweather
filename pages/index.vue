<template>
  <div
    ref="pageContainer">
    <TitleBar arrangement="NIN"/>
    <DemoGrid />
  </div>
</template>

<script>
import TitleBar from '@/components/home/TitleBar';
import Carousel from '@/components/home/Carousel';
import Announcements from '@/components/home/Announcements';
import CustomerService from '@/components/home/CustomerService';
import GameGrid from '@/components/home/GameGrid';
import PromoGrid from '@/components/home/PromoGrid';
import SmallGameGrid from '@/components/home/SmallGameGrid';
import GameMenu from '@/components/home/GameMenu';
import DemoGrid from '@/components/DemoGrid';

export default {
  name: 'HomePage',
  components: {
    TitleBar,
    Carousel,
    Announcements,
    CustomerService,
    GameGrid,
    PromoGrid,
    SmallGameGrid,
    GameMenu,
    DemoGrid,
  },
  data() {
    return {};
  },
  computed: {
    APP_LAYOUT() { return process.env.APP_LAYOUT },
    INDEX_LAYOUT() { return process.env.INDEX_LAYOUT },
  },
  mounted() {
    // console.log(this.APP_LAYOUT.fontStack);
    const { pageContainer } = this.$refs;
  },
}
</script>

<style lang="sass">
.container
  margin: 0 auto
</style>
