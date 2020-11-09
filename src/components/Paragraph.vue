<template>
  <p :class="[$style.p, center && $style.center]"><slot /></p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    center: Boolean
  }
}
</script>

<style lang="scss" module>
.p {
  font-size: $fieldFontSizeSm;
  line-height: 1.8;
}

.center {
  text-align: center;
}
</style>
