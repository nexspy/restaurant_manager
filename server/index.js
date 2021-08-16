import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import moment from 'moment';

// import eventRoutes from './routes/events.js';
import foodRoutes from './routes/foods.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extetended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extetended: true}));

app.get('/', (req, res) => {
    res.send('Restaurant API : System is live');
});

app.use('/foods', foodRoutes);

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error.message);
    });

// prevent error on console
mongoose.set('useFindAndModify', false);