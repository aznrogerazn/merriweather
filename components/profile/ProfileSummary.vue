<template>
  <div
    class="profile-summary"
    :class="`style${typesetting}`">
    <div class="info-row">
      <img
        class="icon"
        src="/icons/user.png" />
      <div class="user-info">
        <div class="username">{{ user.username }}</div>
        <div class="nickname">{{ user.nickname }}</div>
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
        轉換
      </div>
      <div class="action">
        <div class="icon red">
          <i class="fas fa-money-bill-alt"/>
        </div>
        提款
      </div>
      <div class="action">
        <div class="icon blue">
          <i class="fas fa-hand-holding-usd"/>
        </div>
        存款
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
      },
      showingCoins: false,
    };
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
  padding: 1rem 0
  .info-row
    display: flex
    img.icon
      width: 40px
      height: 40px
    .user-info
      padding: 0 10px
      .username
        font-size: $size-7
        opacity: .8
      .nickname
        font-size: $size-5
  .balance-info
    position: relative
    padding: 1rem 0
    border-bottom: 1px solid $grey-light
    .tag
      font-size: $size-65
      opacity: .6
    .value
      font-size: $size-3
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
      font-weight: 750
  .coin-wrapper
    border-top: 1px solid $grey-light
    padding: 1.5rem 0
    min-height: 120px
    display: flex
    justify-content: center
    align-items: center
    img.coin
      height: 90px
      &.front
        transform: translate3d(-45px, 0, 0)
        transition: .75s ease-in-out
        &.show
          transform: translate3d(-75px, 0, 0) rotate(-10deg)
      &.back
        transform: translate3d(45px, 0, 0)
        transition: .75s ease-in-out
        opacity: .3
        &.show
          transform: translate3d(45px, 0, 0)
          opacity: 1
  .shortcuts
    display: flex
    justify-content: space-around
    .action
      padding: 5px
      .icon
        font-size: $size-4
        padding-bottom: 5px
        &.green
          color: #81A877
        &.red
          color: #D17867
        &.blue
          color: #5485B3
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

