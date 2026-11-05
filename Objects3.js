// 03: Objects
// countChars("banana") → { b: 1, a: 3, n: 2 }
function countChars(str){
    letterCount = {}
    for(let i = 0; i<str.length;i++){
        if(str[i] in letterCount){
            letterCount[str[i]]+=1
        }else{
            letterCount[str[i]] = 1
        }
    }
    return letterCount
}
console.log(countChars("banana"))


// invertObject({ a: "x", b: "y" }) → { x: "a", y: "b" }
function invertObject(obj){
    let temp = {}
    for(let entry of Object.entries(obj)){
        let [key,value] = entry
        temp[value] = key
    }
    return temp
}
console.log(invertObject({ a: "x", b: "y" }))


// updateUser(user, { city: "Berlin" }) returns a new object; the original stays unchanged
function updateUser(user, obj){
    return {...user,...obj}
}
console.log(updateUser({ name: "Sahar", city: "Karachi" } , { city: "Berlin", age: 24 }))


// getCity({}) → "Unknown", using ?. and ?? only (no if/else)
function getCity(obj){
    return obj.address?.city??"unknown"
    // or
    // return obj.address ? obj.address.city : "unknown"
}
console.log(getCity({}))

// Ternary: obj.address exists, so it returns obj.address.city, which is undefined ❌
// ?. + ??: obj.address?.city gives undefined, then ?? replaces it with "Unknown" ✅


// formatUser({ name: "Ali", age: 25, address: { city: "Lahore" } }) → "Ali, 25, Lahore", using destructuring in the parameter
function formatUser(userObj){
    let {name,age,address} = userObj
    return [name,age,address["city"]]
}
console.log(formatUser({ name: "Ali", age: 25, address: { city: "Lahore" } }))


// countSkills('{"skills":["js","react","node"]}') → 3 (the input is a JSON string)
function countSkills(jsonStr){
    return ((JSON.parse(jsonStr)).skills).length
}
console.log(countSkills('{"skills":["js","react","node","java"]}'))


// deepCopy(obj): changing a nested value in the copy must not change the original
function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj))
    // or after 2022
    // return structuredClone(obj)
}

let original = {name:"sahar",city:"karachi"}
let copy = deepCopy(original)
copy.city = "Berlin"
console.log(original.city)
console.log(copy.city)