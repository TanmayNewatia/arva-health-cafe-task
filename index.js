import './loadEnvironmentVariables.js';
import { collection } from './databaseConnection.js';

import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get('/api/cafes', async (req, res) => {
    const allCafes = await collection.find({}).toArray();
    return res.status(200).json(allCafes);
});

app.get('/api/cafes/:id', async (req, res) => {
    const cafeId = parseInt(req.params.id);
    const allCafes = await collection.findOne({ id: cafeId });
    return res.status(200).json(allCafes);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
