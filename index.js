const core = require('@actions/core');
const path = require('path');
const fs = require('fs');


try {
    const directoryPath = core.getInput('directoryPath');
    console.log(directoryPath);
    
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        var data = []
        //listing all files using forEach
        files.forEach(function (file) {
            const contents = readFileSync(file, 'utf-8');
            data.push({
                file,
                contents
            })
        });
    });

    core.setOutput("listOfScripts", data);

} catch (error) {
    core.setFailed(error.message);
}