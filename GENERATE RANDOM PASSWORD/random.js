//  RANDOM PASSWORD GENERATOR

function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers , includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_-+="
    let allowedChars = ""
    let password = ""
    allowedChars += includeLowerCase ? lowerCaseChars : ""
    allowedChars += includeUpperCase ? upperCaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolChars : ""
    console.log(allowedChars);
    
    return '';
}
const passwordLength = 12
const includeLowerCase = false
const includeUpperCase = false
const includeNumbers = false
const includeSymbols = false

const password = generatePassword(passwordLength,
                                 includeLowerCase,
                                 includeUpperCase,
                                 includeNumbers,
                                 includeSymbols)


console.log(`Generated Password: ${password}`);
