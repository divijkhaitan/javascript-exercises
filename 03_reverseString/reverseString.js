const reverseString = function(inputstring) {
    const array=inputstring.split("");
    let result=""
    for (i=array.length-1;i>=0;i--)
    {
        result+=array[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
