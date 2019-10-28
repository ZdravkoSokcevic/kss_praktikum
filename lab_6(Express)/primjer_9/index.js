const express= require('express');
const app= express();

app.use(express.static('pictures'));

app.listen(3000);