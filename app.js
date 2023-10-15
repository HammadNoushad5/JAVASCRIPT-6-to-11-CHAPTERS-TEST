// Question no 1

var userinput = prompt("City Name")
var citynames = ["Karachi" , "Islamabad" , "Lahore"]

if(userinput==="Karachi"){
    alert("Welcome to the city of lights")
}else{
    alert("City not found")
}

// Question no 2

var userinput = prompt("Write your gender").toLowerCase;

if(userinput=="Male"){
    alert("Good Morning Sir")
}
else{
    alert("Good Morning Madam")
}

// Question no 3

var signals = prompt("Write the color")
    
if(signals== "Red"){
    alert("Must Stop!")
}else if(signals=="Yellow"){
    alert("Ready to move")
}else if(signals=="Green"){
    alert("Move Now")
}else{
    alert("Invalid Input")
}

// Question no 4


var userinput = Number(prompt("Write your liters"));

if(userinput < 0.5){
    alert("Please refill the fuel in your car")
}else{
    alert("Fuel is suuficient")
}

// Question no 5

var a = 4;
if (++a === 5){
    alert(a)
}   
//   CONDITION 1 IS TRUE

var b = 82;
if (b++ === 83){
alert(b);
}


// CONDITION 2 IS FALSE

var c = 12;
if (c++ === 13){
alert(c);
// TRUE
}
if (c === 13){
alert(c);
// FALSE

}
if (++c < 14){
alert(c);
// TRUE

}
if(c === 14){
alert(c);
// FALSE
}
 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert(totalCost);
}

//  Condition is true

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

    // FALSE

// Question no 6

var Subject1 = Number(prompt("Write your Obtained Marks"));
var Subject2 = Number(prompt("Write your Obtained Marks"));
var Subject3 = Number(prompt("Write your Obtained Marks"));
var Totalmarks = Number(prompt("Write your Total Marks"));
var Total = (Subject1 + Subject2 + Subject3)

var Percentage = (Total/Totalmarks*100)

if(Percentage >= 80){
    alert("Excellent")
}


// Question no 7

var sum = 5;
var sum1 = Number(prompt("Guess the Number"))

if(sum == "sum1"){
    alert("Correct Answer")
}else if("sum++== 6"){
    alert("Close Enough to the correct answer")
}
 

// Question no 8

var num = Number(prompt("enter no plz"))
if(num % 3==0){
    alert("Number is divisible by 3")
}else{
    alert("Not divisible by 3")
}

// Question no 9
var num = Number(prompt("enter no plz"))
if(num % 2 == 0){
    alert("Given number is Even number")
}else{
    alert("Given number is odd number")
}

// Question no 10
var temp = Number(prompt("Enter temprature"))
if( temp > 40){
    alert("Its too hot outside")
}
else if(temp > 30){
    alert("The weather today is normal")
}
else if(temp > 20){
    alert("Today weather is cool")
}
else if(temp>10){
    alert("Todays weather is so cool")
}

// Question no 11

var UserInput1 = Number(prompt("Enter Your desired Value"))
var UserInput2 = Number(prompt("Enter Your desired Value"))
var operator = prompt("Enter Your desired Value")

if(operator === "+"){
    alert(UserInput1 + UserInput2)
}else if(operator === "-"){
    alert(UserInput1-UserInput2)    
}else if(operator === "*"){
    alert(UserInput1*UserInput2)
}else if(operator === "/"){
    alert(UserInput1/UserInput2)
}



