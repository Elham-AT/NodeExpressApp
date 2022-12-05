const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/api/users"));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
})

app.listen(3000, () => console.log('Server started'));

