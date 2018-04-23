const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.send('Hola Mundo')
// })

app.listen(3000, () => {
    console.log('Escuchando Peticiones en el puerto 3000');
})