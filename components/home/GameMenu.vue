<template>
  <div
    class="gamemenu"
    :class="`style${typesetting}`">
    <div
      class="sidemenu">
      <div
        v-for="(item, idx) in categories"
        :key="idx"
        class="item"
        :class="focusedIdx === idx ? 'active' : '' ">
        <img :src="item.iconUrl"/>
        <div>{{ item.caption }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameMenu',
  props: {
    typesetting: {
      type: Number,
      default: 0,
      required: false,
    },
    categories: {
      type: Array,
      default: () => [
        { iconUrl: '/icons/lobby/1.png', caption: '彩票', },
      ],
      required: false,
    },
  },
  data() {
    return {
      focusedIdx: 0
    };
  },
};
</script>
<style lang="sass" scoped>
.gamemenu

@media screen and (max-width: $mobile-width)
  .gamemenu

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .gamemenu
</style>

