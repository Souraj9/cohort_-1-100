import fs from "fs";


const readFile =()=>{
    return new Promise(resolve => {
       fs.readFile("text.txt", "utf8", (err, data)=>{
        setTimeout(resolve(data),1000);
        });
    })
}

const afterFileRead =(data)=>{
    console.log(data);
}


readFile().then(afterFileRead);
