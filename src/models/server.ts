import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from 'dotenv';
import { corsConfig } from "../configs/corsConfig";
import { Paths } from "../ts/enum/paths";
import { roleRoute } from "../routes";
import { sessionMiddleware } from "../middleware/serverSession";

dotenv.config();

const port = process.env.PORT || 8440;
export const app: Express = express();

app.use( helmet() );
app.use( cors(corsConfig) )
app.use( express.json())
app.use( sessionMiddleware )

app.use( Paths.users, ()  => {} )
app.use( Paths.roles, roleRoute )

app.listen( port , () => {
    console.log(`---- RUNING ON PORT ${port} ----`)
} )
