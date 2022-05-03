## Requerimiento:

Crea un endpoint nuevo que regrese toda la lista de explorers filtrados por un stack.


`ExplorerService.js`
```javascript
static getExplorersByStack(explorers, stack_){
        const explorersByMission = explorers.filter((explorer) =>{
            return explorer.stacks.includes(stack_);
        });
        return explorersByMission;
    }
```
La nueva funcionalidad se crea dentro de `ExplorerService`, esta es utilizada e invocada desde `ExplorerController` para que, posteriormente pueda ser usada dentro del server.

`ExplorerController.js`
```javascript
static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.getExplorersByStack(explorers, stack);
    }
```

`ExplorerController.js`
```javascript
app.get("/v1/explorers/stack/:stacks", (request, response) => {
    const stacks = request.params.stacks;
    const explorersWithStack = ExplorerController.getExplorersByStack(stacks);
    response.json({stack: request.params.stacks, explorers: explorersWithStack});
});
```

