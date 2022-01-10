import express from 'express';
import path from 'path';
import routesPath from "../src/routes/assignments";
import assignments from './models/assignments';
import { assignmentArray } from '../src/routes/assignments';

const app = express();

// Setting up API
app.use(express.json());

// Settings for web server
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// TODO Add routes here.
app.use ("/", routesPath);

const port = 3009;
app.listen(port, () => console.log(`Listening on port: ${port}.`));

// Keep this line. It is added for our testing purposes.
export default app;