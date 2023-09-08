import fs from 'node:fs';

class Logs {
    private date = this.time();
    private colorShell = {
        Logs: "34",
        Success: "32",
        Error: "31"
    };
    private symboleLogs = {
        Logs: "",
        Success: "√",
        Error: "/!\\"
    };

    public time () {
        const timestamp = new Date();
        const date = {
            year: timestamp.getFullYear(),
            month: timestamp.getMonth(),
            day: timestamp.getDay(),
            hour: timestamp.getHours(),
            minute: timestamp.getMinutes(),
            ms: timestamp.getMilliseconds()
        };
        return {
            date: `${date.year}-${date.month < 10 ? "0" + date.month : date.month}-${date.day < 10 ? "0" + date.day : date.day}`,
            time: `${date.hour < 10 ? "0" + date.hour : date.hour}h ${date.minute < 10 ? "0" + date.minute : date.minute}m ${date.ms}ms`
        };
    };

    private addToTxt(input: string, type: "Logs" | "Error" | "Success") {
        const logsFolder = fs.readdirSync(`${__dirname}/../logs`).filter(file => file === `${this.date.date}.log`);
        if (!logsFolder.length) {
            console.log(0)
            const log = `[${this.date.time}] ${this.symboleLogs[type]} ${input}`;
            fs.appendFile(`${__dirname}/../logs/${this.date.date}.log`, log, "utf-8", (err) => err ? console.log(err) : "");
        } else {
            console.log(1)
            const logFile = fs.readFileSync(`${__dirname}/../logs/${this.date.date}.log`, "utf-8");
            const log = `${logFile}\n[${this.date.time}] ${this.symboleLogs[type]} ${input}`;
            fs.writeFileSync(`${__dirname}/../logs/${this.date.date}.log`, log);
            console.log(2)
        };
    };

    public async log (input:string, type: "Logs" | "Error" | "Success") {
        console.log(`\x1b[40m\x1b[37m[${this.date.date} // ${this.date.time}]\x1b[0m\x1b[0m \x1b[1m\x1b[${this.colorShell[type]}m${input}\x1b[0m\x1b[0m`);
        this.addToTxt(input, type);
    };
};

export default Logs;