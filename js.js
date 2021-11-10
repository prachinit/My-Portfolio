// let id = document.getElementById("id");
// console.log(typeof "html");
// id.innerHTML = "<h1>html calci</h1> ";
// id.style = "color:grey; background-color:pink; font-family: cursive;";
// id.className = "text-capitalize text-center";

// function add() {
//   // getElementById returns a string, that is why if we
//   // my even change the type in the label tag we can;t add them simply
//   // without using parseInt.
//   let a = parseInt(document.getElementById("a").value);
//   let b = parseInt(document.getElementById("b").value);
//   let ans = document.getElementById("ans");
//   ans.innerHTML = a + b;
//   console.log(typeof a);
// }

// Slice property
// by the name itself it sounds that it is gonna slice a continious parameter.
// the slice property takes two parameter stert, end(this is the excluded one).
//example:
// let arr = [844, 97, 6, 7555, 8];
// console.log(arr.slice(2, 4));

//map property
// filter
// spread
// let arr1 = [1, 2, 3, "string", "6.33"];
// console.log(arr1);
// let arr2 = [...arr1, 7, 8]; //this is the syntax of the spread property
// console.log(arr2);
// destructuring

// class and subclass
// class flower {
//   constructor(color, DoWeHave) {
//     this.color = color;
//     this.have = DoWeHave;
//   }
//   explain() {
//     return "hello jojo, do you see the flower with ${this.color}";
//   }
// }
// let obj1 = new flower("red", "yes");
// let obj2 = new flower(obj1.explain());
// console.log(obj1);

// Scope
// Redeclaration, function- scoped/ blocked- scoped, moisting
// redeclaration- using let and const we can't declare the same variable again and again
// and vice-versa for var, so in order to make the code bug free, we should use the above two

// function-scoped: this means that the variable is accissible only inside the function,
// not outside, where as blocked-scoped is only inside the braces in which it has been declared
// var is function-scoped and others are blocked scoped

// moisting is nothing but, saying that
// let and const works the same way as anyother variable in c++ do,
// but var works differently-
//output a variable before declaration and defining it outside is fine here,
//instead of giving error it shows undefined,
// whereas the iother two keywords throws an error.
