import express from 'express';
import routers from './backend/routes/index.js';
import "dotenv/config"
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routers);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
