<template>
  <button
    :type="type"
    :class="buttonClass"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot>
      {{ title }}
    </slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "button"
    },
    title: {
      type: String,
      default: "Button"
    },
    color: {
      type: String,
      default: "default",
      validator: function(value) {
        return ["default", "warning"].includes(value);
      }
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    buttonClass() {
      return [
        this.$style.button,
        this.disabled &&
          (this.fill
            ? this.$style.color_disabled_fill
            : this.$style.color_disabled)
      ];
    }
  }
};
</script>

<style lang="scss" module>
.button {
  height: 49px;
  min-width: 200px;
  text-align: center;
  color: $skyBlue;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  border-radius: 22px;
  border: 2px solid $skyBlue;
  background: transparent;
  background-image: -webkit-linear-gradient(30deg, transparent 50%, $skyBlue 50%);
  background-image: linear-gradient(30deg, transparent 50%, $skyBlue 50%);
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 0%;
  transition: background 300ms ease-in-out, color .4s ease-in;

  &:hover {
    background-position: 100%;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
}
</style>
