const caesar = (string, shift) => {
    return string
    .split('')
    .map(char => shiftChar(char, shift))
    .join('');

}

//helper functions 

const codeSet = code => (code < 97 ? 65: 97);   // switches uppercase to lowercase code and vice versa  

const mod = (n, m) => (n % m + m) % m; 

const shiftChar = (char, shift) => {
    const code = char.charCodeAt(); //The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
    if ((code >= 65 && code <= 90) || (code >= 97 <= 122)) {
        return String.fromCharCode(mod(code + shift - codeSet(code), 26) + codeSet(code));
    } 

    return char;
}

module.exports = caesar;