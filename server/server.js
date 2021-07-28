require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

const PORT =  process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {
  res.send(`
    <h1>Recipe Server has Begun.</h1>
  `)
})

app.listen(PORT, () => console.log(`Server connected running on port: ${PORT}`))