<template>
  <div
    class="password-panel"
    :class="`style${typesetting}`">
    <div class="titular-row">
      <div>密碼變更</div>
    </div>
  </div>
</template>
<script>
import api from '@/utils/request';
import { mapGetters } from 'vuex';

export default {
  name: 'Password',
  props: {
    typesetting: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      //
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="sass" scoped>
.password-panel
  padding: .5rem 0 1rem 0
  .titular-row
    padding-bottom: 1.5rem
    font-size: $size-3
    color: $white-ter
  &.style0
  &.style1
  &.style2
  &.style3
  &.style4
  &.style5


@media screen and (max-width: $mobile-width)
  .password-panel

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .password-panel
</style>

