<template>
  <div :class="$style.line"></div>
</template>

<script>
export default {
  name: "TitleLine"
}
</script>

<style lang="scss" module>
.line {
  background: $pink;
  @include size(45px, 8px);
}
</style>

