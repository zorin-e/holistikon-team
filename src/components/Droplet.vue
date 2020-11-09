<template>
  <div
    :class="[
      $style.droplet,
      italic && $style.italic,
      $style['droplet-' + size]
    ]"
    :style="{
      fontSize: fontSize
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Droplet",
  props: {
    italic: Boolean,
    fontSize: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "lg",
      validator: value => ['lg', 'md', 'sm'].includes(value)
    }
  }
}
</script>

<style lang="scss" module>
@mixin md {
  @include size(152px);
  font-size: 31px;

  &::before {
    border-top-width: 58px;
    border-bottom-width: 58px;
    border-left-width: 58px;
    right: -8px;
    transform: rotate(-45deg);
    top: -37px;
  }
}
@mixin sm {
  @include size(92px);
  font-size: 21px;

  &::before {
    border-top-width: 35px;
    border-bottom-width: 35px;
    border-left-width: 35px;
    right: -6px;
    transform: rotate(-43deg);
    top: -21px;
  }
}

.droplet {
  border-radius: 100%;
  background: $pink;
  position: relative;
  font-size: 41px;
  color: #fff;
  @include flex(center, center);
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-top: 80px solid transparent;
    border-bottom: 80px solid transparent;
    border-left: 80px solid $pink;
    right: -13px;
    transform: rotate(-44deg);
    top: -50px;
  }

  &-lg {
    @include size(220px);
  }
  &-sm {
    @include sm;
  }
  &-md {
    @include md;
  }

  @include media-breakpoint-down(md) {
    @include md;
  }
  @include media-breakpoint-down(sm) {
    @include sm;
  }
}

.italic {
  font-style: italic;
}
</style>
