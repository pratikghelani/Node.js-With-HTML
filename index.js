const express = require('express')
const app = express()
const path = require('path')
const port = 3000
    const publicPath = path.join(__dirname, 'public');
    app.use(express.static(publicPath));
app.listen(port);


