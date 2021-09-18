const tareas = require("./tareas.json")
const fs = require("fs");
let titulo = process.argv[3]
let estado = process.argv[3]

let menu = opcion =>{
    switch (opcion) {
        case 'listar':
            // console.log(tareas)
            tareas.forEach(tarea=>{
                console.log(tarea);
            })
            break
        case "crear":
            addingTask(titulo, estado)
            console.log("task added!")
            break

        case "filtrar":
            console.log(filterState(estado))
        default:
            console.log("Ese comando no existe");
            break
    }
}


//traer las tareas del archivo json 
function fetchTasks(){
    
    return JSON.parse(fs.readFileSync("tareas.json"))
   
}
//pushear la nueva tarea al array del json
function addingTask(title){
    let tasks = fetchTasks()
    
    let task = {
        titulo: title,
        estado: "pendiente"
    }

    tasks.push(task)
    fs.writeFileSync("tareas.json", JSON.stringify(tasks))
}

function filterState(estado){
    let tasks = fetchTasks()
    return tasks.filter(task => task.estado === estado)
}

module.exports = menu