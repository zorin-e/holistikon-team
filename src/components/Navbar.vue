<template>
  <nav :class="$style.navbar">
    <div :class="[$style.wrapper, isOpened && $style.wrapperOpened]">
      <base-menu
        :items="menu"
        :class="[$style.menu, isOpened && $style.show]"
      />
      <base-select
        class="ml-30"
        v-model="currentLanguage"
        :items="languages"
        is-circle
        :class="$style.lang"
      />
      <div
        :class="[$style.menuIcon, isOpened && $style.menuIconOpened]"
        @click="isOpened = !isOpened"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </nav>
</template>

<script>
import BaseSelect from "@/components/BaseSelect"
import BaseMenu from "@/components/BaseMenu"

export default {
  name: "Navbar",
  components: {
    BaseSelect,
    BaseMenu
  },
  data() {
    return {
      isOpened: false,
      menu: [
        { title: 'Home', active: false },
        { title: 'Kompetenzen', active: false },
        { title: 'Team', active: true },
        { title: 'Events', active: false},
        { title: 'Karriere', active: false },
        { title: 'Blog', active: false}
      ],
      languages: [
        {
          title: "en",
          value: "en"
        },
        {
          title: "ru",
          value: "ru"
        }
      ],
      currentLanguage: 'en'
    }
  }
}
</script>

<style lang="scss" module>
.navbar {
  height: 60px;
  @include flex(space-between, flex-end);

  @include media-breakpoint-down(sm) {
    display: block;
  }
}

.wrapper {
  @include flex(null, flex-end);
  height: 100%;

  @include media-breakpoint-down(sm) {
    width: 100%;
    position: absolute;
    display: block;
    left: 0;
    z-index: 10;
    transition: .4s background linear;
  }

  &Opened {
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
  }
}

.menuIcon {
  display: none;
  padding: 10px;
  cursor: pointer;
  transform: translateY(-14px);
  position: absolute;
  right: 20px;
  top: 30px;
  z-index: 1000;

  &Opened {
    div {
      &:first-child {
        transform: translateY(3px) rotate(-30deg);
        width: 12px;
      }
      &:last-child {
        transform: translateY(-3px) rotate(30deg);
        width: 12px;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    display: block;
  }

  div {
    transition: .2s transform linear;
    @include size(23px, 2px);
    margin-top: 4px;
    border-radius: 4px;
    background: #fff;
  }
}

.menu {
  @include media-breakpoint-down(sm) {
    display: block;
    left: -100%;
    position: absolute;
    transition: .4s left ease-out;
  }
}

.lang {
  @include media-breakpoint-down(sm) {
    position: absolute;
    right: 80px;
    top: 15px;
  }
}

.show {
  left: 0;
}
</style>
