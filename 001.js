//count the number of occurrences of all the words in a string and print top 20 words with count
let str = 'How such documents are actually stored depends on the file format. In plaintext files, there are two common formats. Pre-formatted text will have a newline at the end of every physical line, and two newlines at the end of a paragraph, creating a blank line. An alternative is to only put newlines at the end of each paragraph, and leave word wrapping up to the application that displays or processes the text.';
let obj = {};
let array = str.toLowerCase().replace(/[&\/\\#,+()$~%.'“:*?<>{}]/g, "").split(" ");
let sortArr = [];
let sortObj = {};

for (let i = 0; i < array.length; i++) {      //create object with word and occurrence count
    // very nice code!
    if (!obj.hasOwnProperty(array[i])) {
        obj[array[i]] = 1;
    } else {
        obj[array[i]] = obj[array[i]] + 1;
    }
}

for (let key in obj) {                    // create an array from object
    sortArr.push([key, obj[key]]);
}
sortArr.sort(sortVal);                  //sort array

function sortVal(a, b) {                  //sort array function
    return b[1] - a[1];
}

for (let i = 0; i < 20; i++) {                //make sorted value object of 20 properties
    sortObj[sortArr[i][0]] = sortArr[i][1];
}

console.log(sortObj);


