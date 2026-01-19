setTimeout(() => {
    console.log("hey");
    let start = 0
    let end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
}, 3000)