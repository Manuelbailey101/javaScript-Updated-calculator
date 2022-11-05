// let yourName = "manuel";
 // if(confirm("Are you " + yourName + "?")){
  //   console.log("Hello" + yourName );
// }else{
 //    console.log("Then what is your name?");
// }

// let number = 99;
// if(number == 99){
  //   console.log("The number is correct");
// }else{
   //  console.log("The number is incorrect");
// }

// let num1 = 10;
// let num2 = 10;

// if(num1 < num2){
  //    console.log("num1 is smaller than num2");
// }else if(num2 <num1){
   //  console.log("num2 is smaller than num2");
// }else{
  //   console.log("the numbers are the equal");
// }

//let num1 = 1;
//let num2 = 2;
//let num3 = 3;
//let notTrure = false;
//AND -> &&
// if(num1<num2 && num3>num2){
   //  console.log("num1 is smaller than num2 than num2 is is larger than num3");
// }
//OR -> ||
// if(num1 == 1 || num2 == 1 || num3 == 1){
  //   console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
//  }
   //NOT
  //  if(!notTrure){//not true
   //  console.log("not not true is true!");
   // }

function login(){
    let usernameDB = "manuelbailey@gmail.com"
let passwordDB = "abcd1234"
    //getting username
let username = document.getElementById("txtUser").value;
    //getting password
let password = document.getElementById("txtPass").value;
    //compare the username and password with the previous creditals
if(username == usernameDB && password == passwordDB){
    // display welcome to the system + username
document.write(`
<p class="alert-success">Welcome to the system ${username}!</p>`);
}else{
    //display invalid credentials
document.getElementById("alertmsg").innerHTML=`
<p class="alert-error">Invalid credentials! </p>`
    }
}