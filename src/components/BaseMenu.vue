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

  @include media-breakpoint-down(sm) {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 10000;
    top: 60px;
  }
}

.item {
  text-transform: uppercase;
  font-size: $fieldFontSizeXs;
  font-weight: bold;

  @include media-breakpoint-down(sm) {
    font-size: 20px;
  }
}

.link {
  padding: 0 30px;
  color: #fff;
  display: block;
  height: 100%;
  @include flex(null, flex-end);
  padding-bottom: 15px;

  @include media-breakpoint-down(md) {
    padding: 0 24px;
  }

  &:hover {
    transition: .2s color ease-in, .2s border linear;
    text-decoration: none;

    @include media-breakpoint-up(md) {
      &:not(.active) {
        color: $pink;
        border-bottom: solid 5px $lightGray;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    padding: 30px;
    text-align: center;
    display: block;
  }
}

.active {
  cursor: default;
  border-top: solid 8px $pink;
}
</style>
