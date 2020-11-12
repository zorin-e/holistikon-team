<template>
  <div :class="$style.facts">
    <team-facts-slider
      :facts="factsList"
      :photos="photos"
    />
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
        1: {
          id: 1,
          fact: "und du?",
          title: "of us prefer coffee )",
          text: "But there are many other preferences - Matcha tea is on the second place!"
        },
        2: {
          id: 2,
          fact: "<div style='font-weight: bold; font-size: 39px;'>56%</div>",
          title: "What is your passion?"
        },
        3: {
          id: 3,
          fact: "<div style='font-weight: bold; font-size: 39px;'>90%</div>",
          title: "of us are cat lovers :)",
          text: "It’s 54% of our team! But we have even iguanas as pets."
        },
      },
      photos: [
        {
          id: 1,
          paths: [
            require('@/assets/facts/Bitmap.png'),
            require('@/assets/facts/Bitmap 2.png'),
            require('@/assets/facts/Bitmap 8.png')
          ],
          coords: {
            top: '-34%',
            right: '0%'
          }
        },
        {
          id: 3,
          paths: [
            require('@/assets/facts/Bitmap 3.png'),
            require('@/assets/facts/Bitmap.png'),
            require('@/assets/facts/Bitmap 4.png')
          ],
          coords: {
            bottom: '-47%',
            left: '23%'
          }
        },
        {
          id: 4,
          paths: [
            require('@/assets/facts/Bitmap 4.png'),
            require('@/assets/facts/Bitmap 3.png'),
            require('@/assets/facts/Bitmap 7.png')
          ],
          coords: {
            top: '-34%',
            left: '23%'
          }
        },
        {
          id: 5,
          paths: [
            require('@/assets/facts/Bitmap 5.png'),
            require('@/assets/facts/Bitmap 6.png'),
            require('@/assets/facts/Bitmap.png')
          ],
          coords: {
            top: '30%',
            left: '12%'
          }
        },
        {
          id: 6,
          paths: [
            require('@/assets/facts/Bitmap 6.png'),
            require('@/assets/facts/Bitmap 7.png'),
            require('@/assets/facts/Bitmap 10.png'),
          ],
          coords: {
            top: '-34%',
            right: '23%'
          }
        },
        {
          id: 7,
          paths: [
            require('@/assets/facts/Bitmap 7.png'),
            require('@/assets/facts/Bitmap 8.png'),
            require('@/assets/facts/Bitmap 2.png')
          ],
          coords: {
            top: '30%',
            right: '12%'
          }
        },
        {
          id: 8,
          paths: [
            require('@/assets/facts/Bitmap 8.png'),
            require('@/assets/facts/Bitmap 9.png'),
            require('@/assets/facts/Bitmap 6.png')
          ],
          coords: {
            bottom: '-47%',
            right: '23%'
          }
        },
        {
          id: 9,
          paths: [
            require('@/assets/facts/Bitmap 9.png'),
            require('@/assets/facts/Bitmap 10.png'),
            require('@/assets/facts/Bitmap 5.png')
          ],
          coords: {
            bottom: '-47%',
            left: '0%'
          }
        },
        {
          id: 10,
          paths: [
            require('@/assets/facts/Bitmap 10.png'),
            require('@/assets/facts/Bitmap 9.png'),
            require('@/assets/facts/Bitmap 4.png')
          ],
          coords: {
            top: '-34%',
            left: '0%'
          }
        }
      ]
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
  position: relative;
  margin-bottom: 300px;
}
</style>
