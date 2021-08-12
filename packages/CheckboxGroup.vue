<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NCheckboxGroup',
  props: {
    value:{
      type:Array
    }
  },
  provide() {
    return {
      checkboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
</style>