const { createServer } = require('node:http');
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/tesladata';

const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        // connect the client to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db('tesladata');
        const collection = database.collection('tesladata');

        const result = await collection.insertOne({ name: "Tesla Model S", color: "white"});

        console.log('Document inserted:', result.insertedId)

        // Code for database operations goes here
        // e.g., insert, update, delete, find operations
    } catch (error){
        console.error('Error connecting to MongoDB:', error);
    } finally {
        //close the client when done
        await client.close();
    }
}
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Tesla backend')
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`);
});

connectToMongoDB();