<template>
  <div :class="[$style.block, !noIndents && $style.indents]">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    noIndents: Boolean
  }
}
</script>

<style module>
.block {
  position: relative;
  background: #fff;
}

.indents {
  padding: 100px 0;
}
</style>
