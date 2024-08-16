//QUESTION 1

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const square_num = numbers.map((number) =>{
//     return number ** 2;
// }) 

// console.log(square_num);



//QUESTION 2

// const grade_calculator = (marks) => {
//     let grade = marks >= 90 ? "A" : (marks >= 80 ? "B" : (marks >= 70 ? "C" : (marks >= 60? "D" : (marks >= 50 ? "E" : "F") )));
//     return grade;
// }

// console.log(grade_calculator(94));
// console.log(grade_calculator(86));
// console.log(grade_calculator(79));
// console.log(grade_calculator(62));
// console.log(grade_calculator(57));
// console.log(grade_calculator(42));4



//QUESTION 3

// const car = {
//     company : "Toyota",
//     model : "Innova",
//     year : 2018
// }
// const {company , model , year} = car;
// console.log(car);

// const change_year = (newyear) => {
//     car.year = newyear;
//     return car
// }
// console.log(change_year(2020));

// console.log(`This ${car.model} model, is of the year ${car.year} `);



// QUESTION 4

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

// const prime_nums = numbers.filter((number) =>{
//     if (number <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false;
//     }
//     return true;
// });
  
// console.log(prime_nums)



// QUESTION 5

// these are high order functions we can use to perform operations on arrays
// ---> map function is used to create a new array by applying a certain function on each element of the array
// ---> filter function filters through each of the elements in a array based on a given condition and then returns a new array with the filtered elements (those which returned true on the condition)
// ---> reduce function combines all elements of an array into a single element using a function



//QUESTION 6

// const fetchData = async () => {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
        
//         console.log(data);
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// };
// fetchData();



//QUESTION 7

// const person = {
//     name: "Ashwath Soni",
//     address: {
//         street: "unknown street",
//         city: "Some city",
//         country: "imagination"
//     },
//     contact: {
//         email: "ashwathsoni005@gmail.com",
//         phone: "7009023965"
//     }
// };

// const phoneNumber = person.contact?.phone;

// console.log(phoneNumber);
