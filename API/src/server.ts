import express from "express";
import Logs from "./utils/log";

// Importations des routes
import API from "./api/api";
import CDN from "./cdn/cdn";

// ----------------------
// SERVER PARAMS
const server = express();
// ----------------------


server.use("/api/v1", API);
server.use("/cdn", CDN);


server.listen(9999, () => {
    new Logs().log("[SYSTEM] Démarrage de l'api !", "Success");
});

process.on("SIGINT", () => {
    new Logs().log("[SYSTEM] Arrêt manuel de l'api !", "Logs");
    process.exit();
});