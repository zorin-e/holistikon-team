<template>
  <h2
    :class="[$style.h2, center && $style.center]"
  >
    <slot />
  </h2>
</template>

<script>
export default {
  name: "BaseTitle",
  props: {
    center: Boolean
  }
}
</script>

<style lang="scss" module>
.h2 {
  text-transform: uppercase;
  font-weight: bold;
  @include title;
}

.center {
  text-align: center;
}
</style>
