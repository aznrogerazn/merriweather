<template>
  <div
    ref="pageContainer">
    <div
      v-for="(component, idx) in DEMO1_LAYOUT"
      :key="idx">
      <TitleBar
        v-if="component.type === 'TitleBar'"
        :fixed="component.fixed"
        :typesetting="component.typesetting"
        :arrangement="component.arrangement"
        />
      <TitleBarPad
        v-if="component.type === 'TitleBar' && component.fixed === true"
        />
      <Carousel
        v-if="component.type === 'Carousel'"
        :typesetting="component.typesetting"
        :carousel="component.carousel"
        />
      <Announcements
        v-if="component.type === 'Announcements'"
        :typesetting="component.typesetting"
        />
      <CustomerService
        v-if="component.type === 'CustomerService'"
        :typesetting="component.typesetting"
        />
      <GameGrid
        v-if="component.type === 'GameGrid'"
        :typesetting="component.typesetting"
        />
      <PromoGrid
        v-if="component.type === 'PromoGrid'"
        :typesetting="component.typesetting"
        />
      <SmallGameGrid
        v-if="component.type === 'SmallGameGrid'"
        :typesetting="component.typesetting"
        :items="component.items"
        />
      
      <div v-if="component.type === 'TabBar'">
        <br/>
        <br/>
        <br/>
      </div>
      <TabBar
        v-if="component.type === 'TabBar'"
        :typesetting="component.typesetting"
        :activeIdx="0"
        />
      
      
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/home/TitleBar';
import TabBar from '@/components/home/TabBar';
import TitleBarPad from '@/components/home/TitleBarPad';
import Carousel from '@/components/home/Carousel';
import Announcements from '@/components/home/Announcements';
import CustomerService from '@/components/home/CustomerService';
import GameGrid from '@/components/home/GameGrid';
import PromoGrid from '@/components/home/PromoGrid';
import SmallGameGrid from '@/components/home/SmallGameGrid';
import GameMenu from '@/components/home/GameMenu';


export default {
  name: 'HomePage',
  components: {
    TitleBar,
    TabBar,
    TitleBarPad,
    Carousel,
    Announcements,
    CustomerService,
    GameGrid,
    PromoGrid,
    SmallGameGrid,
    GameMenu,
  },
  data() {
    return {
      DEMO1_LAYOUT: [
        { type: 'TitleBar', fixed: true,
          typesetting: 0, arrangement: 'NIN' },
        { type: 'Carousel',
          typesetting: 0,
          carousel: [
          { url: '/img/2017-11-09-23.19.20.png' },
          { url: '/img/C-MDJXfUAAAE_59.jpg' },
        ], },
        { type: 'Announcements', 
          typesetting: 0, },
        { type: 'SmallGameGrid',
          typesetting: 0, items: [
          { name: 'BINGO STAR', src: '/icons/games2/01.png', destination: '3' },
          { name: '極速北京PK10', src: '/icons/pk10-2.png', destination: '2', assign: '1' },
          { name: '極速飛艇', src: '/icons/speedboat.png', destination: '2', assign: '2' },
          { name: '奔騰賽馬', src: '/icons/horseracing.png', destination: '2', assign: '3' },
          { name: 'SUPER體育', src: '/icons/games/7.jpg', destination: '1' },
          { name: 'Forever8', src: '/icons/games2/forever8-round.png', destination: '/games?tab=5' },
          { name: 'SA真人', src: '/icons/games2/05.png', destination: '5' },
          { name: '瑪雅真人', src: '/icons/games2/06.png', destination: '' },
        ], },
        { type: 'PromoGrid', typesetting: 0, },
        { type: 'TabBar', typesetting: 0, },
      ],
    };
  },
  computed: {
    APP_LAYOUT() { return process.env.APP_LAYOUT },
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
