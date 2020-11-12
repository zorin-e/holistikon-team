<template>
  <div :class="$style.block">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Block"
}
</script>

<style module>
.block {
  position: relative;
  background: #fff;
  padding: 100px 0;
}
</style>
