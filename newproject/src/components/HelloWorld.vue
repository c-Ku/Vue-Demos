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
      <el-switch
        v-model="val"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </p>
    <p>
      <el-select v-model="result" placeholder="Select" :disabled="val">
        <el-option
          v-for="option in options_a"
          :key="option.value"
          :label="option.label"
          :value="option.value">
        </el-option>
      </el-select>
    </p>
    <ul id="example-1">
      <li v-for="option in options_a" :key="option.value">
        {{ option.value }}
      </li>
    </ul>
    <p>
      <el-button :disabled="val">Default</el-button>
      <el-button type="primary" :disabled="val">Primary</el-button>
      <el-button type="success" :disabled="val">Success</el-button>
      <el-button type="info" :disabled="val">Info</el-button>
      <el-button type="warning" :disabled="val">Warning</el-button>
      <el-button type="danger" :disabled="val">Danger</el-button>
    </p>
    <p>
      <el-cascader
        expand-trigger="hover"
        :options="options_b"
        v-model="resultCascader"
        @change="handleChange"
        :disabled="val"
        style="width: 280px">
      </el-cascader>
    </p>
    <div style="width: 500px; margin: auto;">
      <span class="demonstration">Percentage: {{ result2 }}</span>
      <el-slider v-model="result2" :show-tooltip="true"></el-slider>
    </div>
    <div>
      <el-button round @click="increment">-</el-button>
      {{vuexCount}}
      <el-button round @click="decrement">+</el-button>
    </div>
    <p>hehe</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import Component from 'vue-class-component'
import cascaderOptions from './options-a'

interface Option {
  value: string
  label: string
  disabled?: boolean
}

@Component({})
export default class HelloWorld extends Vue {
  msg: string = 'Welcome to Your Vue.js App'
  val: boolean = false
  result: string = ''
  result2: number = 0
  resultCascader: string[] = []
  options_a: Option[] = [
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
  options_b = cascaderOptions
  computed = mapState(['vuexCount'])
  methods = {
    ...mapActions(['increment', 'decrement'])
  }
  count = this.computed
  handleChange(val) {
    console.log(val)
  }
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
.block{
  display: inline-block;
}
</style>
