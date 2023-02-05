import { app } from "./app";
import dotenv from "dotenv";
import { envConf } from "./config/env";

dotenv.config();

app.listen(envConf.PORT || 5000, () => console.log('Servidor na porta ' + envConf.PORT));