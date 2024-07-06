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
    for(let i = 0; i <= 1000; i++){
        console.log(i);
    }
}
cont1000();