import Express from "express";

// Importations des routes
import auth from "./routes/Auth.routes";



const API = Express();

API.use("/auth", auth); // Authentification (login)


export default API;