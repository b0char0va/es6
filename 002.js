//find if number is even using n-2 with recursion

function evenOdd(num){

    if(num===0){
        return true;
    }else if(num===1){
        return false;
    }else{
        num=Math.abs(num)-2;
        return evenOdd(num);
    }
}

console.log(evenOdd(24));