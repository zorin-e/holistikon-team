<template>
  <button type="button" :class="$style.button">
    <span ref="circle" :class="$style.circle">
      <arrow-right :class="$style.arrow" />
    </span>
    Komm`ins team
    <div ref="bubble" :class="$style.bubble"></div>
  </button>
</template>

<script>
import { TimelineLite, Expo } from "gsap"
import ArrowRight from "./assets/arrow-right.svg"

export default {
  name: "SliderButton",
  components: {
    ArrowRight
  },
  data() {
    return {
      timeline: null,
      circle: null,
      bubble: null
    }
  },
  mounted () {
    const { circle, bubble } = this.$refs
    this.circle = circle
    this.bubble = bubble

    this.timeline = new TimelineLite({
      onComplete: () => this.timeline.restart()
    })

    this.timeline.to(
      this.bubble,
      .4,
      {
        scale: 0.9,
        opacity: 1
      },

    );
    this.timeline.to(
      this.bubble,
      1.4,
      {
        scale: 1.3,
        opacity: 0,
        ease: Expo.easeOut
      }
    );
  }
}
</script>

<style lang="scss" module>
.bubble {
  background: #8b8b8b;
  opacity: 0;
  transform: scale(0);
  @include size(85%, 100%);
  border-radius: 37px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
}

.button {
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  background: $skyBlue;
  max-width: 380px;
  @include size(100%, 75px);
  border: 0;
  border-radius: 37px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  transition: .3s background ease-in;

  @include media-breakpoint-down(xs) {
    height: 65px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background: darken($skyBlue, 10%);
    .circle {
      width: 100%;
      background: $skyBlue;
    }
  }
}

.circle {
  transition: .3s width ease-out, .5s background ease-out;
  @include size(75px, 100%);
  position: absolute;
  border-radius: 41px;
  background: lighten($skyBlue, 10%);
  top: 0;
  left: 0;
  @include flex(center, center);
  @include media-breakpoint-down(xs) {
    width: 65px;
  }
}

.arrow {
  fill: #fff;
  @include size(45px);
}
</style>
