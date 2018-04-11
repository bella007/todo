import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var expenseSchema = new Schema({
    title: String,
    owner_id: String,
    done: Boolean,
});
export default mongoose.model('Todo', expenseSchema);

