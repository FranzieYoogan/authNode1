const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;
const UserSchema = new Schema({

    email: {

        type: String,
        required: true,
        unique: true

    },

    password: {

        type: String,
        required: true

    },

    name: {

        type: String,
        required: true,
        unique: false

    },

    role: {

        type: String,
        enum: ['admin', 'user'],
        default: 'user',
        required: true

    },

})

const User = mongoose.model('User', UserSchema,'users');
module.exports = User;

