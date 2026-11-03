// 01: Strings, numbers, dates
// capitalize("hello world from karachi") → "Hello World From Karachi"

let str = "hello world from karachi"
let breakStr = str.split(" ")
str = breakStr.map((word)=>word[0].toUpperCase()+word.slice(1))
let final = str.join(" ")
console.log(final)

// countVowels("JavaScript") → 3
str = "JavaScript"
let count = 0
for(let i=0; i<str.length; i++){
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
        count++
    }
}
console.log(count)
 


// reverseString("sahar") → "rahas"
str = "sahar"
str = str.split("")
let reverseString = str.reverse()
reverseString = reverseString.join("")
console.log(reverseString)

// isPalindrome("nurses run") → true (ignore spaces and capital letters)
// formatPrice(1000000) → "Rs 10,00,000.00"
// randomBetween(1, 6) → a random whole number from 1 to 6
// daysBetween("2026-11-03", "2026-12-31") → 58
// getDayName("2026-11-03") → "Tuesday"
