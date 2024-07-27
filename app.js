// 70. Berilgan objectdagi barcha string qiymatlarni toping va birlashtiring.

// function concatStrings(obj) {
//     let arr = [{value: obj, step: 1}]
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         const {value, step} = arr[i]
//         for(let key in value) {
//             if (typeof value[key] === "object") {
//                 arr.push({value: value[key], step: step + 1})
//             }else if(typeof value[key] === "string") {
//                 result.push(value[key])
             
//             }
//         }
        
//     }
//     console.log(result.join(""));
//  }
 
//  // Test case
//  const obj = {
//      a: "Hello",
//      b: {
//          c: " ",
//          d: {
//              e: "World",
//              f: {
//                  g: "!"
//              }
//          }
//      }
//  };
//  console.log(concatStrings(obj)); // Output: "Hello World!"



// 71. Berilgan stringdagi so'zlarni ularning uzunligi bo'yicha tartiblang.

// function sortByLength(s) {
//     let arr = s.split(" ")
//     arr.sort((a, b)=> a.length - b.length)
//     console.log(arr);
// }

// // Test case
// console.log(sortByLength("short longest medium")); // Output: "short medium longest"
// console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"


// 72. Berilgan objectdagi barcha raqamli qiymatlarni toping va ro'yxat (array) sifatida qaytaring.

// function findNumbers(obj) {
//     let arr = [{value: obj, step: 1}]
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         const {value, step} = arr[i] 
//         for (const key in value) {
//             if (typeof value[key] === "object") {
//                 arr.push({value: value[key], step: step + 1})
//             }else if (typeof value[key] === "number") {
//                 result.push(value[key])
//             }
//         }       
//     }   
//     console.log(result);
// }

// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {    
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(findNumbers(obj)); // Output: [1, 2, 3, 4]


// 73. Berilgan stringdagi eng uzun so'zni toping.


// function longestWord(s) {

//     let arr = s.split(" ")
//     arr.sort((a, b) => a.length - b.length)
//     return arr[arr.length-1]
//   }
  
//   // Test case
//   console.log(longestWord("Find the longest word in this sentence")); // Output: "sentence"
//   console.log(longestWord("JavaScript is awesome")); // Output: "JavaScript"


// 74. Berilgan stringdagi barcha kichik harflarni katta harflarga aylantiring va teskari tartibda qaytaring.

// function reverseUpperCase(s="") {
   
//     let uppercase = s.toUpperCase()
//     let arr = uppercase.split("").reverse().join("")
//     return arr
// }

// // Test case
// console.log(reverseUpperCase("Hello World")); // Output: "DLROW OLLEH"
// console.log(reverseUpperCase("JavaScript")); // Output: "TPIRCASAVAJ"



// 75. Berilgan stringdagi barcha raqamlarni toping va alohida arrayda qaytaring.

// function extractNumbers(s) {
//     let arr = s.split(" ")
//     let newArr = []
//     arr.forEach(val => {
//         if (!isNaN(val)) {
//             newArr.push(val)
//         }
//     });
//     console.log(newArr);
//  }
 
//  // Test case
//  console.log(extractNumbers("There are 3 apples and 4 oranges")); // Output: [3, 4]
//  console.log(extractNumbers("123 Main St.")); // Output: [123]


// 76. Berilgan objectdagi barcha qiymatlarning turlarini toping va ro'yxat (array) sifatida qaytaring.

// function valueTypes(obj) {
//     let arr = [{value: obj, step: 1}]
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         const {value, step} = arr[i]
//         for(let key in value) {
//             if (typeof value[key] === "object" && Array.isArray(value[key] && value[key] !== null)) {
//                 arr.push({value: value[key], step: step + 1})
//             }else {
//                 result.push(typeof value[key] )
//             }
//         }
//     }
//     return result
//  }
 
//  // Test case
//  const obj = {
//      a: 1,
//      b: "string",
//      c: true,
//      d: {
//          e: 3.14,
//          f: null,
//          g: {
//              h: undefined,
//              i: [1, 2, 3]
//          }
//      }
//  };
//  console.log(valueTypes(obj)); 
 // Output: ["number", "string", "boolean", "number", "object", "undefined", "object"]


//  77. Berilgan objectdagi barcha kalitlarni ularning qiymatlari bilan almashtiring. Agar qiymatlari takrorlansa, oxirgi qiymatni qabul qiling.

// function invertObject(obj) {
//     let arr = [{value: obj, step: 1}]
//     let result = {}
//     for (let i = 0; i < arr.length; i++) {
//         const {value, step} = arr[i]
//         for(let key in value) {
//             if (typeof value[key] === "object") {
//                 arr.push({value: value[key], step: step + 1})
//             }else {
//                 result[value[key]] = key
//             }
//         }
//     }
//     return result
// }

// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(invertObject(obj)); // Output: { 1: 'a', 2: 'c', 3: 'e', 4: 'g' }


// 78. Berilgan string palindrom ekanligini tekshiring. (Palindrom - o'qilganda orqa tomondan ham bir xil bo'lgan so'z yoki ibora).


// function isPalindrome(s) {
//     let str = ''
//     let replaaced = s.replaceAll(",", "")
//     let lowercase = replaaced.toLowerCase().split(" ").reverse().join("")
//     if (s == lowercase) {
//         str+= s
//     }
//     console.log(str);
// }

// // Test case
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("Hello, World!")); // Output: false



// 79. Berilgan objectdagi barcha raqamli qiymatlarning yig'indisini hisoblang.

// function sumNumbers(obj) {
//     let arr = [{value: obj, step: 1}]
//     let result = null
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         const {value, step} = arr[i]
//         for(let key in value) {
//             if (typeof value[key] === "object") {
//                 arr.push({value: value[key], step: step + 1})
//             }else if (typeof value[key] === "number") {
//                 total++
//                 result += total
//             }
//         }
//     }
//     return result
// }

// // Test case
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(sumNumbers(obj)); // Output: 10



// 80. Berilgan stringni so'zlarga ajratib, har bir so'zning bosh harfini katta qiling va qayta birlashtiring.

// function capitalizeWords(s) {
//     let arr = s.split(" ")

//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         // console.log(arr[i][0].toUpperCase());
//         // console.log(arr[i].slice(1));
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//     }
//     return arr.join(" ")
// }

// // Test case
// console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
// console.log(capitalizeWords("this is a test")); // Output: "This Is A Test"
