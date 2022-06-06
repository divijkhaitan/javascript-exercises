const removeFromArray = function(inputarr,...rm) {
    let removed=false
    let count=0
    let partial=[]
    for (; inputarr.length>0;)
    {
        if(rm.includes(inputarr[inputarr.length-1]))
        {
            inputarr.pop();
        }
        else
        {
            partial.push(inputarr.pop())
        }

    }
    return partial.reverse()
};

// Do not edit below this line
module.exports = removeFromArray;
