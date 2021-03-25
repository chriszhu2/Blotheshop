const { MongoClient } = require('mongodb'); // how we will conntect to MongoDB database, cluster, and close cluster

async function main() {
    // we'll use this main to connect to our cluster, call functions that query our databse, and disconnect from out cluster
    const mongoDB = 'mongodb+srv://chriszhu2:hello123@cluster0.nz4bo.mongodb.net/message_board?retryWrites=true&w=majority';
    const client = new MongoClient(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }); //this will return a promise
    try {
      //await keyword indicates we should block other executions until action is performed
      await client.connect(); 
      await listDatabases(client);
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
}
  main().catch(console.err);

  
async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

  