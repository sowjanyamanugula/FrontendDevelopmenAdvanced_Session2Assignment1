1. //Arrow Functions

function Person(name) {
 this.name = name;
}
Person.prototype.prefixName = arr => {
   return arr.map(character => this.name+character);
};


2. //Destructuring

//1st way
let obj = { firstname: 'Avnesh', lastname: 'Shakya' ,dateofbirth: '6thoct'};
let {firstname: first, lastname: last, dateofbirth: birth} = obj;


function display(obj)
{
  console.log(first + ' ' + last + ',' + birth);  //Avnesh Shakya,6thoct
}


3. //Array Destructuring

var people = ["Mike Smith","Joa Mark","James Fernandes","Mark Brutus","David Paul","Cecilia Peter","Anna William"];
var [MikeSmith, JoaMark, JamesFernandes,MarkBrutus,DavidPaul,CeciliaPeter,AnnaWilliam] = foo;

for (let name of people) {
  console.log(name);  //Displays all names one by one 
}                         


4. //Blocks

{
    let username = 'John';
    console.log(username);  //John
}
console.log(username); //Reference error