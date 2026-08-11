const exerciseTimeMin = 30;
let message = exerciseTimeMin >= 30 ? 'Great job! You exercised for at least 30 minutes.' : 'You should try to exercise more!';
function messageOut(message) {
    console.log(message);
    
}
setTimeout(messageOut, 3000, message)
messageOut('Analyzing exercise time...111');