const express = require('express');
const app = express();
const path = require('path');
let puerto = 3030;


app.listen(puerto, () => console.log('Servidor corriendo en http://localhost:' + puerto));