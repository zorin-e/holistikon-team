<template>
  <ul :class="$style.items">
    <li
      v-for="item in items"
      :key="item.id"
      :class="[$style.item, item.active && $style.itemActive]"
      @click="toggleActive(item)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "TeamMenu",
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    toggleActive(item) {
      if(item.active) return
      this.$emit('toggle-active', item.id)
    }
  }
}
</script>

<style lang="scss" module>
.items {
  @include flex(center);
  flex-wrap: wrap;
  font-weight: bold;
}
.item {
  color: $skyBlue;
  text-transform: uppercase;
  margin-bottom: 15px;
  padding: 13px 20px;
  cursor: pointer;

  &Active {
    color: #fff;
    background: $pink;
    border-radius: 4px;
  }
}
</style>
