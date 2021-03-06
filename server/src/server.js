import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import authRouter from './routes/auth-router.js';
import profileRouter from './routes/profile-router.js';
import usersRouter from './routes/users-router.js';
import projectsRouter from './routes/projects-router.js';
import blogsRouter from './routes/blogs-router.js';
import technologiesRoute from "./routes/technologies-route.js";
import cors from 'cors';
import './database/index.js';

// Užkrauna duomenis iš .env failo
config();
// Sukuria serverio objektą, kuris galės atsakyti į užklausas
const server = express();
// iš vykstančios programos aplinkos pasiemame kintamį, kuris buvo aprašytas .env faile
const { SERVER_PORT, PUBLIC_PATH } = process.env;

// Middlewares
// Darant užklausas į serverį atspausdina minimalią informacija paleisto serverio konsolėje
server.use(morgan('tiny'));
// Leidžia vykdyti užklausas iš visų puslapių
server.use(cors());
// Gavus JSON tipo duomenis, įdeda į request handlerio už-klausos parametrą -> req.body
server.use(express.json());
server.use(express.static(PUBLIC_PATH));

// Response handlers
// Visas užklasas kurios prasideda  adresu '/api/auth' serveris nukreips į authRouter
server.use('/api/auth', authRouter);
server.use("/api/profile", profileRouter);
server.use('/api/users', usersRouter);
server.use("/api/projects", projectsRouter);
server.use("/api/blogs", blogsRouter);
server.use("/api/technologies", technologiesRoute);



// Serveriui perduodamos užklausos, kurios bus gautos į šio kompiuterio 5000'inį port'ą
server.listen(SERVER_PORT, () => {
  console.log(`serveris veikia ant http://localhost:${SERVER_PORT}/`);
});
