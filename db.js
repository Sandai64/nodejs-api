import { MongoClient } from 'mongodb';

const mongoURI = 'mongodb://127.0.0.1:27017';
const dbName = 'posts';

const connectToDatabase = async () => {
  try {
    console.log('creating MongoClient');
    const client = new MongoClient(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connecting...');
    await client.connect();
    console.log('expressapi: setup: mongoDBClient connected successfully!');
    return client.db(dbName);
  } catch (error) {
    console.error('expressapi: setup: failed to connect to MongoDB (mongoDBClient)', error);
    throw error;
  }
};

export default connectToDatabase;
