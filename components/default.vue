<template>
  <div
    class="default"
    :class="`style${typesetting}`">
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Default',
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
.default
  &.style0
  &.style1
  &.style2
  &.style3
  &.style4
  &.style5


@media screen and (max-width: $mobile-width)
  .default

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .default
</style>

