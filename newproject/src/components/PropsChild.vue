<template>
  <div class="propsChild">
    <p>Props <span class="red">{{ msg }}</span></p>
    <p>This part is rendered by the 'PropsChild' component.</p>
  </div>
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

<style scoped lang="less">
.propsChild {
  border: 1px solid red;
  .red {
    color: red;
  }
}
</style>

