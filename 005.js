//reverse array and reverse array in place
function reverseArray(arr){
    let newArr=[];

    for(let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;

}
console.log(reverseArray(["dog", "cat", "rabbit", "rat", "raccoon"]));

function reverseInPlace(arr) {
    let iterations = Math.floor(arr.length / 2);
    let temp = "";
    let j=arr.length-1;
    for (let i = 0; i < iterations; i++) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    return arr;
}

console.log(reverseInPlace(["dog", "cat", "rabbit", "rat", "raccoon"]));