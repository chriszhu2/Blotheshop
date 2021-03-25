var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.set('debug', true);

/** Actual chat schema */
const chatsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    } 
    
    // messagess: [usermessageSchema]
}, {
    timestamp:true,
    collection: 'chatbox'
});

function getChatsModel() {
    if (mongoose.models && mongoose.models.chats) {
        return mongoose.models.chats;
    }
    return mongoose.model('chatbox', chatsSchema, 'chatbox');
}

// var Message = mongoose.model('Message',usermessageSchema);
// module.exports = Message;
module.exports = getChatsModel();
