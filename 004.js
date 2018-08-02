// sum of range of numbers and how much to increment

function range(num1, num2, step = 1) {
    let arr = [];

    if (step < 0) {
        for (let i = num1; i >= num2; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = num1; i <= num2; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

function sum(arr) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {

        res += arr[i];
    }
    return res;
}


console.log(sum(range(5, 2, -1)));  //returns 14, sum of [5,4,3,2]
console.log(sum(range(1, 10, 2))); //returns 25, sum of [1,3,5,7,9]