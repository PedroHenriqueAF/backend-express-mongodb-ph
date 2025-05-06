import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js'
import UserRoute from './routes/user.route.js'
import ExampleRoute from './routes/example.route.js';

dotenv.config();
db.connect();

const app = express();

app.use(express.json());

app.use("/users", UserRoute);
app.use("/secureExampleRoute", ExampleRoute);

app.get('/', (req, res) => {
    res.send({message: 'Olá mundo'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});