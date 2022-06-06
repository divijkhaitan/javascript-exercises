const sumAll = function(a,l) {
    if(typeof(a)!="number")
    return "ERROR"
    if(typeof(l)!="number")
    return "ERROR"
    if(a<0||l<0)
    {
        return "ERROR"
    }
    let numbers=Math.max(a,l)-Math.min(a,l)
    let total=(a+l)*(numbers+1)/2
    return total
};

// Do not edit below this line
module.exports = sumAll;
