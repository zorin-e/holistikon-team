<template>
  <div
    :class="[
      $style.select, disabled ? 'disabled' : '',
      isCircle && $style.circle
    ]"
  >
    <div
      :class="[
        isCircle && $style['circle-output'],
        $style.output,
        isOpen && $style.output_open,
        isError && $style.error
      ]"
      @click="isOpen = !isOpen"
    >
      <div :class="[
        !isCircle ? $style['output-text'] : $style['circle-output-text']
      ]">
        <div
          v-if="title"
          :class="[
            $style['output-text-title'],
            displayValue && $style['output-text-title_value']
          ]"
        >
          {{ title }}
        </div>
        <div
          :class="[
            !isCircle ? $style['output-text-value'] : $style['circle-output-text-value']
          ]"
          v-if="displayValue || $slots.input"
        >
          <slot name="input">
            {{ displayValue }}
          </slot>
        </div>
      </div>
      <div :class="$style['output-controls']">
        <div
          :class="[
            $style['output-controls-item'],
            isOpen && $style['output-controls-item_open']
          ]"
        >
          <slot v-if="!isCircle" name="arrow">
            <arrow-down />
          </slot>
        </div>
      </div>
    </div>
    <div :class="[$style.items, isOpen && $style.items_open]">
      <select-item
        v-for="(item, index) in items"
        :key="index"
        :title="item[displayExpr]"
        @click="selectValue(item)"
      />
    </div>
  </div>
</template>
<script>
import SelectItem from "./SelectItem";
import ArrowDown from "./assets/arrow-down.svg";

export default {
  components: { SelectItem, ArrowDown },
  props: {
    value: [String, Boolean],
    items: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    },
    displayExpr: {
      type: String,
      default: "title"
    },
    valueExpr: {
      type: String,
      default: "value"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isError: Boolean,
    isCircle: Boolean
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    displayValue() {
      if (!this.value) return false;

      const _val = this.items.find(item => item[this.valueExpr] === this.value);
      return _val ? _val[this.displayExpr] : false;
    }
  },
  methods: {
    selectValue(item) {
      this.$emit("input", item[this.valueExpr]);
      this.hide();
    },
    hide() {
      this.isOpen = false;
    }
  }
};
</script>
<style lang="scss" module>
.select {
  position: relative;
  width: 100%;
  height: 50px;
  &.disabled {
    pointer-events: none;
  }

  svg {
    stroke: currentColor;
  }
}
.output {
  @include flex(space-between, center);
  padding: 0 14px;
  height: 100%;
  border: 2px solid $selectBorder;
  border-radius: 4px;
  cursor: pointer;
  transition: .2s border linear;

  &:focus {
    color: $lightGray;
    border: solid 1px $lightGray;
  }
  &:hover {
    color: $lightGray;
    border: solid 2px $lightGray;
  }

  &-text {
    padding-left: 10px;
    position: relative;
    width: 100%;
    &-title {
      font-size: 16px;
      line-height: 19px;
      color: $gray;
      &_value {
        font-size: 10px;
        line-height: 12px;
      }
    }
    &-value {
      font-size: 16px;
      line-height: 19px;
      color: $black;
    }
  }

  &-controls {
    &-item {
      transition: 0.6s transform;
      &_open {
        transform: rotate3d(1, 0, 0, 190deg);
      }
    }
  }
}

.items {
  overflow: auto;
  position: absolute;
  background: $white;
  display: flex;
  flex-direction: column;
  margin: 8px 0 0 0;
  width: 100%;
  border: 1px solid $lightGray;
  padding: 4px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  max-height: 0;
  opacity: 0;
  transition: 0.4s opacity, 0.4s max-height;
  z-index: 1;

  &_open {
    opacity: 1;
    max-height: 192px;
  }
}

.error {
  border-color: $pink;
}

.circle {
  @include size(40px);

  &-output {
    border-color: #e0e0e0a8;
    border-radius: 100%;
    padding: 0;
    font-size: $fieldFontSizeXs;

    &-text {
      width: 100%;
      color: #fff;
      padding: 0;
      text-align: center;
    }
  }
}
</style>
