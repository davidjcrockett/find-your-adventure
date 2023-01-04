const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

        content: {
            type: String,
            required: true
        }
    
    })

module.exports = mongoose.model("Schema", Schema);