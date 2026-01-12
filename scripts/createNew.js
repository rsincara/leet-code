import fs from 'fs';

const args = process.argv.slice(2);

const newTestName = args.join('');

const newFolderPath = `./tasks/${newTestName}`;

fs.mkdirSync(newFolderPath);

fs.cpSync('./starter', newFolderPath,{recursive: true});

console.log(newTestName + ' at the time:  ', new Date().toTimeString())