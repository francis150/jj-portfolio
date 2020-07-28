const express = require('express')
const app = express()
const path = require('path')

app.use('/',require('./routes'))
app.use(express.static(path.join(__dirname,'assets')))

const PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
    if(err) return console.log(err.message)

    console.log(`Server running on PORT ${PORT}`)
})