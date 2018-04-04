const path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    SourceMapSupport = require('source-map-support');


import todoRoutes from './routes/todo.server.route';

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, content-type, Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Credentials', true);
    if ('OPTIONS' == req.method)
        return res.sendStatus(204);
    next();
});




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:123@ds041484.mlab.com:41484/todo_listtt', {
    useMongoClient: true,
});

SourceMapSupport.install();

app.use('/task-list', todoRoutes);

app.get('/', (req, res) => {
    console.log("req", req.body);
    return res.end('Api WORKING');
});

app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});


app.listen(port, () => {
    console.log(`App Server Listening at ${port}`);
});
