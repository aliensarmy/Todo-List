// "use strict";
// // let firstName = "Hani";
// // let lastName = "F";
// // console.log(`${firstName}${lastName}`);
// // // I'm trying to reinforce my losing javascript skill
// // document.getElementById("first").innerHTML = "Hello There,,,";
// // const yourAge = prompt("What is your age?");
// // // console.log("My age is:", yourAge);
// // document.getElementById(
// //   "first"
// // ).innerHTML = `Hello There,,, I'm ${yourAge} years old.`;

// ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // let num1 = 5;
// // num1++;
// // num1++;
// // num1++;
// // num1--;
// // num1 += 23;
// // console.log(num1);
// // console.log(num1 % 2);
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // const greeting = () => {
// //   let name = prompt("What is your name?");
// //   console.log(`Hello ${name}...!`);
// // };

// // greeting();
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // const addition = (x, y) => {
// //   let extra = x ** y;
// //   console.log(extra);
// // };

// // addition(2, 3);

// /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// // const greeting = () => {
// //   let name = "Rifat";

// //   return name;
// // };

// // const newFunction = () => {
// //   let wierd = "Hello";

// //   return wierd;
// // };

// // console.log(`${newFunction()} ${greeting()}`);

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //while loop

// // let num = 0;
// // while (num <= 100) {
// //   console.log(num);
// //   num++;
// // }

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //for loop
// // for (let i = 0; i <= 30; i++) {
// //   console.log(i);
// // }
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //Data types--->string
// // const fruit = "Banana,stawberry";
// // const moreFruits = "Jack fruit\nPineapple\nMango";
// // const mrFr = `There are many fruit
// // in the world

// // right now , all fruit is come from all the grace of almighty Allah.

// // Alhamdulillah!.`;
// // console.log(moreFruits);
// // console.log(mrFr);

// // console.log(fruit.length);
// // console.log(fruit.slice(2));
// // console.log(fruit.includes("a"));
// // console.log(fruit.indexOf("B"));
// // console.log(fruit.lastIndexOf("a"));
// // console.log(fruit.indexOf("a"));
// // console.log(fruit.toLowerCase());
// // console.log(fruit.toUpperCase());
// // console.log(fruit.replace("ana", 132));
// // console.log(fruit.repeat(3));
// // console.log(fruit.split(""));
// // console.log(fruit.split(" "));
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //array
// // let box = ["pen", "paper", "book", "mobile", "laptop"];
// // // let box = new Array("Orange", "Banana", "Mango", "Jack-fruit");
// // // for (let initial = 0; initial < 5 - 1; initial++) {
// // //   console.log(box[initial]);
// // // }

// // console.log(box);
// // console.log("to string:", box.toString());
// // console.log(box.length);
// // console.log(box.join(" - "));
// // console.log(box.pop(), box);
// // console.log(box.shift(), box);
// // console.log(box.unshift("table"), box);
// // console.log(box.push("mini-speaker"), box);
// // console.log((box[box.length] = "monitor"), box);
// // console.log((box[box.length] = "cpu"), box);

// // let fruits = ["Pineapple", "Apple", "Mango", "Kiwi", "Jack-fruit", "Banana"];

// // const collaborate = box.concat(fruits);
// // console.log(collaborate);

// // console.log(collaborate.slice(2, 5));
// // console.log(collaborate.reverse());

// // const someNumbers = [1, 3, 5, 33, 255, 23, 35, 523, 6, 244, 7];
// // someNumbers.sort();
// // console.log(someNumbers);
// // console.log(someNumbers.sort((a, b) => a - b));
// // console.log(someNumbers.sort((a, b) => b - a));

// // const fanky = [];
// // for (let i = 1; i <= 10; i++) {
// //   fanky[fanky.length] = i;
// // }
// // console.log(fanky);
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /*There are 5 falsy value in javascript:
// they are >>>
// 1.0
// 2.''
// 3.undefined
// 4.null
// 5.NaN
//  without this 5 value everything in javascript are truthy value. But remember Falsy value will works when it is in boolean condition.
//  */

// // console.log(Boolean(0)); //false
// // console.log(Boolean(undefined)); //false
// // console.log(Boolean("Jonas")); //true
// // console.log(Boolean()); //false
// // console.log(Boolean(NaN)); //false
// // console.log(Boolean("")); //false
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // const money = 0;
// // if (money) console.log(`Don't spend it all`);
// // else console.log("You should get a job");

// // let height = 1;
// // if (height) console.log("YAY! height is defined");
// // else console.log("Height is not defined");
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /*Javascript equality operator (==)loose vs (===)strict

// ==(loose)--->does type coercion
// ===(strcit)--->does not type coercion*/

// // console.log("18" == 18); //true
// // console.log("18" === 18); //false

// /**By using Prompt function for getting value from user.
//  *
//  * noramlly prompt funciton store string value.But we can change it by using type conversion.
//  */

// //example for loose(==)Equality operator

// // const favourite = prompt(`What's your favourite number?`);
// // console.log(favourite);
// // console.log(typeof favourite);

// // console.log(
// //   favourite == 23
// //     ? `23 is Jonas sir's favourite number`
// //     : `There is the number ${favourite}`
// // );
// /**For writting clean code always recommended to use ===(strict) equality operator cause due to not does typer coercion we can get rid from lots of bugs. */

// //Another example:
// // const favourite = Number(prompt("What's your favourite number?"));
// // console.log(favourite);
// // console.log(typeof favourite);
// // console.log(
// //   favourite === 27
// //     ? `27 is Lora's favorite number.`
// //     : `There is the number ${favourite}`
// // );

// /**For not equality operator:
//  * !==(not strict) and !=(not loose)
//  *
//  * As we know always recommended use strict operator from rid lots of bugs.
//  */

