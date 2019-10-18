function capitalize(word) {
    if (typeof word != 'string') {return 'no string provided'}
    let newWord = word.charAt(0).toUpperCase() + word.slice(1)
    return newWord
}

module.exports = capitalize