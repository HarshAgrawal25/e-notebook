const mongoose = require('mongoose');
  
const NotesScheme = new Schema({
    title:{
            type: String,
            required: true,
    },
    description:{
        type: String,
        required: true,
        
    },
    tag:{
        type: String,
        default: "general"  
    },
    date:{
        type: Date,
        default: Date.now,
        required: true,
    }


});

module.exports = mongoose.model('user',NotesScheme);

