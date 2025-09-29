async function wait(ms) {
    console.log(`start await ${ms} ms`);
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkTimeout(fn, timeout) {
    const start = Date.now();
    console.log("Start: ", start);
    const fc1 = wait(1000);
    const fc2 = wait(2000);

    await fc2;
    await fc1;
    const end = Date.now();
    console.log("End: ", end);
    console.log("Time start: ", end - start);
    return;
}

// checkTimeout();

function argument(name, ...args) {
    console.log(name);
    console.log(args);
}
// argument("phuong", 1, 2, "3", true, ["1"]);

var tempreature = 20;
var isHost = tempreature > 40 ? "yes" : "no";
console.log(isHost);
const res = [1, 2, 3].map((e) => e * 2);
console.log(res);
