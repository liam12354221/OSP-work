// source: dot env research

require('dotenv').config();

// source: express server research

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
// soruce: expres.js static files guide

app.use(express.static(path.join(__dirname, 'public')));

// source: mongodb node.js driver quick start

const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI);

async function main() {
    await client.connect();
    console.log('Connected to MongoDB');
    // start server - srouce: express.js exmample
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

main().catch(console.error);