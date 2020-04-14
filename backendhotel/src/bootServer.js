import logger from 'morgan';
import cookieParser from 'cookie-parser';
import mainRouter from './routes/mainrouter';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import { Shared } from './common/shared';
import { HttpError } from 'http-errors'

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
        this.app.get('/favicon.ico', (req, res) => res.status(204));
        this.app.use('/api', mainRouter);
        this.app.use((req, res, next) => {
            const err = new Error("NOT FOUND");
            next(err);
        })
        this.app.use(this.handleError);
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
    handleError = (err, req, res, next) => {
        let errConfig = Shared.createError();
        if (err instanceof HttpError) {
            errConfig = err;
            res.statusCode = errConfig.statusCode;
            res.json({ message: err.message });
        } else {
            if (err instanceof Error) {
                errConfig.message = err.message;
                errConfig.statusCode = 500;
                res.statusCode = errConfig.statusCode;
                res.json({ message: errConfig.message })
            } else {
                if (typeof (err) === 'string') {
                    errConfig.message = err;
                    errConfig.statusCode = 404;
                    res.statusCode = errConfig.statusCode;
                    res.json({ message: errConfig.message });
                }
            }
        }
        console.log('==========');
        console.log(errConfig);
    }
}