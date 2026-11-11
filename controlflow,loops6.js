// 06: Control flow & loops
// grade(score): 90+ “A”, 80+ “B”, 70+ “C”, 60+ “D”, below 60 “F”; invalid input gives “Invalid”
function grade(score){
    if(score >= 90){
        return "A"
    }else if(score >= 80){
        return "B"
    }else if(score >= 70){
        return "C"
    }else if(score >= 60){
        return "D"
    }else if(score < 60){
        return "F"
    }else{
        return "Invalid"
    }
}
console.log(grade(83))

// dayType("SUNDAY") → "Weekend", using switch, and it must work with any capital letters
let dayType = (day) => {
    day = day.toLowerCase()
    switch(day){
        case "sunday":
            console.log("weekend")
            break;
        case "saturday":
            console.log("weekend")
            break;
        case "monday":
            console.log("weekday")
            break;
        case "tuesday":
            console.log("weekday")
            break;
        case "wednesday":
            console.log("weekday")
            break;
        case "thursday":
            console.log("weekday")
            break;
        case "friday":
            console.log("weekday")
            break;
        default:
            console.log("wrong input")
    }

}
dayType("sunday")



// fizzBuzz(15) returns an array: multiples of 3 → “Fizz”, of 5 → “Buzz”, of both → “FizzBuzz”
function fizzBuzz(num){
    for (let i = 1; i<= num; i++){
        if(i % 3 == 0){
            if(i % 5 == 0){
                console.log("FizzBuzz")
            }else{
                console.log("Fizz")
            }
        }else if(i % 5 == 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(15)



// firstNegative([3,7,-2,5]) → -2 (use break)
function firstNegative(arr){
    let negative = null;
    for(let num of arr){
        if(num < 0){
            negative = num
            break;
        }
    }
    return negative
}
console.log(firstNegative([3,7,-2,5]))


// sumSkipThrees(10) → 37 (use continue)
function sumSkipThrees(num){
    let sum = 0
    for (let i = 1; i<= num; i++){
        if(i % 3 == 0){
            continue;
        }else{
            sum+=i
        }
    }
    return sum;
}
console.log(sumSkipThrees(10))



// countDigits(12345) → 5, countDigits(0) → 1 (use do-while, no converting to a string)
function countDigits(num){
    let count = 0
    do{
        num = Math.floor(num/10)
        count++
    }while(num != 0) 
    return count
}
console.log(countDigits(12345333))


// makeReport({ Ali: 80, Sara: 95 }) → ["Ali: 80", "Sara: 95"]
function makeReport(obj){
    let objArr = []
    let tempStr = ""
    for(let key in obj){
        tempStr = String(key)+" : "+obj[key]
        objArr.push(tempStr)
        tempStr = ""
    }

    return objArr
}
console.log(makeReport({ Ali: 80, Sara: 95 }))