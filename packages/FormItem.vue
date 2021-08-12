<template>
  <div class="form-container flex" :style="{width:form.labelWidth}">
    <span class="title"> {{label}}</span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'NFormItem',
  props: {
    label: {
      type: String
    }
  },
  inject: {
    form: {
      default: ''
    }
  }
}
</script>

<style  lang="scss" scoped>
.form-container {
   display: flex;
  align-items: center;
  margin-bottom: 22px;
  .title {
    font-size: 14px;
    line-height: 25px;
    width: 80px;
  }
}
</style>
