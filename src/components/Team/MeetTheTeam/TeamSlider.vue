<template>
  <div>
    <div :class="$style.wrapper">
      <button :class="[$style.button, $style.buttonLeft]" @click="prev">
        <arrow-left />
      </button>
      <div v-swiper:teamSlider="swiperOption">
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
          </div>
        </div>
      </div>
      <button :class="[$style.button, $style.buttonRight]" @click="next">
        <arrow-right />
      </button>
    </div>
    <divider />
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
        lazy: true
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
      this.teamSlider.params.slidesPerView = this.slidesPerView
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
  bottom: 20px;
}
</style>
