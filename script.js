




//Bind method Practicals

let Name = {
    firstname : 'Akshay',
    lastname : 'Saini',
};

let printFullName = function (HomeTown,state) { 
    console.log(this.firstname+ ' ' + this.lastname + ' from ' + HomeTown + ' in '+state);
}

printFullName.call(Name,'Dehradun','Maharashtra');

let Name2 = {
    firstname : 'Jisto',
    lastname : 'M joy',
}

//function borrowing

printFullName.call(Name2,'Chalissery','Kerala');

//bind method
let printMyName = printFullName.bind(Name, 'Mumbai','Maharashtra');
console.log(printMyName)
printMyName();

//Bind method gives a copy of a function it can be invoke later