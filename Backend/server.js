//********************************** BDD *********************** */
// Import the mongoose module
/*const mongoose = require("mongoose");
// Set up default mongoose connection
const mongoDB = "mongodb://localhost:27017/ADM";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the default connection
const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
//********************************** FIN BDD *********************** */

//********************************** EXPRESS CORS *********************** */

// Node web framework for CRUD and Routes
/*const express = require('express');
const app = express();
app.use(express.json());



/*const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));*/

/*require("dotenv").config();
const cors = require("cors")
app.use(cors())

app.listen(process.env.PORT, () =>
  console.log(`server connected on port ${process.env.PORT}`)
);

//********************************** FIN EXPRESS CORS *********************** */

//********************************** ROUTER *********************** */

/*app.get("/", (req, res) => {
  res.send(`Server Express Connected on ${process.env.PORT}`);
});*/

// $$$$$$$$$$$$$$$$ Def $$$$$$$$$$$$$$$$$
// To use the router module we first require the route module
// Then we call use() on the Express app to add the router to the middleware handling path specifying a URL path

/*const usersRouter = require("./Routers/User.route")
// the route defined in our user route module are then accessible from /Users/AllUsers
app.use('/Users',usersRouter)*/

// create express server
/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const bp = require('body-parser')

const usersRouter = require("./Routers/user.route")
// const studentsRouter = require("./Routers/Student.router")

require("dotenv").config();
app.use(express.json())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())
app.get("/", (req, res) => {
  res.send(`Server Express Connected on ${process.env.PORT}`);
});
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection
db.on('open', () =>  console.log(`connected to database mongodb  ${process.env.URL}`) )
//************************************** */
/* app.use('/Users',usersRouter)
// app.use('/Students',studentsRouter)

//************************************** */
/*app.listen(process.env.PORT, () =>
  console.log(`server connected on port ${process.env.PORT}`)
);

*/
/*const express = require('express')
const bp = require('body-parser')
const app = express()
const port = 3000

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/apple', (req, res) => {
	console.log(req.body)
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})*/
// create express server
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();

const bp = require('body-parser')


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
const usersRouter = require("./Routers/user.route")
// const studentsRouter = require("./Routers/Student.router")
app.post('/', function(req, res){
  console.log(req.body);
});
app.get('/', function(req, res){
  console.log(req.body);
});
require("dotenv").config();
app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
  res.send(`Server Express Connected on ${process.env.PORT}`);
});
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection
db.on('open', () =>  console.log(`connected to database mongodb  ${process.env.URL}`) )
//************************************** */
 app.use('/Users',usersRouter)
// app.use('/Students',studentsRouter)

//************************************** */
app.listen(process.env.PORT, () =>
  console.log(`server connected on port ${process.env.PORT}`)
);
