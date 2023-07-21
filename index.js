// Requires
import express from 'express';
import swaggerUIExpress from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { MongoClient } from 'mongodb';
import postsRouter from './routes/posts.js';
import connectToDatabase from './db.js';

// Instances
const app = express();
const port = 3000;
// const mongoDBClient = new MongoClient('mongodb://expressapi-mongodb:27017');
const swaggerSpecs = swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "expressapi SwaggerUI",
            version: "0.0.0",
            description:
                "expressapi: ExpressJS-based CRUD application w/ SwaggerUI",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Erwan EGASSE",
                url: "https://erwan.sh",
                email: "contact@erwan.sh",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/*.js"]
});
// mongoDBClient.connect().then((e) => {
//     console.log('expressapi: setup: mongoDBClient connected successfully !', e);
// }).catch((e) => {
//     console.log('expressapi: setup: failed to connect to MongoDB (mongoDBClient)', e);
// });

// App setup & Endpoints

app.use(async (req, res, next) => {
    try {
        console.log('mw: req.db await connectDB');
        req.db = await connectToDatabase(); // Access the database connection using req.db
        next();
    } catch (error) {
        next(error);
    }
});

app.use('/docs', swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerSpecs));
app.use('/posts', postsRouter);
app.use('/', (req, res) => {
    res.send('It works !');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`expressapi: setup: listening on *:${port}`);
});