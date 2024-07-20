const fs = require("fs");


const readFile =()=>{
    return new Promise(resolve => {
        fs.readFile("text.txt", "utf8", (err, data)=>{
        resolve(data);
        });
    })
}

const afterFileRead =(data)=>{
    console.log(data);
}


readFile().then(afterFileRead);
