<template>
  <label :class="[$style.wrapper, wide && $style.wide]">
      <input
        :type="type"
        v-bind="$attrs"
        v-on="inputListeners"
        :value="value"
        :disabled="disabled"
        :class="inputClasses"
      />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BaseInput",
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    disabled: Boolean,
    label: {
      type: String,
      default: ""
    },
    wide: Boolean,
    isError: Boolean
  },
  computed: {
    inputListeners() {
      return {
        ...this.$listeners,
        ...{
          input: event => {
            this.$emit("input", event.target.value);
          }
        }
      };
    },
    inputClasses() {
      return [
        this.$style.input,
        this.disabled && this.$style.disabled,
        this.wide && this.$style.wide,
        this.value && this.$style.filled,
        this.isError && this.$style.error
      ];
    }
  }
};
</script>

<style lang="scss" module>
.wrapper {
  position: relative;
  display: block;
  height: 50px;
}

.input {
  border: 0;
  border-bottom: solid 2px $lightGray;
  outline: none;
  @include size(100%);
  transition: .2s border ease-in;

  &:focus {
    border-color: $skyBlue;
  }

  &:disabled {
    border: solid 1px $lightGray;
    opacity: .7;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
}

.input-wrapper {
  position: relative;
}

.wide {
  width: 100%;
}

.error {
  border-color: red;
}
</style>
