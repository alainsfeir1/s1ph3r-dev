const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const { dirname } = require('path');
const PORT = process.env.PORT || 3000;

const app = express();
// Set the view engine to EJS
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
console.log(__dirname)

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'utils')));


app.get('/s1ph3r', (req, res) => {
    res.render('pages/index');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});