<template>
  <label class="container" @click="handleClick">
    <span class="checkbox " :class="{checked:modelValue}">
      <icon-check-small theme="outline" size="14" fill="#fff" />
    </span>
    <span>
      <slot>
        {{label}}
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'NCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: '复选框'
    }
  },
  inject: {
    checkboxGroup: {
      default: ''
    }
  },
  computed: {
    modelValue: {
      get() {
        return this.checkboxGroup ? this.checkboxGroup.value.includes(this.label) : this.value
      },
      set(value) {
        if (this.checkboxGroup) {
          //存在移除，不存在加进去
          let checkboxGroupVal = this.checkboxGroup.value
          if (checkboxGroupVal.includes(value)) {
            let index = checkboxGroupVal.indexOf(value)
            checkboxGroupVal.splice(index, 1)
            this.checkboxGroup.$emit('input', checkboxGroupVal)
          } else {
            checkboxGroupVal.push(value)
          }
        } else {
          this.$emit('input', !this.value)
        }
      }
    }
  },
  methods: {
    handleClick() {
      this.modelValue = this.label
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  cursor: pointer;
  margin-right: 12px;
   user-select: none;
  .checkbox {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid rgb(224, 224, 230);
    box-sizing: border-box;
    margin-right: 6px;
    vertical-align: middle;
  }
  .checked {
    background: #18a058;
    .i-icon {
      position: absolute;
      vertical-align: middle;
    }
  }
}
</style>
