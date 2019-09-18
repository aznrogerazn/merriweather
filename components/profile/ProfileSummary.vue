<template>
  <div
    class="profile-summary"
    :class="`style${typesetting}`">
    <div class="titular-row">
      <div>會員資料</div>
    </div>
    <div class="info-row">
      <img
        class="icon"
        src="/icons/user.png" />
      <div class="user-info">
        <div class="username">{{ user.username }}</div>
        <div class="nickname">{{ user.nickname }}</div>
      </div>
      <div class="user-type-tag">
        {{ userType }}
      </div>
    </div>
    <br/>
    <div class="coin-wrapper">
      <img
        class="coin back"
        :class="showingCoins ? 'show' : '' "
        src="~assets/img/coin-back-c.png"/>
      <img
        class="coin front"
        :class="showingCoins ? 'show' : '' "
        src="~assets/img/coin-front-c.png"/>
    </div>
    <div class="balance-info">
      <div class="tag">中心餘額</div>
      <div class="value">{{ user.balance }}</div>
      <br/>
      <div class="tag">總資產</div>
      <div class="value">{{ user.total_balance }}</div>
      <div class="refresh-now">
        <i class="fas fa-sync-alt"/>
        <span>立即刷新</span>
      </div>
    </div>
    <br/>
    <div class="shortcuts">
      <div class="action">
        <div class="icon green">
          <i class="fas fa-sync"/>
        </div>
        <span class="label">轉換</span>
      </div>
      <div class="action">
        <div class="icon red">
          <i class="fas fa-money-bill-alt"/>
        </div>
        <span class="label">提款</span>
      </div>
      <div class="action">
        <div class="icon blue">
          <i class="fas fa-hand-holding-usd"/>
        </div>
        <span class="label">存款</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileSummary',
  props: {
    typesetting: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      user: {
        username: 'johnapples33d',
        nickname: 'John Appleseed',
        balance: '9168.50',
        total_balance: '22168.50',
        type: 1,
      },
      showingCoins: false,
    };
  },
  computed: {
    userType() {
      return this.user.type === 1 ? '一般會員' : '系統號';
    },
  },
  mounted() {
    setTimeout(() => {
      this.showingCoins = true;
    }, 300);
  },
};
</script>
<style lang="sass" scoped>
.profile-summary
  padding: .5rem 0 1rem 0
  .titular-row
    padding-bottom: 1.5rem
    font-size: $size-3
    color: $white-ter
  .info-row
    position: relative
    display: flex
    img.icon
      width: 40px
      height: 40px
    .user-info
      padding: 0 10px
      flex: 1
      .username
        font-size: $size-7
        opacity: .8
      .nickname
        font-size: $size-5
    .user-type-tag
      position: absolute
      top: 0
      right: 0
      border: 1px solid $grey-light
      border-radius: 2px
      padding: 2px 5px
      font-size: $size-7

  .balance-info
    position: relative
    padding: 1rem 0
    border-bottom: 1px solid $grey-light
    .tag
      font-size: $size-65
      opacity: .6
    .value
      font-size: $size-3
      font-family: 'Montserrat'
      color: $complimentary-accent-2
      padding: 5px
    .refresh-now
      position: absolute
      top: 1rem
      right: 0
      border: 1px solid $grey-light
      border-radius: 2px
      padding: 5px
      font-size: $size-65
  .coin-wrapper
    +no-select
    border-top: 1px solid $grey-light
    padding: 1.5rem 0
    min-height: 120px
    display: flex
    justify-content: center
    align-items: center
    img.coin
      height: 18vh
      border-radius: 100%
      &.front
        box-shadow: 0 0 12px 0 $grey-darker
        transform: translate3d(-9vh, 0, 0)
        transition: .75s ease-in-out
        &.show
          transform: translate3d(-13vh, 0, 0) rotate(-10deg)
      &.back
        box-shadow: 0 3px 12px 0 $grey-darker
        transform: translate3d(9vh, 0, 0)
        transition: .75s ease-in-out
        opacity: .3
        &.show
          transform: translate3d(9vh, 0, 0)
          opacity: 1
  .shortcuts
    +no-select
    display: flex
    justify-content: space-around
    .action
      text-align: center
      .icon
        font-size: $size-4
        padding-bottom: 5px
        &.green
          color: #81A877
        &.red
          color: #D17867
        &.blue
          color: #5485B3
      .label
        font-size: $size-65
  &.style0
    .info-row
      img.icon
        filter: invert(1)
  &.style1
  &.style2
  &.style3
  &.style4
  &.style5


@media screen and (max-width: $mobile-width)
  .profile-summary

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .profile-summary
</style>

