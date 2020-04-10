import logger from 'morgan';
import cookieParser from 'cookie-parser';
import mainRouter from './routes/mainrouter';
import express from 'express';
import { json, urlencoded } from 'body-parser';

const normalizePort = (val) => {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port > 0) {
        return port;
    }
    return false;
}
export class BootServer {
    constructor() {
        this.app = express();
        this.setup();
    }
    start = () => {
        const port = normalizePort(process.env.PORT || 9001);
        this.app.listen(port);
        console.log(`Express server has started on port ${port}. Sever is live on: http://localhost:${port}`);
    }
    setup = () => {
        this.app.use(json());
        this.app.use(urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use('/api', mainRouter);
    }
    configHeader = (req, res, next) => {
        //Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        //Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        // res.setHeader('Content-Type','application/json');

        //Request headers you wish to allow
        res.setHeader('Access - Control - Allow - Method', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        // Pass to next layer of middleware
        next();
    }
    // handleError = (err, req, res, next) => {
    //     let errConfig = Shared.createError();
    //     if (err instanceof HttpError) {
    //         errConfig = err
    //     } else {
    //         if (err instanceof Error) {
    //             if (err.name === 'EntityMetadataNotFound' || err.name === 'ECONNREFUSED') {
    //                 err.message = 'NOT FOUND CONNECT DATABASE';
    //             } else {
    //                 errConfig.message = err.message;
    //                 errConfig.statusCode = 500
    //             }
    //         } else {
    //             if (typeof (err) === 'string') {
    //                 errConfig.message = err
    //                 errConfig.statusCode = 404
    //             }
    //         }
    //     }
    //     console.log('==========');
    //     console.log(errConfig);
    // }
}