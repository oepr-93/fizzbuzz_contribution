const fs = require("fs");

class Reader{
    static readJsonFile(path){
        //path = "./explorers.json"
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;
