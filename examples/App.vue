<template>
  <div id="app">
    <h2>input组件</h2>
    <div class="item">
      <p><strong>基本使用</strong></p>
      <n-input placeholder="请输入内容" />
    </div>
    <div class="item">
      <p><strong>禁用</strong></p>
      <n-input placeholder="请输入内容" disabled />
    </div>
    <div class="item">
      <p><strong>双向数据绑定</strong></p>
      {{value}}<br />
      <n-input placeholder="请输入内容" v-model="value" />
    </div>
    <div class="item">
      <p><strong>可清除</strong></p>
      <n-input placeholder="可以清除" clearable v-model="clearableValue" />
    </div>
    <div class="item">
      <p><strong>密码</strong></p>
      <n-input placeholder="密码" showPassword clearable v-model="passwordValue" />
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      visible: false,
      value: '你好',
      clearableValue: '可清除的内容',
      passwordValue: '',
      radioVal: "1",
      checkboxArr: ['悟空', '沙僧'],
      info: {
        age: 18
      },
      form: {
        title: 'Vue 3.2发布了！',
        desc: '8月10号，尤雨溪在微博平台官宣 Vue 3.2 已发布',
        switchVal: true,
        hobby: ['喝茶'],
        radioVal: '前端'
      }
    }
  }
}
</script>

<style>
</style>
