// const helloFriend = require('gsf-say-hello')

// const param = process.argv[2];

// console.log(param)

// if(param == 666)
// {
//     console.log("production mode")
// }
// else if(param % 2)
// {
//     console.log(helloFriend.helloDoge())
// }
// else
// {
//     console.log(helloFriend.helloDolphin())
// }

const virsh = "Здесь лапы у елей дрожат на весу, \n\
Здесь птицы щебечут тревожно. \n\
Живешь в заколдованном диком лесу, \n\
Откуда уйти невозможно.\n\
Пусть черемухи сохнут бельем на ветру,\n\
Пусть дождем опадают сирени,\n\
Все равно я отсюда тебя заберу\n\
Во дворец, где играют свирели.\n\
\n\
Твой мир колдунами на тысячи лет\n\
Укрыт от меня и от света.\n\
И думаешь ты, что прекраснее нет,\n\
Чем лес заколдованный этот.\n\
Пусть на листьях не будет росы поутру,\n\
Пусть луна с небом пасмурным в ссоре,\n\
Все равно я отсюда тебя заберу\n\
В светлый терем с балконом на море.\n\
\n\
В какой день недели, в котором часу\n\
Ты выйдешь ко мне осторожно?..\n\
Когда я тебя на руках унесу\n\
Туда, где найти невозможно?..\n\
\n\
Украду, если кража тебе по душе, -\n\
Зря ли я столько сил разбазарил?\n\
Соглашайся хотя бы на рай в шалаше,\n\
Если терем с дворцoм кто-то занял!"

const fs = require('fs');
const path = require('path');

function createFiftyFiles(str) {
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
}

function deleteFiles(directoryPath) {
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
}

function appendFiles(directoryPath) {
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
}

function readDirectory(directoryPath) {
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
// 1 task

//createFiftyFiles(virsh);

// 2 task

const directoryPath = './fs_test_directory/output_folder';
 deleteFiles(directoryPath);

//3 task 

//appendFiles(directoryPath)

// 4 task

readDirectory(directoryPath);
