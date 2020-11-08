<template>
  <nav :class="$style.menu">
    <logo />
    <ul :class="$style.items">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="$style.item"
      >
        <a :class="$style.link" href="/">{{ item }}</a>
      </li>
    </ul>
    <base-select
      class="ml-30"
      v-model="currentLanguage"
      :items="languages"
      size="lg"
      is-circle
    />
  </nav>
</template>

<script>
import Logo from "@/assets/logo.svg"
import BaseSelect from "@/components/BaseSelect"

export default {
  name: "BaseMenu",
  components: {
    Logo,
    BaseSelect
  },
  data() {
    return {
      items: [
        'Home',
        'Kompetenzen',
        'Team',
        'Events',
        'Karriere',
        'Blog'
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
.menu {
  height: 60px;
  @include flex(space-between);
}

.items {
  @include flex;
}

.item {
  text-transform: uppercase;
  font-size: $fieldFontSizeXs;
  font-weight: bold;
  padding: 0 20px;
}

.link {
  color: #fff;
  display: block;
  height: 100%;
  @include flex(null, flex-end);
  padding-bottom: 15px;
}
</style>
