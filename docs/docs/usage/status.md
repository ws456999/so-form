## 状态控制

状态是so-form最关心的问题之一，通过状态的控制，能够在传统的 `新建`、`编辑`、`详情` 的场景中，使用同一份代码，提高开发效率。

除此之外，引入状态的表单，也能够轻松地去应对纷繁复杂的业务需求。

### Demo

<box>
  <vuecode md>
    <div slot="demo">
      <demos-status></demos-status>
    </div>
    <div slot="code">

```html
<template>
  <iForm label-width="100px" :model="model" ref="ruleForm">
    <iFormRows :rows="rows"></iFormRows>
    <div class="margin">
      <span class="label">global status:</span>
      <el-button @click="setStatus('edit')">status edit</el-button>
      <el-button @click="setStatus('preview')">status preview</el-button>
      <el-button @click="setStatus('disabled')">status disabled</el-button>
    </div>
    <div class="margin">
      <span class="label">name status:</span>
      <el-button @click="setLocalStatus('job', 'edit')">status edit</el-button>
      <el-button @click="setLocalStatus('job', 'preview')">status preview</el-button>
      <el-button @click="setLocalStatus('job', 'disabled')">status disabled</el-button>
    </div>
    <div class="margin">
      <span class="label">age status:</span>
      <el-button @click="setLocalStatus('isMsg', 'edit')">status edit</el-button>
      <el-button @click="setLocalStatus('isMsg', 'preview')">status preview</el-button>
      <el-button @click="setLocalStatus('isMsg', 'disabled')">status disabled</el-button>
    </div>
  </iForm>
</template>

<script>
export default {
  data: () => ({
    model: {
      job: '',
      isMsg: ''
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: 'name', name: 'job', type: 'input' },
        { label: 'isMsg', name: 'isMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}]}
      ]
    }
  },
  methods: {
    setStatus (status) {
      this.$refs.ruleForm.setGlobalStatus(status)
    },
    setLocalStatus (name, status) {
      this.$refs.ruleForm.setStatus(name, status)
    }
  }
}
</script>

<style scoped>
.label {
  display: inline-block;
  width: 120px;
}
.margin{
  margin: 5px 0;
}
</style>
```

  </div>
  </vuecode>
</box>

### 状态枚举
表单状态分为以下三种类型：edit(编辑态), preview(预览态), disabled(禁用态)

### getGlobalStatus()
获取form表单内的组件状态

```js
  this.$refs.xxxx.getGlobalStatus(); // get global status
```

### setGlobalStatus(status)
设置form表单全局状态

```js
  this.$refs.xxxx.setGlobalStatus('edit'); // set up global status
```

### getStatus(name)
获取单个组件状态

```js
this.$refs.xxxx.getStatus('username'); // get single item's status
```

### setStatus(name, status)
设置单个组件状态

```js
this.$refs.xxxx.setStatus('username', 'edit'); // modify single item's status
```

### 组件适配
为了能够更好实现状态控制，开发者需要对引入的组件进行 "适配"。 常用的表单组件通常只具有编辑态，因此要达到状态控制的目的，我们需要对他们进行改造。

目前我们已经对社区流行的组件库进行了统一的适配，开发者只需要引入这些适配层就可以直接使用了。
