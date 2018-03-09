<template>
  <div class="hello">
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
      <el-button round @click="decrement">-</el-button>
      {{vuexCount}}
      <el-button round @click="increment">+</el-button>
    </div>

    <div v-if="val">
      <ul id="example-1">
        <li v-for="(option, index) in options_a" :key="option.value">
          {{ index + 1 }}. {{ option.value }}
        </li>
      </ul>
    </div>
    <div v-else>
      <ul id="example-2">
        <li v-for="(option, index) in options_c" :key="option.value">
          {{ index + 1 }}. {{ option.value }}
        </li>
      </ul>
    </div>

    <p v-show="!val">value: {{ result }}</p>

    <el-button type="text" @click="goBack">Go Back</el-button>
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

@Component({
  computed: {
    ...mapState(['vuexCount'])
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
})
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
  options_c: Option[] = [
    {
      value: '라영호（罗永浩）',
      label: '라영호',
    },
    {
      value: '김성（金星）',
      label: '김성',
    },
    {
      value: '최건（崔健）',
      label: '최건',
    },
  ]
  handleChange(val) {
    console.log(val)
  }
  goBack() {
    this.$router.push({ path: '/' })
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
