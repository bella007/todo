import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var expenseSchema = new Schema({
    title: String,
    done: Boolean,
    id: String
});
export default mongoose.model('Todo', expenseSchema);

