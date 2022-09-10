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

function sortByAge(arr) {
    if (arr instanceof Array) {
        let sortData = arr.sort(func)
        return sortData;
    };

function func(a,b) {
    return a.age - b.age;
};
};

function sortByName(arr) {
    if (arr instanceof Array) {
        let sortData = arr.sort(func)
        return sortData;
    };

function func(a,b) {
    return a.name.toUpperCase() > b.name.toUpperCase();
};
};

function sortByGender(arr) {
    if (arr instanceof Array) {
        let sortData = arr.sort(func)
        return sortData;
    };

function func(a,b) {
    return a.gender.toUpperCase() > b.gender.toUpperCase();
};
};

function render (arr, item) {
    arr.forEach(show);

    function show (el, i) {
        document.body.textContent +=' '+(el[item]);
    };

};
render(sortByName(humans), 'name');
render(sortByAge(humans), 'age');
render(sortByGender(humans), 'gender');

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

// this.name, this.nationality, this.weight, this.gender - властивості класу
// sayHi - метода екземпляру
    