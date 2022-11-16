const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username:{
        type: String,
        lowercase: true,
        require: true,
        unique: true
    },

    password:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true,
        lowercase: true,
        unique: true
    }

});

module.exports = mongoose.model('User', UserSchema);