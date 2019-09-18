<template>
  <div
    class="conversion"
    :class="`style${typesetting}`">
    <div class="titular-row">
      <div>額度轉換</div>
    </div>
    <div class="panel-row">
      <div class="account-info">
        <div class="tag">主帳戶</div>
        <div class="value">9168.50</div>
      </div>
      <div class="dropdown">
        <i class="fas fa-chevron-down"/>
      </div>
    </div>
    <br/>
    <br/>
    <div class="panel-row border">
      <div class="conversion-input">
        <span class="label">轉出金額</span>
        <input type="number" v-model="amountToConvert"/>
        <span class="all-in">全部轉出</span>
      </div>
    </div>
    <br/>
    <br/>
    <div class="panel-row">
      <div class="account-info">
        <div class="tag">主帳戶</div>
        <div class="value">9168.50</div>
      </div>
      <div class="dropdown">
        <i class="fas fa-chevron-down"/>
      </div>
    </div>
    <br/>
    <br/>
    <div class="panel-row">
      <div class="confirm-button">
        進行轉換
      </div>
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
      amountToConvert: 0,
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
  .panel-row
    display: flex
    .account-info
      flex-basis: 80%
      .tag
        font-size: $size-65
        opacity: .6
      .value
        font-size: $size-3
        font-family: 'Montserrat'
        color: $complimentary-accent-2
        padding: 5px 0 0 5px
    .dropdown
      flex-basis: 20%
      display: flex
      justify-content: center
      align-items: center
      i.fas
        font-size: $size-7
        opacity: .6
        border: 1px solid $grey-light
        width: 2rem
        height: 2rem
        line-height: 2rem
        text-align: center
    .conversion-input
      position: relative
      background: $grey-darker
      border-radius: 3px
      margin-top: -1rem
      padding: 5px 5px 8px 5px
      box-shadow: 0 0 9px 0 $grey-darker
      .label
        font-size: $size-7
        padding: 2px 5px 3px 5px
      input
        font-size: $size-65
        background: transparent
        color: $grey-lighter
        border: 0
        outline: 0
        width: 25vw
      .all-in
        background: $complimentary-accent-2
        border-radius: 2px
        padding: 2px 5px 3px 5px
        color: $grey-dark
        font-size: $size-7
        vertical-align: middle
    .confirm-button
      background: $complimentary-accent-2
      padding: 5px
      color: $grey-dark
      border-radius: 7px
      letter-spacing: 2px
      text-align: center
      flex: 1
      margin: .5rem 1.5rem
      box-shadow: 0 3px 12px 0 $grey-darker
    &.border
      border-top: 1px solid $grey-light
      justify-content: center
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

