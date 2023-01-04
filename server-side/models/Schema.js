const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    
    })

module.exports = mongoose.model("Schema", Schema);