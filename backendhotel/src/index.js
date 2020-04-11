import { connect } from 'mongoose';
import { BootServer } from './bootServer'






connect(process.env.DATABASECONNECT, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(async () => {
        console.log("Connected database");
        const bootServer = new BootServer();
        bootServer.start();
    })
    .catch(err => {
        console.log(`Connected database error: ${err}`);
    })


