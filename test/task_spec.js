var Task = require('../model/task').default
describe('Task', function() {
  it('is ok', function() {
    var task = new Task({title: "test"})
    expect(task.title).toBe("test")
  })
})
