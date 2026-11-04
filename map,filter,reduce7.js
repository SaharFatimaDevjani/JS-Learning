// 07: map / filter / reduce

// Use this data:

// js
// const rooms = [
//   { no: 101, type: "single", price: 5000,  booked: true  },
//   { no: 102, type: "double", price: 8000,  booked: false },
//   { no: 103, type: "suite",  price: 15000, booked: true  },
//   { no: 104, type: "single", price: 5000,  booked: false },
//   { no: 105, type: "double", price: 8500,  booked: true  },
// ];
// All room numbers → [101, 102, 103, 104, 105] (map)
// Numbers of available rooms → [102, 104] (filter + map)
// Total price of booked rooms → 28500 (filter + reduce)
// Count by type → { single: 2, double: 2, suite: 1 } (reduce)
// Most expensive room → room 103 (reduce)
// Average price → 8300
// Apply a 10% discount, returning a new array without changing rooms
// Write your own myMap(arr, fn) without using .map