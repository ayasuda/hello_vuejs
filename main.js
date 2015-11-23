var Vue = require('vue')
var TaskList = global.TaskList = require('./model/task_list').default
var Task = global.Task = require('./model/task').default

new Vue({
  el: '#app',
  components: {
    MyMessage: require('./components/message.vue'),
  }
})
