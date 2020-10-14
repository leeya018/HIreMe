var con = require('./dbConnection.js');
let info = require('./info')

let initDB = con.then(async db => {
  let rows
  try {
    rows = await db.collection("skills").find().toArray()
    if (rows.length === 0) {
      await db.collection("skills").insertMany(info.skills)
      console.log("Skills are in")
    }
  } catch (err) {
    console.error("Error skills: " + err.message)
  }



  try {
    rows = await db.collection("users").find().toArray()

    if (rows.length === 0) {
      await db.collection("users").insertMany(info.users)
      console.log("User are in")
    }
  } catch (err) {
    console.error("Error users: " + err.message)
  }


  try {
    rows = await db.collection("locations").find().toArray()
    if (rows.length === 0) {
      await db.collection("locations").insertMany(info.locations)
      console.log("locations are in")
    }
  } catch (err) {
    console.error("Error locations: " + err.message)
  }


  try {
    rows = await db.collection("jobs").find().toArray()
    if (rows.length === 0) {
      await db.collection("jobs").insertMany(info.jobs)
      console.log("jobs are in")
    }
  } catch (err) {
    console.error("Error jobs: " + err.message)
  }
})








module.export = initDB