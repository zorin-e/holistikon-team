<template>
  <nav :class="$style.navbar">
    <div :class="$style.wrapper">
      <base-menu
        :items="menu"
      />
      <base-select
        class="ml-30"
        v-model="currentLanguage"
        :items="languages"
        is-circle
      />
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
}

.wrapper {
  @include flex(null, flex-end);
  height: 100%;
}
</style>