// //example:
// // const favourite = Number(prompt(`Enter a number!...`));
// // console.log(favourite);
// // console.log(
// //   favourite !== 23
// //     ? `Why not 23?`
// //     : `There is the number that you wanted ${favourite}`
// // );
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /**
//  * Logical operator in Javascript
//  *
//  * AND(&&)*
//  * OR(||)
//  * NOT(!)
//  *
//  *
//  * example:*/

// // const hasDriverLicense = true;
// // const hasGoodVision = true;

// // console.log(hasGoodVision && hasDriverLicense);
// // console.log(hasGoodVision || hasDriverLicense);
// // console.log(!hasDriverLicense);
// // console.log(
// //   hasDriverLicense && hasGoodVision ? `Gari Chala` : `Try something different.`
// // );

// // const isTired = false;
// // console.log(
// //   hasDriverLicense && hasGoodVision && !isTired
// //     ? `You are able to drive`
// //     : `You're not able to drive a car.`
// // );

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /**The switch statement:
//  * .....................
//  *
//  * The switch statement is a alternative way of writting a complicated if/else statement.
//  *
//  * when we all want to do compare in one value then multiple different options.
//  */

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /**Statements and expressions
//  *
//  * Expressions: expressions produce values.
//  * i. 3+4;
//  * ii.1991;
//  * iii.true && false && !false
//  *
//  *
//  * Statements: statements does not produce values.
//  *
//  * example:
//  *
//  */
// // console.log(23 > 10 ? `23 is Bigger.` : `something wrong!.`);

// /**Statements are like full sentences that translate our actions.
//  *
//  * In a templte literal we can insert expressions but not statements.
// //  */
// // console.log(`I'm ${2021 - 2000} years old.`);
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /**Strict mode javascript
//  * ......................
//  *
//  * Strict mode is a special mode that we can activate in javascript. which makes it easier for us to write a secure code.
//  *
//  * To activate strict mode write 'use strict' at begining of the code.
//  *
//  * To using 'use strict' it makes easier to avoid accidental errors for developers.
//  * so bascially it helps us to intorduce the bugs into our code. And that because of 2 reasons.
//  * i. strict mode forbids us to do certain things .
//  * ii.It actually crate visible errors for us in certain situation in which without strict mode javascript will simply fail silently. Without leting us know that we did a mistake*/
// //without strict mode
// // "use strict";
// // let hasDriverLicense = false;
// // const passTest = true;
// // if (passTest) hasDriverLicense = true;
// // if (hasDriverLicense) console.log("I can drive");

// //For writing clean code I'd like to highly recommend you to 'use strict' mode.
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// /**Funciton:
//  *
//  * A function is simply a piece of code that we can reuse over and over again in our code.
//  *
//  * Variable vs. Function:
//  * A variable can hold value. A function can hold one or more complete lines of code.
//  *
//  * For create a function we have first use function keyword then name then parenthesis. You can add parameters into the parenthesis.
//  *
//  *
//  * In this case for basic function example:
// //  */
// // let variable;
// // function logger() {
// //   return (variable = "My name is Rfiat");
// // }

// // logger();
// /**We can use it as many times as we want.
//  *
//  * So to use the function, we simplify call function write the funciton name followed by parenthesis logger();
//  *
//  * Now put it on a variable then displayinjg by console.log.
//  * for example.
//  */
// // const variable = logger();
// // console.log(logger());

// //Another funciton with example:
// // function fruitProcessor(apples, oranges) {
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

// //   return juice;
// // }

// // console.log(fruitProcessor(2, 3));
// //If we don't use return  then we cannot get output.
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /**Function declartaion vs. Expressions */

// //Function declartion:
// // function caleAge1(birthYear) {
// //   return 2037 - birthYear;
// // }
// // const age1 = caleAge1(1991);
// // console.log(age1);

// //function expressions:
// /**Put the function into a variable then variable will be the function. (Also called Anonymous function) */

// // const calAge2 = function (birthYear) {
// //   return 2021 - birthYear;
// // };
// // console.log(calAge2(2000));

// /**Function is not a type.
//  * Expressions produce values.
//  * In javascript functions are actually just values. so just as a number or a string or a boolean value.
//  *
//  *
//  * Differnce between function declaration vs. function expressions:
//  *
//  * In function declartion we can function/call function before the declartion but in function expressions we can't.
//  */

// //function declartion:
// // console.log(calAge1(1991));
// // function calAge1(birthYear) {
// //   return 2037 - birthYear;
// // }

// // //Function Expressions
// // console.log(age2(2000));
// // const age2 = function calAge2(birthYear) {
// //   return 2021 - birthYear;
// // };

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /**Arrow function
//  * >>>>>>>>>>>>>>
//  *
//  * In arrow function we have just simply function name then arrow(=>) then we simply write what we want to return.
//  *
//  * For example(input from:one parameter)

//  */

// // console.log(calAge3(2000));

// /**So indeed, the value that we calculated was returned automatically without return keyword.
//  *
//  * example:
//  */

// // const yearsUntilRetirement = () => {
// //   const age = calAge3(2000);
// //   const retirement = 65 - age;

// //   return retirement;
// // };

// // console.log(yearsUntilRetirement());

// // Anotehr example:
// // const calAge3 = (bithYear) => 2037 - bithYear;

// // const yearsUntilRetirement = (firstName) => {
// //   const age = calAge3(1900);

// //   return age < 65
// //     ? `${firstName} is ${age} and he will retires  ${65 - age} years later.`
// //     : `${firstName} is alrady retired his age is now ${
// //         age - 65
// //       } years more than retirement `;
// // };

// // console.log(yearsUntilRetirement("Lora"));
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /**
//  *return -1 means meaning less */

// /**Different function types:
//  *
//  * Function declartion:
//  * function that can used before declartoin
//  *
//  * function expression: Essensitally a function value stored in a variable.
//  *
//  * Arrow function: Create a Quick one-line function no need return value.
//  */

