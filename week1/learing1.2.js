const firstName = "Souraj";
const lastName = "Ghosh";
const gender = "male";

function greetBaseOnGender(gender) {
    if (gender === "male") {
        return console.log(`He is ${firstName} ${lastName}`);
        
    }
    else{
        
        return console.log(`She is ${firstName} ${lastName}`);
        
    }
}

greetBaseOnGender(gender);

function cont1000() {
    let total = 0;
    for(let i = 0; i <= 1000; i++){
        total += i;
    }
    return console.log(`Total number is : ${total}`);
}
cont1000();

function sumOfTwoNumbers(num1,num2, calback){
 let sum = num1 + num2;
 calback(sum);
}

function sumData(data) {
    return console.log(`Sum is : ${data}`);
}

sumOfTwoNumbers(13,17,sumData);


function timer(count){
    let countnumber = parseInt(count);

const setTime = setInterval(()=>{
    countnumber--;
const  actualTime = countnumber < 10 ? `0${countnumber}` : countnumber;
console.log(actualTime);
if(countnumber<=0){
    clearTimeout(setTime);
}

},1000)
}
timer(5)