<template>
  <div
    class="profileMenu"
    :class="`style${typesetting}`">
    <div class="nav">
      <div
        v-for="(component, idx) in items"
        :key="idx"
        class="nav-item"
        :class="currentIdx === idx ? 'active' : ''"
        @click="currentIdx = idx">
        <img :src="component.imageUrl"/>
        <div>{{ component.title }}</div>
      </div>
    </div>
    <transition-group
      name="menu"
      class="menu-area"
      mode="out-in"
      tag="div">
      <div
        v-for="(component, idx) in items"
        :key="idx"
        v-show="idx === currentIdx"
        class="menu-group">
        <ProfileSummary
          v-if="component.type === 'ProfileSummary'"
          :typesetting="typesetting"/>
        <Conversion
          v-if="component.type === 'Conversion'"
          :typesetting="typesetting"/>
      </div>
    </transition-group>
  </div>
</template>
<script>
import ProfileSummary from '@/components/profile/ProfileSummary';
import Conversion from '@/components/profile/Conversion';


export default {
  name: 'ProfileMenu',
  components: {
    ProfileSummary,
    Conversion,
  },
  props: {
    typesetting: {
      type: Number,
      required: false,
      default: 0,
    },
    items: {
      type: Array,
      default: () => [],
      required: false,
    }
  },
  data() {
    return {
      currentIdx: 0
    };
  },
};
</script>
<style lang="sass" scoped>
$top-margin: 40px
$bottom-margin: 55px
$nav-width: 60px

.profileMenu
  min-height: 100vh
  height: 100%
  padding-top: $top-margin
  padding-bottom: $bottom-margin
  display: flex
  .nav
    position: relative
    width: $nav-width
    min-height: calc(100vh - #{$top-margin} - #{$bottom-margin})
    // height: 100%
    .nav-item
      font-size: $size-7
      text-align: center
      height: 66px
      
      display: flex
      flex-direction: column
      align-items: center
      justify-content: center
      border-right: 3px solid transparent
      img
        width: 28px
        padding: 5px 0
        height: auto
      div
        vertical-align: middle
      &.active
        border-right: 3px solid $white-bis
  .menu-area
    flex: 1
    .menu-group
      width: calc(100vw - #{$nav-width})
      padding: 10px
  &.style0
    background: $grey-dark
    color: $white-bis
    .nav
      background: $grey-darker
      .nav-item
        color: $grey-lighter
        img
        &.active
          background: $grey-dark
          border-right: 3px solid $secondary-accent-1
  &.style1
  &.style2
  &.style3
  &.style4
  &.style5

/* In-Page Transition */
.menu-enter-active, .menu-leave-active
  transition: .5s ease-out
  position: absolute
.menu-enter-active
  transition-delay: .5s
.menu-enter, .menu-leave-to
  opacity: 0
.menu-enter-to, .menu-leave
  opacity: 1

@media screen and (max-width: $mobile-width)
  .profileMenu

@media screen and (min-width: $mobile-width) and (max-width: $desktop-width)
  .profileMenu
</style>

