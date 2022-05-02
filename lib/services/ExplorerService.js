const Reader = require("../utils/reader");

class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);
        return explorersUsernames;
    }
    static getExplorersByStack(explorers, stack_){
        //const explorers = Reader.readJsonFile("./explorers.json");
        const explorersByMission = explorers.filter((explorer) =>{
            return explorer.stacks.includes(stack_);
        });
        return explorersByMission;
    }

}

module.exports = ExplorerService;
/*const exp = ExplorerService.getExplorersByStack("elm");
console.log(exp)*/
