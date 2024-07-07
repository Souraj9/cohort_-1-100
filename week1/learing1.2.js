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

function sumOfTwoNumbers(num1,num2){
return console.log(`Sum is : ${num1 + num2}`);
}

sumOfTwoNumbers(13,17);
