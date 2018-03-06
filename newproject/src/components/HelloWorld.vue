<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <h2>Element value: {{ val.toString() }}</h2>
    <p>
      <el-button>Default</el-button>
    </p>
    <p>
      <el-switch
        v-model="val"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </p>
    <p>
      <el-select v-model="result" placeholder="Select">
        <el-option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value">
        </el-option>
      </el-select>
    </p>
    <ul id="example-1">
      <li v-for="option in options" :key="option.value">
        {{ option.value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

interface Option {
  value: string
  label: string
  disabled?: boolean
}

@Component({})
export default class HelloWorld extends Vue {
  msg: string = 'Welcome to Your Vue.js App'
  val: boolean = true
  result: string = ''
  options: Option[] = [
    {
      value: 'Stephen Chow',
      label: 'Stephen Chow',
    },
    {
      value: 'Karen Mok',
      label: 'Karen Mok',
    },
    {
      value: 'Fugui Wong',
      label: 'Fugui Wong',
    },
  ]
}
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
</style>
