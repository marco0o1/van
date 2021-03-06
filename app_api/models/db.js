const mongoose = require('mongoose');

let dbURI = 'mongodb://localhost/van';

if(process.env.NODE_ENV == 'production') {
    dbURI = process.env.MONGODB_URI;
}


mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', () => {
    console.log(`Mongoose connection error on ${dbURI}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${dbURI}`);
});

// listens for SIGUSR2, which is what nodemon uses
process.once('SIGUSR2', () => {
    gracefulShutdown('Nodemon Restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// listens for SIGINT to be emitted upon application
// termination
process.on('SIGINT', () => {
    gracefulShutdown('Application Termination', () => {
        process.exit(0);
    });
});

// listens for SIGTERM to be emitted when Heroku
// shuts down the process
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku App Shutdown', () => {
        process.exit(0);
    });
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected from ${msg}`);
        callback();
    });
};


require('./users');