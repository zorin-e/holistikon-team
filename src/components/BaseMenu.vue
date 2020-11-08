<template>
  <ul :class="$style.menu">
    <li
      v-for="(item, index) in items"
      :key="index"
      :class="$style.item"
    >
      <a
        :class="[$style.link, item.active && $style.active]"
        href="/"
      >{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BaseMenu",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.menu {
  height: 100%;
  @include flex(space-between);
}

.item {
  text-transform: uppercase;
  font-size: $fieldFontSizeXs;
  font-weight: bold;
}

.link {
  padding: 0 20px;
  color: #fff;
  display: block;
  height: 100%;
  @include flex(null, flex-end);
  padding-bottom: 15px;

  &:hover {
    transition: .2s color ease-in, .2s border linear;
    text-decoration: none;

    &:not(.active) {
      color: $pink;
      border-bottom: solid 5px $lightGray;
    }
  }
}

.active {
  cursor: default;
  border-top: solid 5px $pink;
}
</style>
