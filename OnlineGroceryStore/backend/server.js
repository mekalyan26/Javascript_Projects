import express from 'express';
import data from './data';

const app = express();

app.get("/api/producs", (req, res) => {

    res.send(data.products);

})

app.listen(5000,() => {console.log("server started")});
