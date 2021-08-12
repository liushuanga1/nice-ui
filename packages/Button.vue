<template>
  <button class="button" :class="[type, size, { dashed,round, circle, disabled ,loading}]" @click="handleClick" :disabled="disabled">
    <span v-if="$slots.default" class="slot ">
      <slot></slot>
    </span>
    <span v-else >按钮文字</span>
  </button>
</template>

<script>
export default {
  name: "NButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    dashed: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading:{
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e)
    }
  }
}
</script>

<style lang="scss" scoped>
// 类型
.button {
  cursor: pointer;
  border-radius: 5px;
  padding: 0 9px;
  height: 34px;
  box-sizing: border-box;
  margin-right: 10px;
  white-space: nowrap;
}
.default {
  background: #fff;
  border: 1px solid rgb(224, 224, 230);
}
.default:hover {
  color: #18a058;
  border: 1px solid #18a058;
}
.primary {
  color: #fff;
  background: #18a058;
  border: 1px solid #18a058;
}
.primary:hover {
  background-color: #36ad6a;
  color: #fff;
}
.info {
  color: #fff;
  background: #2080f0;
  border: 1px solid #2080f0;
}
.info:hover {
  color: #fff;
  background: #4098fc;
}
.success {
  color: #fff;
  background: #18a058;
  border: 1px solid #18a058;
}
.success:hover {
  color: #fff;
  background: #36ad6a;
}
.warning {
  color: #fff;
  background: #f0a020;
  border: 1px solid #f0a020;
}
.warning:hover {
  color: #fff;
  background: #fcb040;
}
.error {
  color: #fff;
  background: #d03050;
  border: 1px solid #d03050;
}
.error:hover {
  color: #fff;
  background: #de576d;
}
// 虚线
.dashed {
  background: #fff;
}
.dashed:hover {
  background: #fff;
}
.dashed.default {
  border: 1px dashed rgb(224, 224, 230);
}
.dashed.default:hover {
  border: 1px dashed #18a058;
}
.dashed.primary {
  color: #18a058;
  border: 1px dashed #18a058;
}
.dashed.primary:hover {
  color: #36ad6a;
}
.dashed.info {
  color: #2080f0;
  border: 1px dashed #2080f0;
}
.dashed.info:hover {
  color: #4098fc;
}
.dashed.success {
  color: #18a058;
  border: 1px dashed #18a058;
}
.dashed.success:hover {
  color: #36ad6a;
}
.dashed.warning {
  color: #f0a020;
  border: 1px dashed #f0a020;
}
.dashed.warning:hover {
  color: #fcb040;
}
.dashed.error {
  color: #d03050;
  border: 1px dashed #d03050;
}
.dashed.error:hover {
  color: #de576d;
}
//尺寸
.large {
  height: 40px;
}
.medium {
  height: 32px;
}
.small {
  height: 28px;
}
.mini {
  height: 22px;
}
//圆角
.round {
  border-radius: 20px;
}
//圆形
.circle{
  border-radius: 50%;
}
//不可点击
.disabled{
 cursor: not-allowed;
}
.disabled.default:hover {
  color: #c0c4cc;
  background-color: #fff;
  border-color: #ebeef5;
}
//icon
.i-icon+span{
  margin-left: 6px;
}
.slot{
  display: flex;
  align-items: center;
  justify-content: center;
}
//
.loading .i-icon{
  animation:loading 2.0s infinite linear;
}

@keyframes loading{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}


</style>
