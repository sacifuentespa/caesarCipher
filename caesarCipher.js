// program aimed to caesar cipher a string with given a string and a number to encrypt
// program aimed for English alphabet

function caesarCipher(string, key) {
    key = key % 26;
    let encryptedString = ''
    const MAX_UPPER = 90;
    const MAX_LOWER = 122;

    for (let i = 0; i < string.length; i++) {

        if (isUpperCase(string[i])) {
            encryptedString = encryptedString + shiftCharacter(string[i], key, MAX_UPPER)
        }
        else if (isLowerCase(string[i])) {
            encryptedString = encryptedString + shiftCharacter(string[i], key, MAX_LOWER)
        }
        else {
            encryptedString = encryptedString + string[i];
        }
    }
    return encryptedString
}

function shiftCharacter(char, key, max) {
    let asciiCode = char.charCodeAt(0) + key;
    if (asciiCode > max) {
        asciiCode = asciiCode - 26;
    }
    return String.fromCharCode(asciiCode);
}

function isUpperCase(char) {
    return char >= 'A' && char <= 'Z';
}

function isLowerCase(char) {
    return char >= 'a' && char <= 'z';
}

module.exports = caesarCipher;