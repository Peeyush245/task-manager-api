require('../src/db/mongoose')

const User = require('../src/models/user')

User.findByIdAndUpdate('60071081a1e09a2f00acae90', {age: 24}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 24 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

