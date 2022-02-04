// --- Task 1 Variable Array ---

const countries = ["Iceland", "England", "Spain"];

console.log(countries);

// --- Task 1 Variable Array - Push ---

countries.push("Denmark")

console.log(countries);

// --- Task 1 Variable Array - Update ---

countries[3] = "Norway"

console.log(countries);

// --- Task 2 Multiply ---

let multiply = 3 * 5

console.log(multiply);

// --- Task 2 Multiply Prompt and Alert ---

let howHappy = prompt ("Hello, how are you feeling on the scale of 1 to 10?")

console.log(howHappy);

alert("On the 'Happiness scale', that makes you " + howHappy * 10 + "% happy today.");

// --- Task 3 Boolean ---

let howFeeling = prompt ("Please tell me how you're feeling on the scale of 1 to 10")

if(howFeeling <= 4) {
    //under 5 then you're sad.
    console.log("You're a bit sad today.");  
}else{
    //over 5 then you're happy
    console.log("You're happy today.");
} 

