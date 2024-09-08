const express = require('express');
const port = 3003
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world!");
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})