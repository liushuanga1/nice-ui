<template>
  <div>
    <slot></slot>
  </div>

</template>

<script>
export default {
  name: 'NRadioGroup',
  props:['value'],
  provide () {  
    return {
      radioGroup: this
    }
  },
}
</script>

<style lang="scss" scoped>

</style>