<template>
  <div>
    <div :class="$style.wrapper">
      <button :class="[$style.button, $style.buttonLeft]" @click="prev">
        <arrow-left />
      </button>
      <div :class="$style.slider" v-swiper:teamSlider="swiperOption">
        <div class="swiper-wrapper">
          <div
            :class="$style.member"
            class="swiper-slide"
            :key="member.id"
            v-for="member in team"
            @click="showMember(member.id)"
          >
            <img :class="$style.img" :src="member.img">
            <div :class="$style.name">{{ member.name }}</div>
            <divider />
            <div :class="$style.textOnMobile" v-html="member.text"></div>
          </div>
        </div>
      </div>
      <button :class="[$style.button, $style.buttonRight]" @click="next">
        <arrow-right />
      </button>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import ArrowLeft from "@/assets/icons/arrow-left.svg"
import ArrowRight from "@/assets/icons/arrow-right.svg"
import Divider from "./Divider"

const slidesPerView = 3

export default {
  name: "TeamSlider",
  components: {
    ArrowLeft,
    ArrowRight,
    Divider
  },
  props: {
    team: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView,
        lazy: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView
          },
        }
      }
    }
  },
  methods: {
    next() {
      this.teamSlider.slideNext()
    },
    prev() {
      this.teamSlider.slidePrev()
    },
    showMember(id) {
      this.$emit('show-member', id)
    }
  },
  directives: {
    swiper: directive
  },
  computed: {
    slidesPerView () {
      const teamLength = this.team.length
      return slidesPerView < teamLength ? slidesPerView : teamLength
    },

  },
  watch: {
    team() {
      if (this.teamSlider.currentBreakpoint >= 480) this.teamSlider.params.slidesPerView = this.slidesPerView
      this.teamSlider.slideTo(0, 100)
    }
  }
}
</script>

<style lang="scss" module>
.button {
  @include size(36px);
  border: 0;
  background: transparent;
  position: absolute;
  z-index: 3;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  @include media-breakpoint-down(sm) {
    display: none;
  }

  &:focus, &:hover {
    outline: none;

    svg {
      fill: $gray;
    }
  }

  svg {
    transition: .2s fill linear;
    fill: $sliderButton;
  }

  &Left {
    left: -50px;
  }
  &Right {
    right: -50px;
  }
}

.slider {
  max-width: 80%;
}

.wrapper {
  @include flex;
  position: relative;
}

.img {
  max-width: 100%;
}

.member {
  position: relative;
  cursor: pointer;
}

.name {
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 30px;

  @include media-breakpoint-down(sm) {
    position: relative;
  }
}

.textOnMobile {
  line-height: 1.6;
  text-align: center;

  @include media-breakpoint-up(sm) {
    display: none;
  }
}
</style>
