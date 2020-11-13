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
    <div ref="photos" :class="$style.bg">
      <img
        :class="$style.photo"
        :src="photo.paths[photosPathIndex]"
        v-for="photo in photos"
        :key="photo.id"
        :style="photo.coords"
      >
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
import { TimelineLite, TweenLite, Back, Sine, Elastic } from 'gsap'

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

function rotate(target, direction) {

  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {

  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}


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
    },
    photos: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      photosWrapper: null,
      timeline: null,
      photosPathIndex: 0,
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
      this.timeline.clear()
      this.activeBulletIndex = swiper.activeIndex
      this.timeline.to(this.photosWrapper, 0.4, {
        scale: 0.9,
        rotation: 12,
        ease: Back.easeOut.config(1.7)
      });
      this.photosPathIndex = swiper.activeIndex
      this.timeline.to(this.photosWrapper, 1.2, {
        scale: 1,
        rotation: "-=12",
        ease: Elastic.easeOut.config(2.5, 0.5)
      });
    }
  },
  directives: {
    swiper: directive
  },
  mounted() {
    this.photosWrapper = this.$refs.photos
    this.timeline = new TimelineLite()

    TweenLite.set(this.photosWrapper.children, {
      x: randomX(-1),
      y: randomX(1),
      rotation: randomAngle(-1)
    });

    const randomImgMove = random(-2, 2)

    this.photosWrapper.children.forEach(item  => {
      moveX(item, randomImgMove());
      moveY(item, randomImgMove());
      rotate(item, randomImgMove());
    })

    this.teamSlider.on('slideChange', this.slideChangeHandler)
  },
  beforeDestroy() {
    this.teamSlider.off('slideChange', this.slideChangeHandler)
  }
}
</script>

<style lang="scss" module>
.photo {
  position: absolute;
  max-width: 15%;

  @include media-breakpoint-down(sm) {
    max-width: 30%;

    &:nth-child(5),
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(4),
    &:nth-child(8) {
      display: none;
    }
  }
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
  width: 222px;
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
</style>
