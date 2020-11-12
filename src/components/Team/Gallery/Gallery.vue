<template>
  <div :class="$style.wrapper">
    <div :class="$style.block" :style="{backgroundImage: `url(${photos[0]})`}">
      <div :class="$style.content">
        <quotes :class="$style.quotes" />
        <div :class="$style.text">
          <h3 :class="$style.title">Kai Lichtenfels</h3>
          <paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a
          </paragraph>
        </div>
      </div>
    </div>
    <div :class="[$style.wrapper, $style.wide, $style.wrapperColumn, $style.indentLeft]">
      <div :class="[$style.block]" :style="{backgroundImage: `url(${photos[1]})`}">
        <div :class="$style.content">
          <quotes :class="$style.quotes" />
          <div :class="$style.text">
            <h3 :class="$style.title">Lichtenfels</h3>
            <paragraph>
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a
            </paragraph>
          </div>
        </div>
      </div>
      <div :class="[$style.block, $style.indentTop]" :style="{backgroundImage: `url(${photos[2]})`}">
        <div :class="$style.content">
          <quotes :class="$style.quotes" />
          <div :class="$style.text">
            <h3 :class="$style.title">Kai Lichtenfels</h3>
            <paragraph>
              Aenean commodo ligula eget dolor. Aenean massa. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            </paragraph>
          </div>
        </div>
      </div>
    </div>
    <div :class="[$style.block, $style.full, $style.indentLeft]" :style="{backgroundImage: `url(${photos[3]})`}">
      <div :class="$style.content">
        <quotes :class="$style.quotes" />
        <div :class="$style.text">
          <h3 :class="$style.title">Lichtenfels</h3>
          <paragraph>
            Aenean commodo ligula eget dolor. Aenean massa. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a
          </paragraph>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quotes from "@/assets/quotes.svg"
import Paragraph from "@/components/Paragraph"

export default {
  name: "Gallery",
  components: {
    Quotes,
    Paragraph
  },
  data() {
    return {
      photos: [
        require('@/assets/bike.png'),
        require('@/assets/man-with-paper.png'),
        require('@/assets/man.png'),
        require('@/assets/woman.png')
      ]
    }
  }
}
</script>

<style lang="scss" module>
.indent {
  &Top {
    margin-top: 2px;
  }
  &Left {
    margin-left: 2px;
  }
}
.wide {
  width: 100%;
}
.wrapper {
  @include flex;
  height: 641px;

  &Column {
    flex-direction: column;
  }
}
.block {
  position: relative;
  overflow: hidden;
  @include size(100%);
  background: #cdcdcd;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    &::before {
      opacity: .95;
      transform: scale(1)
    }

    .content {
      opacity: 1;
    }
  }

  &::before {
    transition: .2s transform linear, .4s opacity ease-out;
    content: "";
    position: absolute;
    @include size(100%);
    background: $pink;
    opacity: 0;
    top: 0;
    left: 0;
    transform: scale(0)
  }
}

.content {
  transition: .6s opacity ease-in;
  position: relative;
  opacity: 0;
  @include flex(center, center);
  height: 100%;
}

.quotes {
  position: absolute;
  right: 10px;
  top: 0;
}

.text {
  max-width: 318px;
  color: #fff;

  p {
    color: #fff;
  }
}

.title {
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: bold;
}
</style>
