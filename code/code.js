/*Напишіть функцію isEmpty(obj), 
яка повертає true, якщо об'єкт не має властивостей, інакше false.*/
let obj = {name: "kk"};
  function isEmpty(obj) {
    for(let prop in obj) {
      if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
} 
console.log(isEmpty(obj)); 

/////////////////
function Human (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
};

let Jack = new Human ("Jack", 20, "male");
let Jane = new Human ("Jane", 28, "female");
let Greg = new Human ("Greg", 16, "male");
let Fiona = new Human ("Fiona", 25, "female");

const humans = [Jack, Jane, Greg, Fiona];
//const arr = [new Object, new Array(), new Date()]
const sorted = bubleSort(humans);
console.log (sorted);
function bubleSort(humans){
    for (let n = 0; n < humans.length; n++) {
    for (let i=0; i<humans.lenght - 1 - n; i++) {
        if (humnans[i] > humans [i + 1]) {
            const buff = humans [i];
            humans [i] = humans [i+1];
            humans [i + 1] = buff;
        }
    }
}
    
    return humans;
}
/*
function sortByAge(arr) {
    if (arr instanceof Array) {
        let sortData = arr.sort(func)
        return sortData;
    };

function func(a,b) {
    return a.age - b.age;
};
};




function render (arr, item) {
    arr.forEach(show);

    function show (el, i) {
        document.body.textContent +=' '+(el[item]);
    };

};

render(sortByAge(humans), 'age');

*/

///////////////////////////
function User(name, nationality, weight, gender) {
    this.name = name;
    this.nationality = nationality;
    this.weight = weight;
    this.gender = gender;
};

User.prototype.sayHi = function() {
  alert(this.name + " "+ this.nationality +" "+  this.weight +" "+  this.gender);
};

let user = new User("Denny", "ukraionian", 90, "male");
user.sayHi();

/////////
class Useruser {
    
    // це буде статичним методом?
    static staticMethod() {
        alert(this === Useruser);
      }
    
    constructor(name){
        this.name = name
    }
    getName() {
        return this.name
    }
}

  
const users = new Useruser ("jjj")

users.getName()// jjj
users instanceof Useruser // true