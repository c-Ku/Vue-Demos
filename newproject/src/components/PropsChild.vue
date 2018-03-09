<template>
  <p>Props <span class="red">{{ msg }}</span></p>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'

  @Component
  export default class PropsChild extends Vue {
    @Prop()
    msg: string
  }
</script>

<style lang="less">
.red {
  color: red;
}
</style>

