<template>
  <label class="container" @click="handleClick">
    <!-- <input type="radio"> -->
    <span class="radio " :class="{checked:modelValue===label}"></span>
    <span>
      <slot>
        {{label}}
      </slot>
    </span>
  </label>

</template>

<script>
export default {
  name: 'NRadio',
  props: {
    value: {
      type: [String, Boolean, Number],
      default: ''
    },
    label: {
      type: [String, Boolean, Number],
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.modelValue = this.label
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.radioGroup ? this.radioGroup.value : this.value
      },
      set(value) {
        this.radioGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    }
  },
  inject: {
    radioGroup: {
      default: ''
    }
  },
  created() {
   // console.log('radioGroup', this.radioGroup)
  }
}
</script>

<style lang="scss" scoped>
.container {
  cursor: pointer;
  margin-right: 12px;
  .radio {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid rgb(224, 224, 230);
    border-radius: 50%;
    box-sizing: border-box;
    position: relative;
    margin-right: 6px;
    &::after {
      position: absolute;
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s;
      background: #fff;
    }
  }
  .checked {
    border: 1px solid #18a058;
    &::after {
      background: #18a058;
    }
  }
}
</style>