function reverseString (string) {
    if (typeof string != 'string') {
        return 'Please provide a string to reverse'
    }
    let reversedWord = ""
    for (i=0; i <= string.length; i++) {
        reversedWord = reversedWord + string.charAt(string.length - i)
    }
    return reversedWord
}

module.exports = reverseString