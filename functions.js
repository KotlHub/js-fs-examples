const fs = require('fs');
const path = require('path');

module.exports = {
    createFiftyFiles: function(str) {
        const folderPath = './fs_test_directory/output_folder';
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
        }
      
        const words = str.split(' ');
        for (let i = 0; i < 50; i++) {
          const word = words[i];
          const filePath = path.join(folderPath, `${i + 1}.txt`);
          
          fs.writeFileSync(filePath, word);
        }
        console.log("files created");
    },

    deleteFiles: function(directoryPath) {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
              console.error('reading err:', err);
              return;
            }
        
            files.forEach((file) => {
              const filePath = path.join(directoryPath, file);
        
              fs.stat(filePath, (err, stats) => {
                if (err) {
                  console.error('stats err:', err);
                  return;
                }
        
                if (stats.isFile() && path.extname(file) !== '.html') {
                  fs.unlink(filePath, (err) => {
                    if (err) {
                      console.error('delete err:', err);
                    } else {
                      console.log('file', filePath, 'deleted');
                    }
                  });
                }
              });
            });
        });
    },

    appendFiles: function(directoryPath)
    {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
              console.error('reading err:', err);
              return;
            }
        
            files.forEach((file) => {
              const filePath = path.join(directoryPath, file);
              const rand = Math.floor(Math.random() * 50);
              
              fs.writeFileSync(filePath, rand.toString());
              
            });
          });
    },

    appendFiles: function(directoryPath) 
    {
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
              console.error('reading err:', err);
              return;
            }
        
            files.forEach((file) => {
              const filePath = path.join(directoryPath, file);
              const rand = Math.floor(Math.random() * 50);
              
              fs.writeFileSync(filePath, rand.toString());
              
            });
          });
    },

    readDirectory: function(directoryPath) 
    {
        if (!fs.existsSync(directoryPath)) {
            console.log("bruh");
            return 0;
          }
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
              console.error('reading err:', err);
              return;
            }
            console.log(files);
        });
    }
  };