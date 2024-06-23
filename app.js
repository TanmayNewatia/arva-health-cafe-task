import './loadEnvironmentVariables.js';

import './databaseConnection.js';
import { collection } from './databaseConnection.js';

import express from 'express';
import cors from 'cors';
// import path from 'path';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
// const _dirname = path.dirname("")
// const buildpath = path.join(_dirname, "../frontend/build")
// app.use(express.static(buildpath));
app.use(cors({
    "origin": "*",
}));

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
