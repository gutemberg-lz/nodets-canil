import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mustache from 'mustache-express';
import path from 'path';

import router from '@/routes';
import notFound from '@/routes/notFound';

dotenv.config();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, "../public")));

server.use(router);
server.use(notFound);

server.listen(process.env.PORT, () => {
  console.log("Server - http://localhost:3000");
});
