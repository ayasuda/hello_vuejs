<!-- vim: set ft=html : -->
<template>
  <div>{{task.title}}</div>
</template>

<script>
var Task = require('../model/task').default

export default {
  props: {
    task: { type: Object, default: () => { return new Task } }
  }
}
</script>
