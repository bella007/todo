const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    done: Boolean,
    id: String
});

module.exports = Mongoose.model('Task', TaskSchema);