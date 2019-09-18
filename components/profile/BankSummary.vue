<template>
  <div
    class="bank-summary"
    :class="`style${typesetting}`">
    <div class="titular-row">
      <div>銀行帳號</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BankSummary',
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
.bank-summary
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
  .bank-summary

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .bank-summary
</style>

