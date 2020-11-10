<template>
  <div :class="$style.member">
    <button
      :class="$style.close"
      type="button"
      @click="$emit('close')"
    >
      <close :class="$style.closeSvg" />
    </button>
    <div :class="$style.imgWrapper">
      <img :class="$style.img" :src="member.img" />
    </div>
    <div :class="$style.content">
      <div>
        <h3 :class="$style.name">{{ member.name }}</h3>
        <div :class="$style.text" class="mt-50" v-html="member.text">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Close from "@/assets/icons/close.svg"

export default {
  name: "TeamMember",
  components: {
    Close
  },
  props: {
    member: {
      type: Object,
      required: true,
      validator: value => Object.keys(value).length > 0
    }
  }
}
</script>

<style lang="scss" module>
.member {
  @include flex;
  border-bottom: solid 1px $lightGray;

  @include media-breakpoint-down(xs) {
    flex-wrap: wrap;
  }
}
.close {
  position: absolute;
  left: 0;
  top: 0;
  background: transparent;
  border: 0;

  &:focus {
    outline: none;
  }

  &Svg {
    cursor: pointer;
    fill: $skyBlue;
    @include size(32px);
    transition: .2s fill linear, .1s transform ease-in;

    &:hover {
      fill: darken($skyBlue, 20);
      transform: rotate(90deg)
    }
  }
}

.content {
  @include flex(null, center);
  max-width: 445px;
  margin-left: 5%;

  @include media-breakpoint-down(xs) {
    margin-left: 0;
  }
}

.img {
  max-width: 100%;

  @include media-breakpoint-down(md) {
    max-width: 200px;
  }

  &Wrapper {
    @include flex(null, flex-end);
    max-width: 555px;
  }
}

.name {
  font-size: 32px;
  font-weight: 500;
}

.text {
  line-height: 1.6;
}
</style>
