const leapYears = function(years) {
    let leap=false
    if(typeof(years)!="number")
    return "ERROR"
    if(years<0)
    return "ERROR"
    if (years%4==0)
    {
        leap=true
    }
    if (years%100==0)
    {
        leap=false
    }
    if (years%400==0)
    {
        leap=true
    }
    return leap
};

// Do not edit below this line
module.exports = leapYears;
