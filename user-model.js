const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:{type:String, required: true},
    age:{type:Number, required: true, min:21, max:60},
    firstName:{type:String, required: true},
    lastName:{type:String, default:'NA'},
})

const UserItem = mongoose.model('UserItem',UserSchema);

module.exports = UserItem;