const express = require('express');
const app = express();


// Paso uno: defino las rutas que quiero.
app.get('', (req, res) => {
    res.send('Página Principal');
});

app.get('/consultas', (req, res) => {
    res.send('<h1>Consultas</h1>');
});

app.get('/usuario', (req, res) => {
    res.send({
        id: 13,
        name: "Clara!",
        mail: "clarasanchez@gmail.com"
    });
});

app.listen(3001, () => {
    console.log("Server corriendo en el puerto 3000");
})