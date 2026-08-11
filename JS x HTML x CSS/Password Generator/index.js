const Characters = [
    '!', '"', '#', '$', '%',  '&', "'", '(', ')', '*', '+',
    ',', '-', '.', '/', '0',  '1', '2', '3', '4', '5', '6',
    '7', '8', '9', ':', ';',  '<', '=', '>', '?', '@', 'A',
    'B', 'C', 'D', 'E', 'F',  'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q',  'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b',
    'c', 'd', 'e', 'f', 'g',  'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', '{', '|', '}',  '~'
]


let passwordLength = 15;
let resultEl1 = document.getElementById('result1');
resultEl1.textContent = "";

let resultEl2 = document.getElementById('result2');
resultEl2.textContent = "";

function generatePassword() {
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex1 = Math.floor(Math.random() * Characters.length);
        let randomIndex2 = Math.floor(Math.random() * Characters.length);
        resultEl1.textContent += Characters[randomIndex1];
        resultEl2.textContent += Characters[randomIndex2];
    }
}

resultEl1.addEventListener("click", function() {
    navigator.clipboard.writeText(resultEl1.textContent);
    alert("Password 1 copied to clipboard!");
});

resultEl2.addEventListener("click", function() {
    navigator.clipboard.writeText(resultEl2.textContent);
    alert("Password 2 copied to clipboard!");
});
