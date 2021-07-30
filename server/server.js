require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {requireAuth, checkUser} = require('./authorizationMiddleware/authController')

const app = express();

const PORT =  process.env.PORT || 4000
const routes = require('./routes')


app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.get('/', (req, res) => {
  res.send(`
    <h1>Recipe Server has Begun.</h1>
  `)
})

app.use('/api/v1/users', routes.users)

app.listen(PORT, () => console.log(`Server connected running on port: ${PORT}`))