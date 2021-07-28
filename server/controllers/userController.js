
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
  const { username, email, password } = req.body

  try {
    const user = await User.create({ username, email, password});
    res.status(201).json(user)
  } 
  catch(err) {
    console.log(err)
  }
  
}

const login = async (req, res) => {
  

}


module.exports = {
  signup,
  login
}