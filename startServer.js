const process = require('child_process') 

function execute(command){
    process.exec(command,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
}

execute('python -m http.server 8000 --directory ./dist')