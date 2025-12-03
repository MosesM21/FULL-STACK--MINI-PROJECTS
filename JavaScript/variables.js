// let person = {
//     name: 'Moses Mwale',
//     age: 25,
//     country: 'Zambia'
// }

// let largeCountries = [
//     'China',
//     'USA',
//     'India',
//     'Indonesia',
//     'Pakistan'
// ]

// function logData() {
//     let message = person.name + " is " + person.age + " years old and lives in " + person.country;
//     console.log(message);
// }

// function largeCountry() {
//     largeCountries.shift('Ghana')
//     largeCountries.unshift

//     for (let i = 0; i < largeCountries.length; i++) {
//         console.log('- ' + largeCountries[i])
//     }
// }

// largeCountry()
// logData()


// TERNARY OPERATOR
// const playerGuess = 3
// const correctNumber = 5
// let message = ''

// message = playerGuess === correctNumber ? 'You win!'
//     : playerGuess > correctNumber ? 'Too high!'
//         : 'Too low!'

// console.log(message)

// SWITCH STATEMENT
// function selectItem(item) {
//     let price = 0

//     switch (item) {
//         case 'apple':
//             price = 0.5
//             break
//         case 'banana':
//             price = 0.3
//             break
//         case 'orange':
//             price = 0.7
//             break
//         default:
//             return `Sorry we don't have ${item}`
//     }
//     return `You selected a ${item}. Price: $${price}`
// }

// console.log(selectItem('banan'))

// OBJECT DESTRUCTURING
// const dreamHoliday = {
//     destination: 'Dubai',
//     duration: '2 weeks',
//     budget: 2000,
//     activities: ['surfing', 'hiking', 'snorkeling']
// }

// const { destination, duration, budget, activities } = dreamHoliday

// let tripSummary = `My dream holiday is to go to ${destination} for ${duration}. I have a budget of $${budget} and I plan to do activities like ${activities.join(', ')}.`

// console.log(tripSummary)


//
function logAnswer(answer, points) {
    console.log(`The answer is ${answer} of cours!. If you got the right answer, give yourself ${points} points!`);
}

console.log('What is the answer to life, the universe and everything?');
setTimeout(logAnswer, 2000, "love", 42);