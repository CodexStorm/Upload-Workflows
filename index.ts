import fs from 'fs/promises'
import path from 'path'
import z from 'zod'

class ApiManagerMock {
    get(id: number){    
        return id
    }
}


async function main() {

    const [,,directoryPath] = process.argv;

    console.log(directoryPath);
    const files = await fs.readdir(path.resolve("..", directoryPath))
    console.log(files)
    //listing all files using forEach
    //var data = await Promise.all(files.map((file) => getWorkFlowDetails(path.resolve("..",directoryPath,file))))

    //console.log(JSON.stringify(data))

}


async function getWorkFlowDetails(filePath){
    const {default : workflowCreator} = await import(filePath)
    
    let workflow : any 
    const createWorkflow = (data) => {
        workflow = data
    }

    const apiManager = new ApiManagerMock()

    workflowCreator(createWorkflow,z,apiManager)

    const workflowName = workflow.form.title 
    const masterApis = Object.values(workflow.apis)
    const workflowScript = fs.readFile(filePath, 'utf-8')


    return {
        workflowName,
        masterApis,
        workflowScript
    }

}


main()