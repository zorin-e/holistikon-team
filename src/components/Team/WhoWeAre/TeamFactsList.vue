<template>
  <div :class="$style.facts" class="mb-100">
    <team-facts-slider :facts="factsList" />
  </div>
</template>

<script>
import TeamFactsSlider from "./TeamFactsSlider"
export default {
  name: "TeamFactsList",
  components: {
    TeamFactsSlider
  },
  data() {
    return {
      facts: {
        3: {
          id: 3,
          fact: "und du?",
          title: "of us prefer coffee )",
          text: "But there are many other preferences - Matcha tea is on the second place!"
        },
        4: {
          id: 4,
          fact: "<div style='font-weight: bold; font-size: 39px;'>56%</div>",
          title: "What is your passion?"
        }
      }
    }
  },
  computed: {
    factsList () {
      return Object.values(this.facts)
    }
  }
}
</script>

<style lang="scss" module>
.facts {
  @include flex(center);
}
</style>