// //function delcartion:
// // function calAge(birthYear) {
// //   return 2033 - birthYear;
// // }

// // const lora = calAge(2003);
// // console.log(lora);

// // //function expressions:
// // const calAge2 = function (birthYear) {
// //   return `${2032 - birthYear} years old.`;
// // };

// // console.log(calAge2(2006));

// // //Arrow function:
// // const calAge3 = (birthYear) => `${2021 - birthYear} Years old....`;
// // console.log(calAge3(2000));

// /**Three difference ways of writing functions but they all work in a similar way. Receive input data, transform data and then output data.
//  *
//  *
//  *
//  * console.log() is a self function. And so the arguments that we pass into the console.log() function is what will get  printed to the developer console.
//  */

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// /**Array:
//  *
//  *
//  * Array are such a data structure. so an array is like a big container into which we can throw variables and then later reference them.
//  *
//  * exemple:
//  */

// //without array

// // const friend1 = "Michel";
// // const friend2 = "Steven";
// // const friend3 = "Peter";
// // console.log(friend1, friend2, friend3);

// // //using array

// // console.log(friends[0]);

// //Another method for number function:

// // const years = new Array(1991, 2003, 2002, 2004); //Not recommended this method.//without new keyword and Array function number type array will not work that's the rule of javascript.

// // console.log(years[3]);

// /**Array Index starts with 0.
//  * In order to displaying first index we can get it by
//  * console.log(friends[0]);
//  *
//  * Another example for third Index:
//  * console.log(friends[2]);
//  *
//  */

// //We can get actual number in that array

// // console.log(friends.length); //length is count from 1// it's something called a property.

// //we can use length method to get the last elementof any array.

// //Remember to retrieve an element from the array we need to square brackets.

// //Example:

// // console.log(friends[friends.length - 1]);
// //Remember expression is something that produces value.

// //Difference between expressions and statement:

// //Expressions:
// //An expressions evaluates to a value.

// //Statement:
// //A statements does something.It means represent an action or command.
// const friends = ["Michel", "Steven", "Peter"];

// //we can muted array by the same way like this:

// // console.log(friends);
// // friends[2] = "Joy";
// // console.log(friends);

// /**By the previous lecture we know that variables declared with const, cannot be changed...
//  *
//  * The true fact is only primitive values are immutable.But an array is not a primitive value.
//  *
//  * And so we can actually always change it so we can mutate it.But we cannot do replace the entire array when const.
//  */

// // friends = ["Pc", "mobile", "table", "keyboard"];//wrong

// //Array can acutally hold values with different types all at the same time.

// // const age = (birthYear) => 2021 - birthYear;
// // const bornDate = [2000, 2002, 2003, 1999, 2005];

// // for (let i = 0; i < bornDate.length; i++) {
// //   console.log(`${i}.${age(bornDate[i])} years old`);
// // }
// //we can do operation with function ..but cannot do  operation with array.
// // //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // let emptyArray = [];
// // console.log(emptyArray);

// // for (let i = 1; i <= 10; i++) {
// //   emptyArray.push(i);
// // }
// // console.log(emptyArray);

// // const info = {
// //   firstName: "Rifat",
// //   lastName: "Khan",
// //   age: 21,
// //   height: 170,
// //   student: function () {
// //     return `${this.firstName}
// // ${this.lastName}`;
// //   },
// // };

// // console.log(info.firstName, info["lastName"]);
// // console.log((info.height = 10));
// // console.log(info);

// // info["lastName"] = "Shah";
// // console.log(info.lastName);

// // info.age++;
// // info.firstName++;
// // console.log(info.age);
// // console.log(info.firstName);
// // console.log(info.student());
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // const age = Number(prompt("What is your age?"));
// // let status;

// // if (age >= 18 && age <= 35) {
// //   status = "target demo";
// // } else {
// //   status = "Give it a try!";
// // }

// // console.log(status);

// // let day = 3;
// // switch (day) {
// //   case 0:
// //     console.log("WeekEnd");
// //     break;
// //   case 3:
// //     console.log("WeekEnd");
// //     break;
// //   case 5:
// //     console.log("WeekEnd");
// //     break;
// //   default:
// //     console.log("WeekDays");
// // }

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // const convertMinuteToSecond = (min) => min * 60;

// // console.log(convertMinuteToSecond(7));

// // const yourAgeInSeconds = (birthYear) => {
// //   const age = 2021 - birthYear;

// //   return age * 12 * 30 * 24 * 60 * 60;
// // };

// // console.log(yourAgeInSeconds(2000));

// // const returnFromArray = () => {
// //   const fruits = ["Apple", "JackFruit", "Banana", "Pineapple"];
// //   return fruits[0];
// // };

// // console.log(returnFromArray());

// // const movieRating = (rating) => {
// //   let movieResult;
// //   if (rating >= 7) {
// //     movieResult = "Good Movies";
// //   } else {
// //     movieResult = "Bad Moveis";
// //   }
// //   return movieResult;
// // };
// // console.log(movieRating(6), movieRating(7), movieRating(9));

// // const checkString = (string) => {
// //   let result;
// //   if (string === "") {
// //     result = "Empty String";
// //   } else {
// //     result = string;
// //   }
// //   return result;
// // };

