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
    };
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
    border-top: 1px solid $grey-light
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

