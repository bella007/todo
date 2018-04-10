import mongoose from 'mongoose';

var Schema = mongoose.Schema;
var expenseSchema = new Schema({
    name: String,
    email: String,
    owner_id: String,
});
export default mongoose.model('User', expenseSchema);

