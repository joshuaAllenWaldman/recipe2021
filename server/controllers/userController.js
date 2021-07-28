
const db = require('../models');
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken');

// function authenticateToken(req, res, nex){
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   if(token == null) return res.sendStatus(401)

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if(err) return res.sendStatus(403)
//     req.user = user
//     next()
//   })
// }
// db.User.create(req.body, (err, newUser) => {
//   if(err) return console.log(err)
//   res.json(newUser)
//   return console.log('User Created')
// })

const signup = async (req, res) => {
  console.log(req.body)
  try {

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    }
    db.User.create(newUser, (err, createdUser) => {
      if(err) return console.log(err)
      res.json(createdUser)
      return console.log('User Created')
    })

  } catch {
    res.status(500).send()
  }
  
}

const login = async (req, res) => {
  db.User.findOne({username: req.body.username}, (err, foundUser) => {
    if(err) return console.log(err)
    try{
      if (bcrypt.compare(req.body.password, foundUser.password)){
        console.log('passwords match')
      } else {
        console.log('passwords dont match')
      }
  } catch{
    console.log('err')
  }
  })

  // try{
  //     if (bcrypt.compare(req.body.password, foundUser.password)){
  //       console.log('passwords match')
  //     } else {
  //       console.log('passwords dont match')
  //     }
  // } catch {

  // }



}


module.exports = {
  signup,
  login
}