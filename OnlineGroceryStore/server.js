const express = require('express');
const path = require('path');

const app = express();

app.get("/*",(req, res) => {
res.sendFile(path.resolve("WebApplication", "index.html"));
});


app.listen(process.env.PORT || 8080, () => console.log("Server Started"));