import express from "express"
import Logs from "./utils/log";


const server = express();

server.listen(9999, () => {
    new Logs("[System] Start !").log();
    new Logs("[System] start...").error();
    new Logs("[System] start !!!").success();
})