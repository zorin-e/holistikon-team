<template>
  <container>
    <div :class="$style.wrapper">
      <button :class="[$style.button, $style.buttonLeft]" @click="prev">
        <arrow-left />
      </button>
      <div v-swiper:teamSlider="swiperOption">
        <div class="swiper-wrapper">
          <div
            :class="$style.fact"
            class="swiper-slide"
            :key="photo.id"
            v-for="photo in photos"
          >
            <div :class="$style.photo">
              <img :class="$style.img" :src="photo.path">
            </div>
          </div>
        </div>
      </div>
      <button :class="[$style.button, $style.buttonRight]" @click="next">
        <arrow-right />
      </button>
    </div>
    <div :class="$style.text">
      <paragraph
        center
        class="mt-15"
        v-for="(photo, index) in photos"
        v-show="activeBulletIndex === index"
        :key="photo.id"
      >{{ photo.text }}</paragraph>
    </div>
  </container>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import ArrowLeft from "@/assets/icons/arrow-left.svg"
import ArrowRight from "@/assets/icons/arrow-right.svg"
import Paragraph from "@/components/Paragraph"
import Container from "@/components/Container"

export default {
  name: "Slider",
  components: {
    ArrowLeft,
    ArrowRight,
    Paragraph,
    Container
  },
  props: {
    photos: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      activeBulletIndex: 0,
      swiperOption: {
        slidesPerView: 1,
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
    slideChangeHandler: function(swiper) {
      this.activeBulletIndex = swiper.activeIndex
    }
  },
  directives: {
    swiper: directive
  },
  mounted () {
    this.teamSlider.on('slideChange', this.slideChangeHandler)
  },
  beforeDestroy() {
    this.teamSlider.off('slideChange', this.slideChangeHandler)
  }
}
</script>

<style lang="scss" module>
.photo {
  overflow: hidden;
  border-radius: 50%;
}

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
  width: 551px;
  margin: 0 auto;

  @include media-breakpoint-down(md) {
    width: 160px;
  }
}

.img {
  max-width: 100%;
}

.fact {
  position: relative;
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

.pagination {
  @include flex(center);
}

.bullet {
  background: $lightGray;
  @include size(39px, 2px);
  margin: 0 10px;

  &Active {
    background: $pink;
  }
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  @include size(100%);
}

.text {
  position: relative;
  margin-top: 30px;
}
</style>
