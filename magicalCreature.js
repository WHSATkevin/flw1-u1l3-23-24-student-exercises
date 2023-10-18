// Welcome to the magical zoo! Your task is to create and manage a list of magical creatures. Let's have some fun!

// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
let creatureName = "Hydra";


// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
let creatureDescription = "Rude"

// 3. Do you believe that this creature is friendly to humans? 
// Declare a variable named 'isFriendly' and assign it a boolean value.
let isFriendly = false;


// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
// Hint: Use Math.floor() to round a number up.
// Hint: Use Math.random() for generating random numbers.
let randomNumber = Math.random()
let maxAge = 60;
let randomAge = Math.floor(maxAge * randomNumber) + 1
console.log(randomAge)
// 5. Determine if the visitor is allowed to see the creature.
// Declare a variable named 'canVisit' and assign it an expression to see 
// if the visitorAge variable is greater than 15.
// Hint: use this resource if you need support: https://www.w3schools.com/js/js_booleans.asp 
let isallowedtoVisit = 15<randomAge;
console.log(isallowedtoVisit)

// 6. Combine all the information into a summary.
// Declare a variable named 'zooSummary' and combine all the above information using concatenation.
let zooSummary = " The " + creatureName + " It is a "+creatureDescription + " creature tha does not take a liking to people." + " does it take a liking to people. " + isFriendly + " if you would like to visit the hydra you must be between 15 and 60 "+ " and you are "+ randomAge +", "+ isallowedtoVisit+ " You are elligable to visit the Hydra, have fun! "

console.log(zooSummary)
// 7. Print the summary using console.log()



// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. 
//    Repeat Tasks 1-6 for each creature, then combine all summaries into a single variable 'allZooSummaries'.
// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.

