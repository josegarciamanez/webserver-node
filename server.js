const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'capitán américa'
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/item3', (req, res) => {
    res.render('item3')
})
app.get('/item4', (req, res) => {
    res.render('item4')
})

app.listen(port, () => {
    console.log(`Escuchando Peticiones en el puerto ${port}`)
})