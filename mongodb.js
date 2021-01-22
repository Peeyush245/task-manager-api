// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// Shorthand for above three lines 

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }

    // console.log('Connected correctly')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Peeyush',
    //     age: 27
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Raman',
    //         age: 30
    //     }, {
    //         name: 'Pankaj',
    //         age: 30
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew inspection',
    //         completed: false
    //     }, {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ name: 'Raman', age: '1' }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("60068137bb6e50c54bc8aa8f") }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     if(error) {
    //         return console.log('Unable to fetch data')
    //     }

    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     if(error) {
    //         return console.log('Unable to fetch data')
    //     }

    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("60069623a50680cda730483c")}, (error, task) => {
    //     if(error) {
    //         return console.log('Unable to fetch data')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
    //     if(error) {
    //         return console.log('Unable to fetch data')
    //     }

    //     console.log(tasks)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("60069af976ea8bd0a9395c6e")
    // }, {
    //     $set: {
    //         name: 'Prashant'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("60069af976ea8bd0a9395c6e")
    // }, {
    //     $inc: {
    //         age: 5
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'Clean the house'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})

