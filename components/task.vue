<!-- vim: set ft=html : -->
<template>
<div>
  <label>タイトル</label>
  <input type="text"
  v-model="task.title"
  placeholder="タイトルを入力してください"
  v-on:keyup.enter="saveTask"
  v-on:blur="saveTask"
  >
  <span v-on:click="removeTask">削除</span>
</div>
</template>

<script>
var Task = require('../model/task').default

export default {
  props: {
    task: { type: Object, default: () => { return new Task } }
  },
  methods: {
    saveTask: function() {
      this.$dispatch('task-changed')
    },
    removeTask: function() {
      this.$dispatch('task-removed', this.task)
    },
  }
}
</script>
