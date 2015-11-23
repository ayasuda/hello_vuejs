<!-- vim: set ft=html : -->
<template>
  <div>{{list.title}}</div>
</template>

<script>
var TaskList = require('../model/task_list').default

export default {
  props: {
    list: { type: Object, default: () => { return new TaskList } }
  }
}
</script>
