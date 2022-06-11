const findTheOldest = function(arr) {
    const arr1=arr.map(person=>(person.yearOfDeath||2022)-(person.yearOfBirth))
    let max=arr1[0]
    let oldest=arr[0].name
    for (let i=0;i<arr1.length;i++)
    {
        if(arr1[i]>max)
        {
            max=arr1[i]
            oldest=arr[i].name
        }
    }
    return oldest
};
// Do not edit below this line
module.exports = findTheOldest;
