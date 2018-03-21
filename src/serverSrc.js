const express = require('express');
const app = express();
var tasks = require('./routes/tasks');
var index_routes = require('./routes/index');


var path = require('path');
// app.use(express.static(path.join(_dirname, 'public')));
app.use(express.static(path.join(__dirname, "public")));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use((request, response, next) => {
    request.chance = Math.random();
    next()
});
app.use('/tasks', tasks);
app.use('/index', index_routes);

app.get('/', (request, response) => {
    response.sendfile('./index.html')
});
app.get('/tasks', (request, response) => {
    response.json({
        chance: request.chance
    })
});

app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err);
    response.status(500).send('Something broke!')
});
app.listen(3000);