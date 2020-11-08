<template>
  <div :class="$style['select-item']" @click="$emit('click')">
    {{ title }}
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" module>
.select-item {
  padding: 0 9px;
  line-height: 48px;
  cursor: pointer;
}
</style>
