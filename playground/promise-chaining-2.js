 require('../src/db/mongoose')
 const Task = require('../src/models/task')

 Task.findByIdAndDelete('6007b9e387ec9657704254ea').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
 }).then((result) => {
     console.log(result)
 }).catch((e) => {
     console.log(e)
 })