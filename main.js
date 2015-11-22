var Vue = require('vue')
new Vue({
  el: '#app',
  components: {
    MyMessage: require('./components/message.vue'),
  }
})
