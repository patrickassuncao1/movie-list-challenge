import "express-async-errors";
import cors, { CorsOptions } from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import path from "path";

import { routes } from "./routes";
import swaggerDocs from '../swagger.json';
import { errorsMiddleware } from "./middleware/errorsMiddleware";

const app = express();

const corsOptions: CorsOptions = {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"]
};


app.use(cors(corsOptions));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//files route
app.use("/files", express.static(path.resolve(__dirname, "tmp", "uploads")));

app.use("/api/v1", routes);

app.use(errorsMiddleware);

export { app };