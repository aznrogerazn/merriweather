<template>
  <div
    class="page6"
    ref="pageContainer">
    <div
      v-for="(component, idx) in DEMO1_LAYOUT"
      :key="idx">
      <TitleBar
        v-if="component.type === 'TitleBar'"
        :fixed="component.fixed"
        :typesetting="component.typesetting"
        :arrangement="component.arrangement"
        :bgColour="component.bgColour"
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
        :items="component.items"
        :columns="component.columns"
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
        :bgColour="component.bgColour"
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
    const DEMO_IDX = 5;
    return {
      DEMO1_LAYOUT: [
        { type: 'TitleBar', fixed: true,
          typesetting: DEMO_IDX, arrangement: 'NIN',},
        { type: 'Carousel',
          typesetting: DEMO_IDX,
          carousel: [
          { url: '/img/01194846445.jpg' },
          { url: '/img/5660fcb909a1a.jpg' },
        ], },
        { type: 'Announcements', 
          typesetting: DEMO_IDX, },
        { type: 'SmallGameGrid',
          typesetting: DEMO_IDX, items: [
          { name: 'BINGO STAR', src: '/icons/games2/01.png', destination: '3' },
          { name: '極速北京PK10', src: '/icons/pk10-2.png', destination: '2', assign: '1' },
          { name: '極速飛艇', src: '/icons/speedboat.png', destination: '2', assign: '2' },
          { name: '奔騰賽馬', src: '/icons/horseracing.png', destination: '2', assign: '3' },
          { name: 'SUPER體育', src: '/icons/games/7.jpg', destination: '1' },
          { name: 'BBIN', src: '/icons/games/5.jpg', destination: '/games?tab=5' },
          { name: 'SA真人', src: '/icons/games2/05.png', destination: '5' },
          { name: 'AG電子', src: '/icons/games/4.jpg', destination: '' },
        ], },
        { type: 'PromoGrid', typesetting: DEMO_IDX,
          columns: 3,
          items: [
          { url: '/img/131690609314826110.jpg', title: '', size: 2, col: 0 },
          { url: '/img/bimages55.jpg', title: '', size: 1, col: 1 },
          { url: '/img/true.jpg', title: '', size: 1, col: 1 },
          
          { url: '/img/258069-15120111593481.jpg', title: '', size: 2, col: 2 },
        ],},
        { type: 'TabBar', typesetting: DEMO_IDX, bgColour: '#323232' },
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
.page6
  background: $black-ter
</style>
