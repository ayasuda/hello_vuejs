//var taskComponent = require('../components/task_list.vue')

describe('TaskComponent', function() {
  it('should have a created hook', function () {
    var taskComponent = require('../components/task.vue')
    expect(typeof taskComponent.created).toBe('function')
  })
})
