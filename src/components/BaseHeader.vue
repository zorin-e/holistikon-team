<template functional>
  <header :class="$style.header">
    <slot />
  </header>
</template>

<style lang="scss" module>
.header {
  height: 472px;
  position: relative;
  @include img-retina('~@/assets/top-bg.png', '~@/assets/top-bg@2x.png', 1440px, 472px);
  background-position: center -1px;
  background-repeat: no-repeat;

  @include media-breakpoint-down(sm) {
    height: 340px;
    background-size: cover;
  }
}
</style>

<script>
export default {
  name: "BaseHeader"
}
</script>
