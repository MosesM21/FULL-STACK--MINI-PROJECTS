//Error Constructor: Gives us the ability to create custom error
// types in JavaScript.

function chechUserName(userName) {
    if (userName) {
        console.log(userName);
    } else {
        console.log("i execute");
        throw new Error('User name is required');
    }
}

chechUserName('Moses');