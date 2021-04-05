const express = require('express'); // to create the express server
const app = express() //use express
const port = 5000; // the port we are using
app.use(express.json()); // to parse the body of the response

// Set the application api to listen on this port so that it will respond
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) 
} )


const low = require('lowdb') //to access this db
const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('db.json')
// const db = low(adapter)

const a = new FileSync('testCenter.json')
const testCenter = low(a);


const b = new FileSync('db.json')
const users = low(b);


users.defaults(b)
 .write()


 app.get('/user1', (req, res) => {
  const data = users.get('db') //we are reading the users
  res.send(data)
 })




testCenter.defaults({ testCenters: [], travelDocs:[]})
 .write()

// Remove a testcenter
app.delete('/testcenters', (req, res) => {
  testCenter.get('testCenters')
    .remove()
    .write();
  res.send('deleted!')
})

  app.post('/testcenters', (req, res) => {
    testCenter.get('testCenters')
      .push(req.body)
      .write()
    res.send('Test Center Added') //sending back a response
   })

   app.get('/testcenters', (req, res) => {
    const data = testCenter.get('testCenters') //we are reading the users
    res.send(data)
   })

   app.get('/testcenters/:id', (req, res) => {
    const data = testCenter.get('testCenters')
     const x = data.filter({"name": req.params.id})
      res.send(x)
    })


//Travel Docs Config

// app.delete('/travelDocs', (req, res) => {
//   testCenter.get('testCenters')
//     .remove()
//     .write();
//   res.send('deleted!')
// })

  app.post('/travelDocs', (req, res) => {
    testCenter.get('travelDocs')
      .push(req.body)
      .write()
    res.send('Test Center Added') //sending back a response
   })

   app.get('/travelDocs', (req, res) => {
    const data = testCenter.get('travelDocs') //we are reading the users
    res.send(data)
   })

//    app.get('/travelDocs:id', (req, res) => {
//     const data = testCenter.get('testCenters')
//      const x = data.filter({"name": req.params.id})
//       res.send(x)
//     })



