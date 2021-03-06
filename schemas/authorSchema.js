const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    books:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'Book'
        }
    ]
});


module.exports = authorSchema;