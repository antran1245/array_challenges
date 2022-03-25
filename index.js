//Part 1 Always Hungry
function alwaysHungry(arr) {
    // your code here 
    let hungry = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            hungry = false;
            console.log("yummy");
        }
    }
}
console.log("Part 1 Always Hungry");
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// Part 2 High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log("Part 2 High Pass Filter");
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Part 3 Better than average
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum = sum / arr.length;
    var count = 0
    // count how many values are greated than the average
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > sum) {
            count++;
        }
    }
    return count;
}
console.log("Part 3 Better than average");
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Part 4 Array Reverse
function reverse(arr) {
    // your code here
    if (arr.length > 1) {
        for (let i = 0; i < arr.length / 2; i++) {
            let temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
    }
    return arr;
}

console.log("Part 4 Array Reverse");
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Part 5 Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for(let i = 2; i < n; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr;
}
console.log("Part 5 Fibonacci Array")
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]