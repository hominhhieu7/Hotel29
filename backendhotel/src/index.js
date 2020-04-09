import express from 'express';
import { json, urlencoded } from 'body-parser';
import { connect } from 'mongoose';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import mainRouter from './routes/mainrouter';

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'))



const port = process.env.PORT || 3001;


connect(process.env.DATABASECONNECT, { useNewUrlParser: true })
    .then(async () => {
        console.log("Connected database");
        app.listen(port, (req, res) => {
            console.log(`Sever is live on: http://localhost:${port}`);
        });
        app.use('/api', mainRouter)
    })
    .catch(err => {
        console.log(`Connected database error: ${err}`);
    })


