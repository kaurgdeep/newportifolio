
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// app.use(bodyParser.json());
var path = require('path');
app.use(express.static( __dirname + '/public/dist/public' ));
const router = require("./server/routes");
// router(app)

app.all("/*", (req,res,next) => {
    res.sendFile(path.resolve(__dirname + "/public/dist/public/index.html"))
});

  

app.listen(process.env.PORT || 8000, function() {
    console.log("listening on port 8000");
})

