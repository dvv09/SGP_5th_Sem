const mongoose = require('mongoose');

// Creatinng a userSchema for the database
const groundSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    city: {
        type : String,
        required : true
    },
    location: {
        type : String,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    Ratings: {
        type : Number,
        required : true
    },
    userrated: {
        type : Number,
        required : true
    },
    Description: {
        type : String,
        required : true
    },
    image: {
        type : String,
        required : true
    }
});

// creating a User model or class and exporting it for the later use of CRUD operations.
const Ground = mongoose.model("GROUND", groundSchema);

module.exports = Ground;