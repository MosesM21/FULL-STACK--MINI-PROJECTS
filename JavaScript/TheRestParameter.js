// The Rest Parameter allows a function to accept an
// indefinite number of arguments as an array,
// providing a way to represent variadic functions in JavaScript.

function setPermissionLevel(permissionLevel, ...user) {
  user.forEach((name) => {
    console.log(`${name} has permission level: ${permissionLevel}`);
  });
}

setPermissionLevel("Admin", "Alice", "Bob", "Charlie");
