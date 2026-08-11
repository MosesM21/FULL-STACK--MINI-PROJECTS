
// ARRAYS
// let greeting = [
//     'hello',
//     ' how are you',
//     ' nice to meet you too'
// ]

// let greetEl = document.querySelector('#greeting-el')

// for (let i = 0; i <= greeting.length; i++) {
//     greetEl.textContent += greeting[i] + ", "
//     }


// FUNCTIONS AND ARRAYS
// let myCourses = [
//     'Learn CSS Animations',
//     'UI Design Fundamentals',
//     'Intro to Clean Code',
//     'JavaScript for Beginners'
// ]


// function renderCourses(courses) {
//     for (let i = 0; i < courses.length; i++) {
//         console.log(courses[i]);
//     }
// }
// renderCourses(myCourses);


// STORING DATA IN LOCAL STORAGE
// let value = "Moses Mwale"
// localStorage.setItem("name", JSON.stringify(value))
// let name = localStorage.getItem("name")
// console.log(JSON.parse(name));


// EVENT LISTENERS AND ARRAY OF OBJECTS
// let logNameBtn = document.querySelector('#logName-btn')
// let data = [
//     {
//         name: 'Moses Mwale',
//         score: 100
//     },
//     {
//         name: 'John Doe',
//         score: 80
//     },
//     {
//         name: 'Jane Smith',
//         score: 90
//     }
// ]

// logNameBtn.addEventListener('click', function () {
//     for (let i = 0; i < data.length; i++)
//     console.log(data[i].name);
// })


// GENERATE SENTENCE
// const countries = [
//     {
//         largestCoubntry: 'China, USA, India, Indonesia, Pakistan',
//     }
// ]

// const fruits = [
//     {
//         bestFruits: 'Banana, Orange, Apple',
//     }
// ]

// function generateSentence(desc, arr) {
//     if (desc === 'largest countries') {
//         for (let i = 0; i < countries.length; i++) {
//             let sentence = `The ${desc} are ${countries[i].largestCoubntry}`
//             console.log(sentence);
//         }
//     } else if (desc === 'best fruits') {
//         for (let i = 0; i < fruits.length; i++) {
//             let sentence = `The ${desc} are ${fruits.join(', ')}`
//             console.log(sentence);
//         }
//     }
// }
// generateSentence('largest countries', countries)
// generateSentence('best fruits', fruits)


// RENDER IMAGES FROM ARRAY OF OBJECTS
const images = [
    'img/Screenshot%202025-09-19%20011718.png',
    'img/Screenshot 2025-09-19 012642.png'
]

function renderImages() {
    let imagesContainer = document.getElementById('img-container')
    for (let i = 0; i < images.length; i++) {
        imagesContainer.innerHTML += `
            <img src="${images[i]}" alt="Image ${i + 1}">
        `
    }
}

renderImages()