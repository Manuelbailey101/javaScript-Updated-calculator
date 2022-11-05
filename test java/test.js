console.log('hello world');

// let age = 28

// let age = prompt("Enter your age: ");
// let name= prompt("Enter your name: ");

// console.log(age)

// we need a prompt thats catching a value in a variable LastName 


//  // console.log LastName


// let lastname=prompt("Enter your last name")

// console.log(lastname)


// document.write("this is JS inserted to HTML" + LastName)

function getAge(){
    let age= prompt ("enter your age");
    console.log(age);
    alert("i Need Variables to process your age is : " + age);
};
// getAge();


//create a variable to catch First name
function GetName(){
let firstName =prompt ("Please enter your first name");
console.log(firstName);
alert(firstName + " is my first name");
}
function getInfo(){
    getAge();
    GetName();
}
// GetName();

// console log the first name 

// send an alert with the first name followed by "is my first name"

function multiplyThree(x){
    let result=x*3
    console.log(result);
    return x*3;
}
multiplyThree(5);//expected: 15
multiplyThree(3);//expected: 9

let multyFive = multiplyThree(5)*5;
document.write(`<p> <b> Result: </b> ${multiplyThree(5)}<p>`);


