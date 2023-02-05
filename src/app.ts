import cors, { CorsOptions } from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import path from "path";

import { routes } from "./routes/v1";
import swaggerDocs from '../swagger.json';

const app = express();

const corsOptions: CorsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"]
};


app.use(cors(corsOptions));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//files route
app.use('/files', express.static(path.resolve(__dirname, 'tmp', 'uploads')));

app.use("/api/v1", routes);

export { app };