const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000

// Shows static content
app.use(express.static(`${__dirname}/public`))

// Express HBS engine
hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')



app.get('/', (req, res) => {
    res.render('home', {
        name: 'juan',
        year: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        year: new Date().getFullYear()
    })
})

app.listen(port, () =>{
    console.log(`Listen on port ${port}`);
})