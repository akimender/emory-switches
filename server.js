const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT | 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.listen(PORT, () => console.log(`Example app is listening on port ${PORT}`));