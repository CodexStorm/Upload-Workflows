import core from '@actions/core'
import fs from 'fs/promises'
import path from 'path'



async function main() {

    const [,,directoryPath] = process.argv;

    console.log(directoryPath);
    const files = await fs.readdir(path.resolve("..", directoryPath))

    //listing all files using forEach
    var data = await Promise.all(files.map((file) => fs.readFile(path.resolve("..",directoryPath,file), 'utf-8')))

    console.log(JSON.stringify(data))

}

main()