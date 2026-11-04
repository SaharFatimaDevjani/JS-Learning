// 01: Strings, numbers, dates


// capitalize("hello world from karachi") → "Hello World From Karachi"
function capitalize(stringToCapitalize){
    let str = stringToCapitalize
    let breakStr = str.split(" ")
    str = breakStr.map((word)=>word[0].toUpperCase()+word.slice(1))
    let final = str.join(" ")
    return final
}
console.log(capitalize("hello world from karachi"))


// countVowels("JavaScript") → 3
function countVowels(stringToCountVowels){
    let str = stringToCountVowels.toLowerCase()
    let count = 0
    for(let i=0; i<str.length; i++){
        if ("aeiou".includes(str[i])){
            count++
        }
    }
    return count
}
console.log(countVowels("JavaScript"))


// reverseString("sahar") → "rahas"
function reverseString(stringReverse){
    let str = stringReverse
    str = str.split("")
    let reverseString = str.reverse()
    reverseString = reverseString.join("")
    return reverseString
}
console.log(reverseString("sahar"))


// isPalindrome("nurses run") → true (ignore spaces and capital letters)
function isPalindrome(stringPalindrome){
    let str = stringPalindrome
    str = str.trim().split(" ").join("").toLowerCase()
    revstr = ((str.split("")).reverse()).join("")
    return str == revstr
}
console.log(isPalindrome("nurses run"))


// formatPrice(1000000) → "Rs 10,00,000.00"
function formatPrice(price){
    let priceFormatted = price.toLocaleString("eng-IN",{minimumFractionDigits:2})
    return `Rs ${priceFormatted}`
}
console.log(formatPrice(1000000))


// randomBetween(1, 6) → a random whole number from 1 to 6
function randomBetween(min,max){
    return Math.floor((Math.random()*(max-min+1))+min)
}
console.log(randomBetween(1,6))


// daysBetween("2026-11-03", "2026-12-31") → 58
function daysBetween(startDate, endDate){
    let start = new Date(startDate)
    let end = new Date(endDate)
    let difference = end-start
    difference = (difference/1000)/(60*60*24)
    return difference
}
console.log(daysBetween("2026-11-03", "2026-12-31"))


// getDayName("2026-11-03") → "Tuesday"
function getDayName(dateGiven){
    let date = dateGiven
    date = new Date(date)
    let day = date.getDay()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[day]
}
console.log(getDayName("2026-11-03"))
