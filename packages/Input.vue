<template>
  <span class="container">
    <input class="input" :type="showPassword?(passwordEyeOpen?'text':'password'):type" :placeholder="placeholder" :class="{disabled}" :disabled="disabled" :value="value" @input="handleInput">
    <span class="icon">
      <!-- 清空 -->
      <icon-close-one v-show="clearable && value && !showPassword" @click="handleClearable" theme="outline" size="14" fill="#333" />
      <!-- 密码预览 -->
      <icon-preview-open v-show="showPassword && passwordEyeOpen" @click="passwordEyeOpen=false" theme="outline" size="14" fill="#333" />
      <icon-preview-close-one v-show="showPassword && !passwordEyeOpen" @click="passwordEyeOpen=true" theme="outline" size="14" fill="#333" />
    </span>
  </span>
</template>

<script>
export default {
  name: 'NInput',
  props: {
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    //清空内容
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passwordEyeOpen: false,//眼睛睁开
    }
  },
  methods: {
    //双向绑定 input事件
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    //清除内容
    handleClearable() {
      this.$emit('input', null)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .input {
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    border-radius: 3px;
    padding-left: 12px;
    padding-right: 30px;
    caret-color: #18a05a;
    border: 1px solid rgb(224, 224, 230);
    &:focus {
      outline: 1px solid #18a05a;
    }
  }
  // 禁用
  .disabled {
    cursor: not-allowed;
  }
  // 图标
  .icon {
    position: absolute;
    cursor: pointer;
    right: 9px;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      color: black;
    }
  }
}
</style>