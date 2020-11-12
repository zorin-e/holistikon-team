<template>
  <div :class="$style.wrapper">
    <div :class="$style.background"></div>
    <slider
      :photos="photos"
      class="pt-80"
    />
  </div>
</template>

<script>
import Slider from "./Slider"

export default {
  name: "WeAreDifferent",
  components: {
    Slider
  },
  data() {
    return {
      photos: [
        {
          id: 1,
          path: require('@/assets/facts/Group 5.png'),
          text: "Holistkönnerinnen und -könner sind keine gleichgeschalteten Roboter mit einer Musterlösung für jedes Problem. Es gibt keine Workshops in denen man lernt, wie bei Holisticon gearbeitet wird. Jede und jeder ist individuell und das ist auch gut so. Trotzdem verfolgen wir die gleichen Ziele: hochwertige Software, erfolgreiche Projekte, konstruktives Streiten, kreatives Chaos und Selbstorganisation."
        },
        {
          id: 2,
          path: require('@/assets/facts/Group 5.png'),
          text: "Roboter holistkönnerinnen und -könner sind keine gleichgeschalteten Roboter mit einer Musterlösung für jedes Problem. Es gibt keine Workshops in denen man lernt, wie bei Holisticon gearbeitet wird. Jede und jeder ist individuell und das ist auch gut so. Trotzdem verfolgen wir die gleichen Ziele: hochwertige Software, erfolgreiche Projekte, konstruktives Streiten, kreatives Chaos und Selbstorganisation."
        },
      ]
    }
  }
}
</script>

<style lang="scss" module>
$height: 888px;

.wrapper {
  height: 888px;
  position: relative;

  @include media-breakpoint-down(md) {
    height: $height / 2;
  }
}

.background {
  background: $lightGray;
  width: 130%;
  height: 888px;
  position: absolute;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  left: -16%;
}
</style>
