const mongoose = require('mongoose')

const url = `mongodb+srv://chriszhu2:hello123@cluster0.nz4bo.mongodb.net/message_board?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })