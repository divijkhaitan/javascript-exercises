const fibonacci = function(num) {
    num=parseInt(num)
    if(num<0)
    {
        return "OOPS"
    }
    let fibn1=1
    let fibn2=1
    let temp=0
    for (let i=2;i<num;i++)
    {
        temp=fibn1+fibn2
        fibn1=fibn2
        fibn2=temp
    }
    return fibn2
};

// Do not edit below this line
module.exports = fibonacci;
