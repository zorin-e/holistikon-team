<template>
  <h2
    :class="[$style.h2, center && $style.center]"
  >
    <span :class="$style.wrapper">
      <slot />
      <title-line :class="$style.line" />
    </span>
  </h2>
</template>

<script>
import TitleLine from "@/components/TitleLine"

export default {
  name: "BaseTitle",
  components: {
    TitleLine
  },
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

.wrapper {
  position: relative;
}

.line {
  position: absolute;
  left: 0;
  bottom: -15px;
}
</style>