// // console.log(checkString(""));
// // console.log(checkString("Lora"));
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // const findMin = (array) => {
// //   let min = array[0];
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] < min) {
// //       min = array[i];
// //     }
// //   }
// //   return min;
// // };
// // const numberArray = [100, 20, 33, 233, 4];

// // console.log(findMin(numberArray));

// // const findMax = (array) => {
// //   let max = array[0];
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] > max) {
// //       max = array[i];
// //     }
// //   }
// //   return max;
// // };

// // console.log(findMax(numberArray));

// // console.log([2, 5, 2, 1, 7, 8, 10, 9].sort());\\

// // const movieSorted = (array) => {
// //   for (let j = 0; j < array.length; j++) {
// //     let max = array[j];
// //     let location;

// //     for (let i = j; i < array.length; i++) {
// //       if (array[i] > max) {
// //         max = array[i];
// //         location = i;
// //       }
// //     }
// //     number[location] = array[j];
// //     array[j] = max;
// //   }
// //   return array;
// // };

// // console.log(movieSorted(number));

// // const maxBySort = (array) => {
// //   let max, location;
// //   for (let j = 0; j < array.length; j++) {
// //     max = array[j];

// //     for (let i = j; i < array.length; i++) {
// //       if (array[i] > max) {
// //         max = array[i];
// //         location = i;
// //       }
// //     }
// //   }
// //   array[location] = array[0];
// //   array[0] = max;

// //   return [array, location, max];
// // };
// // console.log(maxBySort(number));

// // const arraySort = (arr) => {
// //   for (let j = 0; j < arr.length; j++) {
// //     let max = arr[j];
// //     let location;
// //     for (let i = j; i < arr.length; i++) {
// //       if (arr[i] > max) {
// //         max = arr[i];
// //         location = i;
// //       }
// //     }
// //     arr[location] = arr[j];
// //     arr[j] = max;
// //   }
// //   return arr;
// // };

// // console.log(arraySort(number));

// // const sorting = (array) => {
// //   for (let j = 0; j < array.length; j++) {
// //     let location;
// //     let max = array[j];
// //     for (let i = j; i < array.length; i++) {
// //       if (array[i] > max) {
// //         max = array[i];
// //         location = i;
// //       }
// //     }
// //     array[location] = array[j];
// //     array[j] = max;
// //   }
// //   return array;
// // };

// // console.log(sorting(number));

// // function findMax(array, start) {
// //   let max = array[start];
// //   let location = start;

// //   for (let i = start; i < array.length; i++) {
// //     if (array[i] > max) {
// //       max = array[i];
// //       location = i;
// //     }
// //   }
// //   return { arrayMax: max, maxIndex: location };
// // }

// // const number = [2, 4, 7, 3, 8, 10, 9, 1];
// // console.log(findMax(number, 0));

// // const movieSorted = (array) => {
// //   for (let j = 0; j < array.length; j++) {
// //     let max = findMax(number, j);
// //     let maxNumber = max["arrayMax"];
// //     let maxIndex = max["maxIndex"];

// //     array[maxIndex] = array[j];
// //     array[j] = maxNumber;
// //   }
// //   return array;
// // };

// // console.log(movieSorted(number));
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // const numArray = [23, 4, 64, 367, 2, 6, 7, 29];

// // const findMax = (array, start) => {
// //   let max = array[start];
// //   let location = start;

// //   for (let i = start; i < array.length; i++) {
// //     if (array[i] > max) {
// //       max = array[i];
// //       location = i;
// //     }
// //   }
// //   return { maxNumber: max, maxLocation: location };
// // };

// // // console.log(findMax(numArray, 0));
// // const arraySorted = (array) => {
// //   for (let j = 0; j < array.length; j++) {
// //     let maximum = findMax(array, j);
// //     let max = maximum.maxNumber;
// //     let index = maximum.maxLocation;

// //     array[index] = array[j];
// //     array[j] = max;
// //   }
// //   return array;
// // };

// // console.log(arraySorted(numArray));
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const gradients = [
//   "earphone",
//   "mobile",
//   "pc",
//   "multiplug",
//   "keyboard",
//   "mouse",
// ];

// // for (let element of gradients) {
// //   console.log(element);
// // }

// // gradients.forEach((material) => console.log(material));

// // const alo = gradients.map((material) => {
// //   console.log(material);

// //   return material;
// // });
// // console.log(alo);

// // const newFunc = gradients.forEach((el, ind) => {
// //   console.log(gradients[ind]);
// //   return el;
// // });

// // console.log(newFunc);

// // const mobile = gradients
// //   .map((e) => e)
// //   .filter((v) => {
// //     if (v === "pc" || v === "mobile" || v === "mouse") {
// //       return false;
// //     } else {
// //       return true;
// //     }
// //   });
// // console.log(mobile);

// // const lora = gradients
// //   .map((e, v) => {
// //     console.log(gradients[v]);

// //     return v;
// //   })
// //   .filter((k) => {
// //     if (k === 1) {
// //       return false;
// //     } else {
// //       return true;
// //     }
// //   });

// // console.log(lora);

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //object destructuring

// // const person = {
// //   firstName: "Lora",
// //   lastName: "Khan",
// //   age: 21,
// //   profession: "Smoker",
// // };

// // const { age, profession } = person;

// // console.log(age, profession);

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //array destructuring:

// // const user = [
// //   {
// //     firstName: "Lora",
// //     lastName: "Khan",
// //   },
// //   (user) => user,
// // ];

// // const [fora, mora] = user;

// // console.log(fora);
// // console.log(mora({ firstName: "Hk", lastName: "Sinha" }));

// // const numbers = ["one", "two", "three", "four", "five"];

// // const [ola, , , moa] = numbers;
// // console.log(ola, moa);

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //promise

// // const alien = new Promise((right, wrong) => {
// //   setTimeout(() => {
// //     right({
// //       fullName: "Lora Khan",
// //       age: 21,
// //     });
// //     wrong("Something went wrong");
// //   }, 1000);
// // });

// // alien.then((display) => console.log(display)).catch((w) => console.log(w));

// // console.log("Who am I?");

// // const randomUser = fetch("https://www.randomuser.me/api/");
// // console.log(randomUser);

// // randomUser
// //   .then((response) => response.json().then((dataRes) => console.log(dataRes)))
// //   .catch((e) => console.log(e));

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // fetch
// // const api = fetch("https://www.randomuser.me/api/");
// // api
// //   .then((user) => user.json())
// //   .then((display) => console.log(display))
// //   .catch((error) => console.log(error));

// // const alien = new Promise((resove, reject) => {
// //   setTimeout(() => {
// //     resove({
// //       fullName: "Rifat Khan",
// //       age: 21,
// //     }),
// //       reject("Something went wrong!");
// //   }, 1000);
// // });

// // alien.then((d) => console.log(d)).catch((e) => console.log(e));

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // const promise = new Promise((resolve, reject) => {
// //   let x = 1 + 1;
// //   if (x === 2) {
// //     resolve(`Success!`);
// //   } else {
// //     reject("Failed");
// //   }
// // });

// // promise
// //   .then((message) => console.log(`This is from Then: ${message}`))
// //   .catch((message) => console.log(`This is from catch:${message}`));

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //16/8/21

// //Iteration:

// // for of
// // const fruits = [
// //   "black-berry",
// //   "stawberry",
// //   "pineapple",
// //   "jack-fruit",
// //   "mango",
// //   "banana",
// // ];

// // fruits.forEach((fruit) => console.log(fruit));
// // for (let fruit of fruits) console.log(fruit);
// // fruits.map((fal) => console.log(fal));

// //deconstructing function:
// // console.log(fruits.join("*"));
// // const [a, b, , c] = fruits;
// // console.log(a, b, c);

// // const address = {
// //   firstName: "Lora",
// //   lastName: "Khan",
// //   age: 21,
// //   bloodGroup: "AB+",
// // };

// // const { firstName, lastName } = address;
// // console.log(firstName, lastName);
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // const person = [
// //   {
// //     firstName: "Lora",
// //     lastName: "Khan",
// //   },
// //   (user) => console.log("There is the user:", user),
// // ];

// // const [user, newUser] = person;
// // console.log(user);
// // newUser({ firstName: "Alien", lastName: "Army" });

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // let a = 18;
// // let b = 12;
// // if (a + b === 30) {
// //   alert("Correct answer");
// // }
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // let age = (birthYear) => 2021 - birthYear;
// // const checkYourAge = (age) => {
// //   if (age < 18) {
// //     return `You are too young,to driving the car. Powering off`;
// //   } else if (age === 18) {
// //     return `Contrat's on your first year driving. Enjoy your drive`;
// //   }
// //   return `Enjoy your driving`;
// // };

// // const assesment = checkYourAge(age(Number(prompt(`What's your birth year?`))));
// // // age();
// // console.log(assesment);

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // const person = {
// //   firsName: "Lora",
// //   lastName: "Khan",
// //   age: 21,
// //   user: () => console.log("lora"),
// // };
// // person.user();
// // console.log(user);
// // console.log(user[0].password);
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // const users = [
// //   { userName: "Lora", password: 123456 },
// //   { userName: "Alien", password: 1234 },
// // ];
// // const newsFeed = [
// //   {
// //     athor: "Lora",
// //     timeline: `That's a beautiful day isn't it?`,
// //   },
// //   {
// //     athor: "Khan",
// //     timeline: "Free Fire, Pubg banned in Bangladesh",
// //   },
// //   {
// //     athor: "Alien",
// //     timeline: "KGF chapter 2 akhono realese hoy nai",
// //   },
// // ];

// // let userPrompt = prompt("input the username");
// // let passPrompt = Number(prompt("input the user password"));

// // const facbook = (user, pass) => {
// //   if (
// //     (user === users[0].userName && pass === users[0].password) ||
// //     (user === users[users.length - 1].userName && pass === users[1].password)
// //   ) {
// //     return newsFeed;
// //   }
// //   return alert(`Sorry wrong username or password`);
// // };
// // console.log(facbook(userPrompt, passPrompt));

// //  const math = [1, 2];
// // const dummyText = "What is up?";
// // const sum = (a, b) => {
// //   if (a === math[0] && b === math[1]) return dummyText;
// // };
// // console.log(sum(1, 2));

// // console.error("Oh NO!");

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // const todoList = [
// //   "checkYourPhone",
// //   "goto wash room",
// //   "ring id work",
// //   "study",
// //   "luch",
// //   "shower",
// //   "more study",
// //   "hangout",
// //   "somke",
// //   "play lodo",
// //   "coming home",
// //   "dinner",
// // ];
// // // console.log(todoList);
// // // const lora = todoList.map((list) => list + "!");
// // // console.log(lora);
// // /**If we something modify from array we can do that by using (for in loop) */
// // for (let list in todoList) {
// //   todoList[list] += "!";
// // }
// // console.log(todoList);

// // // let a = 20;
// // // a += "lora";
// // // console.log(a);
// // let start = 1;
// // while (start <= 10) {
// //   console.log(start, "I Love You!");
// //   start++;
// // }
// // let i = 1;
// // let lora = "welcome back!";
// // do {
// //   console.log(i, lora);
// //   i++;
// // } while (i <= 10);
// // const lora = ["a", "b", 3, "d", 5, "f"];
// // // lora.forEach((lora) => console.log(lora));
// // const info = (i, j) => console.log(i, j);
// // lora.forEach(info);
// // const khabar = [
// //   "polao",
// //   "biriani",
// //   "misti",
// //   "doi",
// //   "mada",
// //   "lacchi",
// //   "beef",
// //   "chicken",
// // ];
// // // khabar.forEach(info);

// // //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // // const array = [];
// // // for (let i = 1; i <= 10; i++) {
// // //   array.push(i);
// // // }

// // // console.log(array);
// // const khabar2 = [];
// // const bush = (e) => khabar2.push(e);
// // // khabar.forEach((ele) => khabar2.push(ele));
// // khabar.forEach(bush);
// // console.log(khabar2);
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //facebook 2.0

// // const users = [
// //   {
// //     username: "lora",
// //     password: "abc",
// //   },
// //   {
// //     username: "khan",
// //     password: "def",
// //   },
// //   {
// //     username: "alien",
// //     password: "ghi",
// //   },
// //   {
// //     username: "army",
// //     password: "jkl",
// //   },
// //   {
// //     username: "mia",
// //     password: "mno",
// //   },
// // ];

// // const newsFeed = [
// //   { athor: "lora", timeline: `Today is the great day isn't it?` },
// //   { athor: "mora", timeline: "Hey there" },
// //   { athor: "chora", timeline: "What is up?" },
// //   { athor: "dora", timeline: "free fire & pubg banned" },
// //   { athor: "Khanom", timeline: "How was your day?" },
// // ];

// // let inputPerson = prompt(`Input your username`);
// // let inputPass = prompt(`Input your password`);
// // const isUserValid = (username, password) => {
// //   const temp = users.map((e) => {
// //     if (e.username === username && e.password === password) {
// //       return true;
// //     }
// //     return false;
// //   });
// //   return temp;
// // };

// // const singIn = (username, password) => {
// //   if (isUserValid(username, password)) {
// //     console.log(newsFeed);
// //   } else alert(`Sorry wrong user or password`);
// // };
// // singIn(inputPerson, inputPass);

// // // const lora = users.map((user, pass) =>

// // console.log(user, pass));

// // console.log(lora);
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //Advnanced Javascript
// //>>>>>>>>>>>>>>>>>>>>>>>>>>
// //scope
// // const lora = () => console.log("lora ola beda!");
// // lora();
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // let a = "Hello there,";
// // const dummy = () => {
// //   a = "lora";
// //   return a;
// // };
// // console.log(
// //   `Before run function:
// // `,
// //   a
// // );

// // dummy();
// // console.log(
// //   `After run dummy function:
// // `,
// //   a
// // );
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //Ternary Operator:
// // const verifyingUser = (truthy) => truthy;

// // const check = verifyingUser(false) ? `Welcome Back...` : `Access Denied`;
// // console.log(check);

// // const bot = `Your account id ${verifyingUser(false) ? `1234` : `not found`}`;
// // console.log(bot);
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //switch statement:

// // const yourDestinition = (direction) => {
// //   let whatHappen;
// //   switch (direction) {
// //     case "right":
// //       whatHappen = "goto masjid";
// //       break;
// //     case "left":
// //       whatHappen = "go to bazar";
// //       break;
// //     case "forward":
// //       whatHappen = "okay";
// //       break;
// //     case "backward":
// //       whatHappen = "no";
// //     default:
// //       whatHappen = "kono tai millo na";
// //   }
// //   return whatHappen;
// // };

// // console.log(yourDestinition("kkdk"));
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // destructuring:

// // const info = {
// //   firstName: "lora",
// //   lastName: "Khan",
// //   age: 21,
// //   somker: true,
// // };
// // const { firstName, age } = info;
// // console.log(firstName, age);

// // const users = [
// //   { username: "lora", password: "1234" },
// //   { username: "mora", password: "343" },
// //   { username: "kora", password: "rdf" },
// //   { username: "chora", password: "dfksd" },
// // ];
// // const [a{username,password}], ,[ b{username,password}]] = users;
// // console.log(a, b);
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // const fullName = "Lora Khan";
// // let fora = "fora ola";
// // const obj = {
// //   [fullName]: "No Problem!",
// //   [1 + 2]: "one and two makes three",
// //   [fora]: "Panic!",
// // };
// // console.log(obj);

// // const newArray = { fullName, fora };
// // console.log(newArray);
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // const greet = (fullName = "Lora", age = 21, pet = "Moyna") =>
// //   `Hello ${fullName} you seems to be ${
// //     age - 4
// //   },,,What a lovely ${pet} you have`;

// // console.log(greet("Alien", 19, "Cat"));
// // console.log(greet());

// //Symbol data type are unique if you have same properties have different value then if you need have to unique it then you should use Symbol data type

// // const lora1 = Symbol(greet());
// // const lora2 = Symbol(greet());

// // console.log(lora1 === lora2);

// // const sum = (a, b) => a + b;
// // console.log(sum(2, 4));
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //advanced function:(clousers)

// // console.log(greet);

// // const first = () => {
// //   const greet = "Hello!";
// //   const second = () => alert(greet);

// //   return second;
// // };

// // const newFun = first();
// // newFun();
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // currying

// //Without currying
// // const multiplyBy5 = (b) => console.log(5 * b);

// // multiplyBy5(10);
// // multiplyBy5(11);
// // multiplyBy5(22);
// //>>>>>>>>>>>>>>>>>>>>>>
// //With currying:

// // const multiply = (a) => (b) => console.log(a * b);

// // const multiplyBy9 = multiply(9);

// // multiplyBy9(11);
// // multiplyBy9(91);
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //compose:

// // const compose = (a, b) => (c) => a(b(c));
// // const squre = (n) => n ** 2;
// // const add = (n) => n + 9;
// // console.log(compose(squre, add)(7));

// // const currying = (a) => (b) => a + b;
// // console.log(currying(3)(5));

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Key principle for avoiding bugs:

// /**Avoiding Side Effect
//  * Functional Purity
//  */
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //Advanced Array:(forEach,map,filter,reduce)

// // //forEach:it doesn't return something
// // const array = [53, 432, 64, 63, 42, 12];
// // const don = [];
// // const lora = array.forEach((n) => don.push(n));
// // console.log(don);

// // const users = [{ username: "lora" }, { age: 21 }, "What the we"];

// // console.log(users.forEach((n) => console.log(n)));

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //map:it's always return something

// // const array = [1, 23, 53, 5, 63, 23];

// // console.log(array.map((n) => n + 1));

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //filter: that make condition in a function:

// // const array = [134, 353, 53, 5, 3, 52, 100, 453];

// // console.log(array.filter((n) => n <= 100));
// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //reduce:

//sum of array using for loop:
// let num = [123, 23, 53, 25, 16, 166, 164];
// let total = 0;//if we don't puting something here by defult it will be undefined in this case it will showing us something like undefined and we cannot get the proper answer.

// for (let i = 0; i < num.length; i++) {
//   total += num[i];
// }

// console.log(total);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//sum of array using reduce method:

// const array = [1, 2, 3, 4, 5];

// console.log(array.reduce((a, b) => a + b, 0) / array.length);

// const avg = array.reduce((a, b) => a + b) / array.length;

// console.log(avg);

//>>>>>>>End of Advanced array era>>>>>>>>>>>>>>>
//Advanced Objects:
/**Array are just an objects at the end of the day.
 *
 * we gonna learn
 *
 * reference
 * context(this)
 * instantitaion
 */

//reference:
// const array1 = [1];
// const array2 = array1;
// const array3 = [1];

// console.log(array1 === array3);
// console.log(array1 === array2);
// console.log(array1);
//>>>>>>>>>>>>>>>>>
// const info = {
//   firstName: "Lora",
//   lastName: "Khan",
//   age: function (born) {
//     console.log(2021 - born);
//   },
//   interface: () => {
//     if (this.age < 18) {
//       console.log(`polapan`);
//     } else console.log("boro manu");
//   },
// };

// console.log(info);
// console.log(info.age(2006));

// const info = {
//   firstName: "Lora",
//   lastName: "Khan",
//   age: 21,
//   intro: function () {
//     return `I'm ${this.firstName} ${this.lastName}. I'm ${this.age} years old...`;
//   },
// };

// console.log(info.intro());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//instatitation:
// class player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hello I'm ${this.name}, and I'm a ${this.type}`);
//   }
// }

// class wizard extends player {
//   constructor(name, type) {
//     super(name, type);
//   }
//   play() {
//     console.log(`Hooooookkkkkkkaaaaaa! I'm a ${this.type}`);
//   }
// }

// wizard1 = new wizard("sokina", "healer");
// wizard2 = new wizard("lora", "iron man");
// wizard1.introduce();
// wizard2.introduce();
// wizard1.play();
// wizard2.play();

// class Khela {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hello there I'm ${this.name} and I'm a ${this.type} `);
//   }
// }

// class Lodo extends Khela {
//   constructor(name, type) {
//     super(name, type);
//   }
//   play() {
//     console.log(`I'm ${this.name}, My favorite thing is ${this.type}`);
//   }
// }

// const lora1 = new Lodo("Lora", "superman");

// lora1.introduce();
// lora1.play();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const compose = (add, mul) => (num) => add(mul(num));

// const addition = (n) => n + 1;
// const multiplication = (n) => n * 1;

// console.log(compose(addition, multiplication)(9));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//currying:
// const curr = (a) => (b) => a * b;

// const multiplyb8 = curr(8);

// console.log(multiplyb8(10));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const info = {
//   firstName: "Lora",
//   lastName: "khan",
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(info.fullName());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const lora1 = [1];
// const lora2 = lora1;
// const lora3 = [1];

// console.log(lora1 === lora2);//true
// console.log(lora1 === lora3);//false
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   intro() {
//     console.log(`Hello I'm ${this.name} and  I'm ${this.type}`);
//   }
// }

// class Marvel extends Player {
//   constructor(name, type) {
//     super(name, type);
//   }
//   character() {
//     console.log(`wow I'm ${this.type}`);
//   }
// }

// const one = new Marvel("Lora", "Iron man");
// one.intro();
// one.character();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const curry = (a) => (b) => a * b;
// let multiplyBy5 = curry(5);
// console.log(multiplyBy5(10));

// const compose = (a, b) => (c) => a(b(c));

// const squre = (n) => n ** 2;
// const add = (n) => n + n;
// console.log(compose(squre, add)(9));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let box1 = [1];
// let box3 = box1;
// let box2 = [1];

// console.log(box1 === box3);
// console.log(box1 === box2);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const info = {
//   firstName: "Lora",
//   lastName: "Khan",
//   age: 21,
//   fullName() {
//     console.log(
//       `I'm ${this.firstName} ${this.lastName} and am ${this.age} years old`
//     );
//   },
// };

// info.fullName();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const num = [1, 3, 5, 6, 54, 55, 34];

// num.forEach((n) => console.log(n));
// console.log(num.map((n) => n + 1));
// console.log(num.filter((n) => n > 50));
// console.log(num.reduce((a, b) => a + b, 0) / num.length);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// class KhelaDula {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   intro() {
//     console.log(`Hello I'm ${this.name}`);
//   }
// }

// class Cricket extends KhelaDula {
//   constructor(name, type) {
//     super(name, type);
//   }
//   role() {
//     console.log(`${this.name} amar nam...${this.type} amar kam`);
//   }
// }

// const one = new Cricket("Alien", "Batsman");
// const two = new Cricket("Touhid", "Bowler");
// const three = new Cricket("Arif", "Wicket-Kepper");

// one.intro();
// one.role();
// two.intro();
// two.role();
// three.intro();
// three.role();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let a = 5;
// let b = a;
// b++;
// console.log(b, a);

// const box = {
//   username: "Lora",
//   password: "okay123",
// };

// const box2 = box;
// box2.password = "ImHK";

// console.log(box);
// console.log(box2);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const arr = [1, 23, 5, 6, 7, 78];

// console.log(typeof arr);

//>>>>>>>>>>>>>>>>>passed by reference:

// const obj1 = {
//   firstName: "Lora",
//   lastName: "Khan",
//   age: 21,
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   inside: {
//     deep: "I Have to finish my shower",
//   },
// };

// const obj2 = Object.assign({}, obj1);
// obj1.lastName = "OHHHOOOOO@";
// console.log("clone", obj2);
// console.log("orginial", obj1);

// obj2.lastName = "Ola beda";

// const obj3 = Object.assign({ fav: "Misti" }, obj1);
// const obj4 = { ...obj2 };

// const obj5 = JSON.parse(JSON.stringify(obj1));
// obj1.inside.deep = "LOOOOOL";
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// console.log("Json", obj5);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Type coercion:always use ===

// const a = 5;
// const b = 5;
// console.log(a === b);

// console.log(Object.is(NaN, NaN));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ES7:include,expotential number(**)

// const greet = "Helloo";
// console.log(greet.includes("o"));

// const fruit = ["apple", "banana", "jack-fruit", "orange", "pine-apple"];

// console.log(fruit.includes("pine-apple"));

// const squre = (a) => a ** 2;
// const cube = (b) => b ** 3;
// const add = (c) => c + c;

// console.log("Squre:", squre(2), "\n", "Cube:", cube(2));
// console.log("Squre:", squre(3), "\n", "Cube:", cube(3));

// const curr = (a, b) => (c) => a(b(c));

// console.log(curr(squre, cube)(add(3)));

// const mul = (a) => (b) => a * b;
// const mulby6 = mul(6);
// console.log(mulby6(6));
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ES8:padstart,padend,keys,value,entries
// const age = 21;
// console.log("Hello There,".padStart(16), `Im ${age} years old`);
// console.log("Hello There,".padEnd(16), `Im ${age} years old`);

// Object.keys(users).forEach((key) => console.log(key, users[key]));

// Object.values(users).forEach((value) => console.log(value));

// Object.entries(users).filter((n) => console.log(n > 3));

// Object.entries(users).forEach((key, value) => {
//   if (key === "user5") {
//     console.log("Ok Maumun");
//   }
//   console.log(value);
// });
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const users = {
//   user1: "Lora",
//   user2: "Fora",
//   user3: "Farabi",
//   user4: "Fahim",
//   user5: "Mamun",
// };

// const result = Object.entries(users).map(
//   (n) => n[1] + n[0].replace("user", " polapan ")
// );

// console.log(result);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ES10:flat,flatmap,try-catch,trimStart,trimEnd,Object.fromentries

// const arr = ["lora", , , , "Arif", , , "Fahim", "Sany", "Aziz"];
// console.log(arr);
// console.log(arr.flat());
// const ar1 = [1, 2, [2, 5, [56, 63, [23, 34, [4, 6, [34, 6]]]]]];
// console.log(ar1);
// console.log(ar1.flat(5));
// // console.log(ar1.flatMap((v) => v + " lora", v * 5));
// let cart = [
//   {
//     name: "Smartphone",
//     qty: 2,
//     price: 500,
//     freeOfCharge: false,
//   },
//   {
//     name: "Tablet",
//     qty: 1,
//     price: 800,
//     freeOfCharge: false,
//   },
// ];
// console.log(cart);
// console.log(cart.flat(7));

// const lora = 65;
// try {
//   console.log(lora + null);
// } catch {
//   console.log("You messed up!");
// }
// try {
//   const users = [
//     ["username", "lora"],
//     ["age", 21],
//     ["firstName", "Lora"],
//     ["lastName", "Khan"],
//   ];
//   console.log(users.flat());
//   const ds = Object.fromEntries(users);
//   console.log(ds);
// } catch {
//   console.log("You messed up");
// }

// const email1 = "      lora@gmail.com";
// const email2 = "loraola@yahoo.com           ";

// console.log(email1);
// console.log(email2);

// console.log(email1.trimStart());
// console.log(email2.trimEnd());
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const basket = [
//   {
//     apple: 5,
//     orange: 2,
//     grapes: 100,
//     watermelon: 3,
//   },
// ];
// const bas = basket.flat();
// for (let fruit in bas) {
//   console.log(fruit, bas[fruit]);
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ES2020: BigInt

// console.log(Number.MAX_SAFE_INTEGER);
//object chaining:
// const users = {
//   user1: {
//     name: "Lora",
//     birthYear: 2001,
//     profession: "Students",
//   },
//   user2: {
//     name: "ora",
//     // birthYear: 2000,
//     age: 23,
//     profession: "Bussinessmen",
//   },
// };

// let obj1 = users.user2?.birthYear;
// console.log(obj1);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//nullishcoalesing:

// const users = {
//   user1: {
//     name: "Lora",
//     birthYear: 2001,
//     profession: "Students",
//   },
//   user2: {
//     name: "ora",
//     // birthYear: 2000,
//     age: 0,
//     profession: "Bussinessmen",
//   },
// };

// // console.log(users.user2?.age ?? "just born");
// console.log(users.user2?.fav || "Sweet");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const array = ["", " ", "lora", "mora"];

// console.log(
//   array.map((n) => {
//     if (n) {
//       return true;
//     } else return false;
//   })
// );

// window.document.write("<p>NEVER GIVE UP</p>");
// document.write("<p>NEVER EVER GIVING UP</p>");
// document.querySelector("body").style.backgroundColor = "rgba(0,0,0,0.7)";

// document.write("<button>Click!</button>");
// let button = document.querySelector("button");
// button.addEventListener("mouseleave", () => {
//   console.log("click");
// });
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const input = document.getElementById("user-input");
// const btn = document.getElementById("click");
// const ul = document.querySelector("ul");
// btn.addEventListener("click", () => {
//   const li = document.createComment("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
// });

// const button = document.getElementById("enter");
// const input = document.getElementById("userinput");
// const ul = document.querySelector("ul");

// button.addEventListener("click", () => {
//   console.log(input.value);
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
// });
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const btn = document.querySelector("#enter");
const userInput = document.querySelector("#userinput");
const unorderList = document.querySelector("#list");

const inputLength = () => userInput.value.length;
const createElement = () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput.value));
  unorderList.appendChild(li);
  userInput.value = "";
};

const listing = () => {
  if (inputLength() > 0) {
    createElement();
  }
};

btn.addEventListener("click", listing);

userInput.addEventListener("keypress", (e) => {
  if (inputLength() > 0 && e.which === 13) {
    createElement();
  }
});
