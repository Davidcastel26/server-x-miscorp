import express, { Express } from "express";
import { Server } from "socket.io";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { corsConfig } from "../configs/corsConfig";
import { Paths } from "../ts/enum/paths";
import { authRoute, roleRoute } from "../routes";
import { sessionMiddleware, wrap } from "../middleware/serverSession";

dotenv.config();

const port = process.env.PORT || 8440;
export const app: Express = express();
export const server = require("http").createServer(app)
export const io = new Server( server, { cors: corsConfig})

app.use( helmet() );
app.use( cors(corsConfig) );
app.use( express.json() );
app.use( sessionMiddleware );

app.use( Paths.users, ()  => {} )
app.use( Paths.roles, roleRoute )
app.use( Paths.auth,  authRoute)

io.use(wrap(sessionMiddleware))

app.listen( port , () => {
    console.log(`---- RUNING ON PORT ${port} ----`)
} )
