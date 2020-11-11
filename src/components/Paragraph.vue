<template>
  <p
    :class="[
      $style.p,
      center && $style.center,
      uppercase && $style.uppercase,
      bold && $style.bold
    ]"
  ><slot /></p>
</template>

<script>
export default {
  name: "Paragraph",
  props: {
    center: Boolean,
    uppercase: Boolean,
    bold: Boolean
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

.uppercase {
  text-transform: uppercase;
}

.bold {
  font-weight: bold;
}
</style>
