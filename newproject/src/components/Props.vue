<template>
  <div class="hello">
    <h2>{{ $route.params.id }}</h2>
    <p>
      <router-link to="/Page">Turn to element example</router-link>
    </p>
    <p>
      <el-button type="text" @click="() => this.$router.push({ path: '/' })">Go Back</el-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Props extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.block{
  display: inline-block;
}
</style>
