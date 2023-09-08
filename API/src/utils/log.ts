import fs from 'node:fs';

const colorShell = {
    blue: "34",
    green: "32",
    red: "31"
}

class Logs {
    private date = this.time()

    constructor (private input:string) {}

    public time () {
        const timestamp = new Date()
        const date = {
            year: timestamp.getFullYear(),
            month: timestamp.getMonth(),
            day: timestamp.getDay(),
            hour: timestamp.getHours(),
            minute: timestamp.getMinutes(),
            ms: timestamp.getMilliseconds()
        }
        return `${date.year}/${date.month < 10 ? "0" + date.month : date.month}/${date.day < 10 ? "0" + date.day : date.day}- ${date.hour < 10 ? "0" + date.hour : date.hour}h ${date.minute < 10 ? "0" + date.minute : date.minute}m ${date.ms}ms]`;
    }

    private addToTxt() {
        
    }

    /**
     * Affiche le message en bleue
     */
    public log () {
        console.log(`\x1b[40m\x1b[37m[${this.date}\x1b[0m\x1b[0m \x1b[1m\x1b[${colorShell.blue}m${this.input}\x1b[0m\x1b[0m`);
    }

    public error () {
        console.log(`\x1b[40m\x1b[37m[${this.date}\x1b[0m\x1b[0m \x1b[1m\x1b[${colorShell.red}m${this.input}\x1b[0m\x1b[0m`);
    }

    public success () {
        console.log(`\x1b[40m\x1b[37m[${this.date}\x1b[0m\x1b[0m \x1b[1m\x1b[${colorShell.green}m${this.input}\x1b[0m\x1b[0m`);
    }
}

export default Logs;