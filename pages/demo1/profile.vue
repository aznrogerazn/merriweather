<template>
  <div class="container">
    <div
      v-for="(component, idx) in PROFILE_LAYOUT"
      :key="idx">
      <TitleBar
        v-if="component.type === 'TitleBar'"
        :fixed="component.fixed"
        :typesetting="component.typesetting"
        :arrangement="component.arrangement"
        />
      <ProfileMenu
        v-if="component.type === 'ProfileMenu'"
        :fixed="component.fixed"
        :typesetting="component.typesetting"
        :items="component.items"
        />
      <!-- <div v-if="component.type === 'TabBar'">
        <br/>
        <br/>
        <br/>
      </div> -->
      <TabBar
        v-if="component.type === 'TabBar'"
        :typesetting="component.typesetting"
        :activeIdx="4"
        />
    </div>
  </div>
</template>
<script>
import TitleBar from '@/components/home/TitleBar';
import TabBar from '@/components/home/TabBar';
import ProfileMenu from '@/components/profile/ProfileMenu';

export default {
  name: 'ProfilePage',
  components: {
    TitleBar,
    TabBar,
    ProfileMenu,
  },
  data() {
    const DEMO_IDX = 0;
    return {
      PROFILE_LAYOUT: [
        { type: 'TitleBar', fixed: true,
          typesetting: DEMO_IDX, arrangement: 'NIN' },
        { type: 'ProfileMenu', typesetting: DEMO_IDX, items: [
          { imageUrl: '/icons/nav/1.png', title: '會員資料', type: 'ProfileSummary', },
          { imageUrl: '/icons/nav/2.png', title: '額度轉換', type: 'Conversion', },
          { imageUrl: '/icons/nav/3.png', title: '銀行帳號', type: 'BankSummary', },
          { imageUrl: '/icons/nav/4.png', title: '密碼變更', type: 'EditPassword', },
          { imageUrl: '/icons/nav/5.png', title: '盈虧報表', type: 'ProfitRecords', },
          { imageUrl: '/icons/nav/6.png', title: '轉換紀錄', type: 'ConversionRecords', },
          { imageUrl: '/icons/nav/7.png', title: '存提紀錄', type: 'ProfileSummary', },
          { imageUrl: '/icons/nav/8.png', title: '活動查詢', type: 'Promos', },
          { imageUrl: '/icons/nav/9.png', title: '代理中心', type: 'Management', },
        ]},
        { type: 'TabBar', typesetting: DEMO_IDX, },
      ],
    };
  },
};
</script>
<style lang="sass" scoped>

</style>