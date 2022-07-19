import core from '@actions/core'
import fs from 'fs/promises'
import path from 'path'



async function main() {

    const directoryPath = core.getInput('directoryPath');
    console.log(directoryPath);
    console.log(process.argv)
    // const files = await fs.readdir(path.resolve("..", directoryPath))

    // //listing all files using forEach
    // var data = await Promise.all(files.map((file) => fs.readFile(file, 'utf-8')))

    // console.log(JSON.stringify(data))

}

main()