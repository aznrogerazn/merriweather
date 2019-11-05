<template>
  <div
    class="bank-summary"
    :class="`style${typesetting}`">
    <div class="titular-row">
      <div>銀行帳號</div>
    </div>
    <div v-if="!hasBankAccount">
      <div class="bank-select">
        <div class="bank-info">
          <div class="tag">戶名</div>
          <div class="bank-input">
            <input
              type="text"
              v-model="bank_account_name"
              autocomplete="off"
              placeholder="用於提款，綁定後不可更改"/>
          </div>
        </div>
      </div>
      <div class="bank-select">
        <div class="bank-info">
          <div class="tag">銀行與代碼</div>
          <div class="value">{{ banks[boundBankId].name }}</div>
        </div>
        <div class="dropdown">
          <i class="fas fa-chevron-down"/>
          <select
            v-model="boundBankId">
            <option
              v-for="(bank, idx) in banks"
              :key="idx"
              :value="idx">
              {{ bank.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="bank-select">
        <div class="bank-info">
          <div class="tag">分行名稱</div>
          <div class="bank-input">
            <input
              type="text"
              v-model="bank_branch"
              autocomplete="off"
              placeholder="請輸入分行名稱"/>
          </div>
        </div>
      </div>
      <div class="bank-select">
        <div class="bank-info">
          <div class="tag">銀行帳號</div>
          <div class="bank-input">
            <input
              type="text"
              v-model="bank_account"
              autocomplete="off"
              placeholder="請輸入銀行帳號"/>
          </div>
        </div>
      </div>
      <div class="bank-select">
        <div class="bank-info">
          <div class="tag">提款密碼</div>
          <div class="bank-input">
            <input
              type="password"
              v-model="password"
              autocomplete="new-password"
              placeholder="6~16位數字或字母組成"/>
          </div>
        </div>
      </div>
      <div class="bank-select">
        <div class="bank-info">
          <div class="tag">確認密碼</div>
          <div class="bank-input">
            <input
              type="password"
              v-model="password_confirmation"
              autocomplete="new-password"
              placeholder="請再次輸入提款密碼"/>
          </div>
        </div>
      </div>
      <div class="bind-row">
        <div class="bind-btn">立即綁定</div>
      </div>
    </div>  
  </div>
</template>
<script>
import api from '@/utils/request';
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
      boundBankId: 0,

      hasBankAccount: false,
      boundBankData: {},
      statusLoaded: false,

      hasError: false,
      member_id: 0,
      bank_code: '',
      bank_branch: '',
      bank_account: '',
      bank_account_name: '',
      bank_name: '',
      bank_id: 999,
      password: '',
      password_confirmation: '',
      showingBankSources: false,
    };
  },
  computed: {
    banks() {
      const _banks = [
        { name: '001中央信託', icon: '/icons/nav/9.png '}, 
        { name: '003交通銀行', icon: '/icons/nav/9.png '}, 
        { name: '004台灣銀行', icon: '/icons/nav/9.png '}, 
        { name: '005土地銀行', icon: '/icons/nav/9.png '},
        { name: '006合庫商銀', icon: '/icons/nav/9.png '}, 
        { name: '007第一銀行', icon: '/icons/nav/9.png '}, 
        { name: '008華南銀行', icon: '/icons/nav/9.png '}, 
        { name: '009彰化銀行', icon: '/icons/nav/9.png '},
        { name: '010華僑銀行', icon: '/icons/nav/9.png' }, 
        { name: '011上海銀行', icon: '/icons/nav/9.png' }, 
        { name: '012台北富邦', icon: '/icons/nav/9.png' }, 
        { name: '013國泰世華', icon: '/icons/nav/9.png' },
        { name: '016高雄銀行', icon: '/icons/nav/9.png' }, 
        { name: '017兆豐商銀', icon: '/icons/nav/9.png' }, 
        { name: '018農業金庫', icon: '/icons/nav/9.png' }, 
        { name: '021花旗銀行', icon: '/icons/nav/9.png' },
        { name: '024運通銀行', icon: '/icons/nav/9.png' }, 
        { name: '025首都銀行', icon: '/icons/nav/9.png' }, 
        { name: '039澳盛銀行', icon: '/icons/nav/9.png' }, 
        { name: '040中華開發', icon: '/icons/nav/9.png' },
        { name: '050臺灣企銀', icon: '/icons/nav/9.png' }, 
        { name: '051台北商銀', icon: '/icons/nav/9.png' }, 
        { name: '052渣打銀行', icon: '/icons/nav/9.png' }, 
        { name: '053台中商銀', icon: '/icons/nav/9.png' },
        { name: '054京城商銀', icon: '/icons/nav/9.png' }, 
        { name: '056花蓮企銀', icon: '/icons/nav/9.png' }, 
        { name: '057台東企銀', icon: '/icons/nav/9.png' }, 
        { name: '075東亞銀行', icon: '/icons/nav/9.png' },
        { name: '081匯豐銀行', icon: '/icons/nav/9.png' }, 
        { name: '083渣打銀行', icon: '/icons/nav/9.png' }, 
        { name: '087標旗銀行', icon: '/icons/nav/9.png' },
        { name: '102華泰銀行', icon: '/icons/nav/9.png' }, 
        { name: '103臺灣新光商銀', icon: '/icons/nav/9.png' },
        { name: '108陽信銀行', icon: '/icons/nav/9.png' },
        { name: '118板信銀行', icon: '/icons/nav/9.png' },
        { name: '147三信銀行', icon: '/icons/nav/9.png' },
        { name: '151第七商銀', icon: '/icons/nav/9.png' },
        { name: '700中華郵政', icon: '/icons/nav/9.png' },
        { name: '803聯邦銀行', icon: '/icons/nav/9.png' }, 
        { name: '804中華銀行', icon: '/icons/nav/9.png' }, 
        { name: '805遠東銀行', icon: '/icons/nav/9.png' }, 
        { name: '806元大銀行', icon: '/icons/nav/9.png', },
        { name: '807永豐銀行', icon: '/icons/nav/9.png', }, 
        { name: '808玉山銀行', icon: '/icons/nav/9.png', }, 
        { name: '809凱基銀行', icon: '/icons/nav/9.png', }, 
        { name: '810星展銀行', icon: '/icons/nav/9.png', },
        { name: '812台新銀行', icon: '/icons/nav/9.png', }, 
        { name: '814大眾銀行', icon: '/icons/nav/9.png', }, 
        { name: '815日盛銀行', icon: '/icons/nav/9.png', }, 
        { name: '816安泰銀行', icon: '/icons/nav/9.png', },
        { name: '822中國信託', icon: '/icons/nav/9.png', }, 
        { name: '825慶豐銀行', icon: '/icons/nav/9.png', },
      ];
      if (this.is777gam) _banks.push({ name: '778淡水區農會', icon: '/icons/nav/9.png', });
      return _banks;
    },
  },
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
  .bank-select
    display: flex
    .bank-info
      flex-basis: 80%
      padding-bottom: .5rem
      .tag
        font-size: $size-65
        opacity: .6
      .value
        font-size: $size-5
        font-family: 'Montserrat'
        color: $complimentary-accent-2
        padding: 5px 0 0 5px
      .bank-input
        position: relative
        background: $grey-darker
        border-radius: 3px
        margin: .5rem 0
        padding: 5px 5px 8px 5px
        box-shadow: 0 0 9px 0 $grey-darker
        input
          font-size: $size-65
          background: transparent
          color: $grey-lighter
          border: 0
          outline: 0
          width: 100%
          font-family: 'Montserrat'
    .dropdown
      flex-basis: 20%
      display: flex
      justify-content: center
      align-items: center
      position: relative
      margin: .5rem 0 2rem 0
      i.fas
        font-size: $size-7
        opacity: .6
        border: 1px solid $grey-light
        width: 2rem
        height: 2rem
        line-height: 2rem
        text-align: center
      select
        position: absolute
        height: 100%
        width: 100%
        opacity: 0
  .bind-row
    .bind-btn
      background: $complimentary-accent-2
      padding: 5px
      color: $grey-dark
      border-radius: 7px
      letter-spacing: 2px
      text-align: center
      flex: 1
      margin: .5rem 1.5rem
      font-size: $size-65
      box-shadow: 0 3px 12px 0 $grey-darker
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

