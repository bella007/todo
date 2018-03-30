// ./express-server/app.js
const express = require('express');
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import bb from 'express-busboy';

// import routes
import todoRoutes from './routes/todo.server.route';

// define our app using express
const app = express();

// express-busboy to parse multipart/form-data
bb.extend(app);

// allow-cors
// app.use(function(req,res,next){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// })
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, content-type, Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Credentials', true);
    if ('OPTIONS' == req.method)
        return res.sendStatus(204);
    next();
});


// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));


// set the port
const port = process.env.PORT || 3001;

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:123@ds041484.mlab.com:41484/todo_listtt', {
  useMongoClient: true,
});

// add Source Map Support
SourceMapSupport.install();

// app.use('/', todoRoutes);

app.get('/', (req,res) => {
  console.log("req", req.body)
  return res.end('Api WORKING');
})


app.post("/task-list", (req, res, next) => {
    console.log("req", req.body)
    return res.end('Api POST WORKING');
} );



// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});



// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
