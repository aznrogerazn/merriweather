<template>
  <div
    class="conversion"
    :class="`style${typesetting}`">
    <div class="titular-row">
      <div>額度轉換</div>
    </div>
    <div
      class="modal"
      :class="isModalOpen ? 'active' : '' ">
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Conversion',
  props: {
    typesetting: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="sass" scoped>
.conversion
  padding: .5rem 0 1rem 0
  .titular-row
    padding-bottom: 1.5rem
    font-size: $size-3
  &.style0
  &.style1
  &.style2
  &.style3
  &.style4
  &.style5


@media screen and (max-width: $mobile-width)
  .conversion

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .conversion
</style>

