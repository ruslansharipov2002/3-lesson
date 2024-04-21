// 1-task

// function middlenumber(params) {
//     array = [...params]
// let result = 0 
// let num1 = 0 
// let num2 = 0
// if (array.length % 2 == 0 ) {
// num1 = (array.length / 2 )
// num2 = (array.length / 2 ) - 1
// result = (array[num1] + array[num2]) / 2 
// return result  
// }
// else{
//     result = (array.length / 2 ) - 0.5
//     return(array[result])

// }
// }

// console.log(middlenumber([1,2,3,2,5,8]))

// 2-task 

// let x = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     read: false
//   },
//   {
//     title: "Dunyoning ishlari",
//     author: "O'tkir Hoshimov",
//     read: true
//   },
//   {
//     title: "Iymon",
//     author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//     read: true
//   }
// ];

// for (let i = 0; i < x.length; i++) {
//   const book_xy = x[i];
//   if (book_xy.read) {
//     console.log(`${i + 1}. ${book_xy.author} ning ${book_xy.title} kitobi o'qilgan`);
//   } else {
//     console.log(`${i + 1}. ${book_xy.author} ning ${book_xy.title} kitobi o'qilmagan`);
//   }
// }


// 3-task 

// function lengths_array(elements) {
//    const result = {};
//    elements.forEach(element => {
//      result[element] = element.length;
//    })
//    return result;
//  }
  
//  const input_array = ["text", "world", "laptop"];
//  const output_object = lengths_array(input_array);
//  console.log(output_object)

// 4-task 

// function increasing(obj, n) {
//   let title = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       title[key] = obj[key] * n;
//     }
//   }
//   return title;
// }

// let obj = {a: 2, b: 3, c: 4};
// let n = 3;
// let result = increasing(obj, n);
// console.log(result);


// 5-task 


// function getLevel(n) {
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(Math.pow(2, i));
//   }
//   return result;
// }

// console.log(getLevel(5))



// 6-task 

// function numerator(arr) {
//   let counts = {};
//   arr.forEach(word => {
//     counts[word] = (counts[word] || 0) + 1;
//   });
//   return counts;
// }

// let title = ['dog', 'chicken',  'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let result = numerator(title);
// console.log(result);


// 7-task 

// function square_of_numbers(arr) {
//   return arr.map(num => num * num);
// }

// let input = [1, 2, 3, 4, 5];
// let output = square_of_numbers(input);
// console.log(output);


// 8-task 

// function sum_positive_total(arr) {
//   let xy = arr.filter(num => num > 0);
//   let sum = xy.reduce((acc, curr) => acc + curr, 0);
//   return sum;
// }

// let input = [1, -4, 12, 0, -3, 29, -150];
// let output = sum_positive_total(input);
// console.log(output)

// 2-usul 

// function sum_positive_total(arr) {
//   return arr.reduce((acc, num) => num > 0 ? acc + num : acc, 0)
// }

// let input = [1, -4, 12, 0, -3, 29, -150];
// let output = sum_positive_total(input);
// console.log(output)

// 9-task 


// function capital_letter(str) {
//   let initials = ''
//   let xy = true; 

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') { 
//       xy = true;
//     } else if (xy) {
//       initials += str[i].toUpperCase(); 
//       xy = false; 
//     }
//   }

//   return initials; 
// }

// let input = 'George Raymond Richard Martin';
// let output = capital_letter(input);
// console.log(output);


// 10-task 

// function x_y(params) {
//   let x = params.sort((a, b) => a.age - b.age);
  
//   let y = x[0].age;
//   let a = x[x.length - 1].age;

//   let difference = a - y;
  
//   return difference;
// }

// let params = [
//   {name: 'John', age: 13},
//   {name: 'Mark', age: 56},
//   {name: 'Rachel', age: 45},
//   {name: 'Nate', age: 67},
//   {name: 'Jeniffer', age: 65}
// ];

// let asdf = x_y(params);
// console.log(asdf);


// 11-task 

// var singleNumber = function(nums) {
//   let x_y = new Map();
//   let result = [];

//   nums.forEach(num => {
//     x_y.set(num, (x_y.get(num) || 0) + 1);
//   });

//   x_y.forEach((count, num) => {
//     if (count === 1) {
//       result.push(num);
//     }
//   });

//   return result;
// };

// let output = singleNumber([4, 1, 2, 1, 2, 9, true]);
// console.log(output)
