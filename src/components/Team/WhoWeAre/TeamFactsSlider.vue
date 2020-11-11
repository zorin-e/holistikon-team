<template>
  <div>
    <div :class="$style.wrapper">
      <button :class="[$style.button, $style.buttonLeft]" @click="prev">
        <arrow-left />
      </button>
      <div v-swiper:teamSlider="swiperOption">
        <div class="swiper-wrapper">
          <div
            :class="$style.fact"
            class="swiper-slide"
            :key="fact.id"
            v-for="fact in facts"
          >
            <droplet part-responsive v-html="fact.fact" />
            <paragraph center uppercase bold class="mt-15 mb-15">{{ fact.title }}</paragraph>
            <paragraph center v-if="fact.text" class="mb-15">{{ fact.text }}</paragraph>
          </div>
        </div>
      </div>
      <button :class="[$style.button, $style.buttonRight]" @click="next">
        <arrow-right />
      </button>
    </div>
    <div :class="$style.pagination">
      <div
        :class="[$style.bullet, activeBulletIndex === index && $style.bulletActive]"
        :key="fact.id"
        v-for="(fact, index) in facts"
      ></div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import ArrowLeft from "@/assets/icons/arrow-left.svg"
import ArrowRight from "@/assets/icons/arrow-right.svg"
import Droplet from "@/components/Droplet"
import Paragraph from "@/components/Paragraph"

export default {
  name: "TeamFactsSlider",
  components: {
    ArrowLeft,
    ArrowRight,
    Droplet,
    Paragraph
  },
  props: {
    facts: {
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
    }
  },
  directives: {
    swiper: directive
  },
  mounted() {
    this.teamSlider.on('slideChange', swiper => {
      this.activeBulletIndex = swiper.activeIndex
    })
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
  width: 222px;

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
</style>
