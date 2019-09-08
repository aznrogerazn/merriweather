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
      <GameMenu
        v-if="component.type === 'GameMenu'"
        :typesetting="component.typesetting"
        />

      <div v-if="component.type === 'TabBar'">
        <br/>
        <br/>
        <br/>
      </div>
      <TabBar
        v-if="component.type === 'TabBar'"
        :typesetting="component.typesetting"
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
    const DEMO_IDX = 1;
    return {
      DEMO1_LAYOUT: [
        { type: 'TitleBar', fixed: true, typesetting: DEMO_IDX, arrangement: 'NIN' },
        { type: 'GameMenu', },
        { type: 'TabBar', typesetting: DEMO_IDX, },
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
};
</script>