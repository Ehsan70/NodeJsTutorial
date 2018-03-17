
var fs = require('fs');
var sampleFile = 'newFile.txt';


CreateFile = function (fileName) {
    console.log('Creating a file' + fileName)
    if (!fs.existsSync(fileName)){
        fs.open(fileName, 'w', function (err, file) {
            if (err) throw err;
        });
        console.log('File %s is created!', fileName);
    }else{
        console.log('File %s already exists!', fileName);
    }
}

WriteToFile = function (fileName, text) {
    fs.writeFile(fileName, text, function (err) {
        if (err) throw err;
    });
}

DeleteFile = function (fileName) {
    fs.unlink(fileName, function (err) {
        if (err) throw err;
        console.log('File %s deleted!', fileName);
    });
}

console.log('Script started');
CreateFile(sampleFile);
WriteToFile(sampleFile, 'Hello Content to be saved to file.');
DeleteFile(sampleFile);