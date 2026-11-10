// 05: this, arrow functions, IIFE
// Rewrite function square(n) { return n * n } as a one-line arrow function
let square = (n)=>(n*n)
console.log(square(3))


// makeUser("Sahar") → { name: "Sahar", active: true } as a one-line arrow function (watch out for the { } trap)
let makeUser = (name) =>  ({name: name , active: true})

console.log(makeUser("Sahar"))

// Fix this so it returns "Hi, I am Sahar":// js
   const person = {
     name: "Sahar", 
     greet: function greet(){return `Hi, I am ${this.name}`}
    };
    console.log(person.greet());


// Use an IIFE to calculate 1 + 2 + ... + 100 (= 5050)

(function total(){
    let total = 0
    for(let i = 1; i<=100;i++){
        total+=i
    }
    console.log(`${total}`)
    return total
})();

