import express from "express"
import Logs from "./utils/log";


const server = express();

server.listen(9999, () => {
    new Logs().log("[SYSTEM] Démarrage de l'api !", "Success");
})

process.on("SIGINT", () => {
    new Logs().log("[SYSTEM] Arrêt manuel de l'api !", "Logs")
    process.exit()
})