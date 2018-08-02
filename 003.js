// count specific characters in a string
function countChar(str, char) {
    str = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;

}

console.log(countChar("That is a big bean bag that big Bunny has", "t"));