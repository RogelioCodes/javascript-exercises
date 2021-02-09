const getTheTitles = function(array) {
    console.log(array.map(book => book.author))

    return array.map(book => book.title)
}

module.exports = getTheTitles;
