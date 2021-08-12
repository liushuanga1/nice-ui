<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'NForm',
  props:{
    model:{
      type:Object
    },
    labelWidth:{
      type:String,
      default:'300px'
    }
  },
  provide() {
    return {
      form: this
    }
  }
}
</script>

<style>

</style>