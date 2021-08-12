<template>

  <span class="container" @click="handleClick" :class="{on:value,disabled}" :style="{borderColor:color,backgroundColor:color}">
    <span class="round" :class="{on:value}"></span>
  </span>

  <!-- :class="{'container-on':value,'inactive-color':!value && inactiveColor,'active-color':value && activeColor}"  -->
</template>

<script>
export default {
  name: 'NSwitch',
  data() {
    return {

    }
  },
  props: {
    //开关状态
    value: {
      type: Boolean,
      default: false
    },
    //非活跃
    inactiveColor: {
      type: String,
      default: ''
    },
    //活跃
    activeColor: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    color() {
      if (this.inactiveColor || this.activeColor) {
        if (!this.value && this.inactiveColor) {
          return this.inactiveColor;
        }
        if (this.value && this.activeColor) {
          return this.activeColor;
        }
      }
      return false
    }
  },
  methods: {
    handleClick() {
      if(!this.disabled){
        this.$emit('input', !this.value)
        this.$emit('change1', !this.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: inline-block;
  width: 40px;
  height: 20px;
  border: 1px solid #dcdfe6;
  border-radius: 20px;
  background: #dcdfe6;
  cursor: pointer;
  box-sizing: border-box;
  .round {
    transition: all 0.4s;
    display: inline-block;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 50%;
    margin-left: 1px;
  }
  .round.on {
    transform: translateX(19px);
  }
}
.container.on {
  background-color: #18a058;
}
.disabled{
  cursor: not-allowed;
  opacity: .5;
}
</style>