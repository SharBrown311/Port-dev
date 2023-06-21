const express = require(
"express"
)
const path = require("path")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser");

require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))


//CONNECTION TO MONGODB
mongoose.set('strictQuery', true);
mongoose.connect(
 `${process.env.MONGODB_URI}`
  ,() => console.log("Mongoose Connected to DB"))



// app.use("/api", expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
});

app.listen(port, () => {
  console.log("Listening on " + port);
});
