<template>
  <div :class="center && $style.center">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  props: {
    center: Boolean
  }
}
</script>

<style lang="scss" module>
.center {
  @include flex(center)
}
</style>
