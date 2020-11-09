<template>
  <h1
    :class="[$style.h1, center && $style.center]"
  >
    <span :class="$style.wrapper">
      <slot />
      <title-line :class="$style.line" />
    </span>
  </h1>
</template>

<script>
import TitleLine from "@/components/TitleLine"

export default {
  name: "BaseTopTitle",
  components: {
    TitleLine
  },
  props: {
    center: Boolean
  }
}
</script>

<style lang="scss" module>
.h1 {
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.2;
  font-size: 28px;

  @include media-breakpoint-up(sm) {
    font-size: 38px;
  }
  @include media-breakpoint-up(md) {
    font-size: 56px;
  }
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
