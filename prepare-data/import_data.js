import { readFileSync } from 'fs';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const shops = JSON.parse(readFileSync('./coffee_shops.json'));
const client = new MongoClient(process.env.ATLAS_URI);

await client.connect();
const collection = client.db('cafeData').collection('cafes');
await collection.insertMany(shops);

await client.close();
