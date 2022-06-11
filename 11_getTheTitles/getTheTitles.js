const getTheTitles = function(books) {
    const arr=[]
    books.forEach(book=>arr.push(book.title))
    return arr
};

// Do not edit below this line
module.exports = getTheTitles;
