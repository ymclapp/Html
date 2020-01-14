console.log('hello world');

//This section below was the if/else logic from class 6.
/** 
var hourNow = prompt('what time is it? 0-23');
if (hourNow > 18 && hourNow < 24) {
  greeting = 'good evening, everyone!';
} else if (hourNow > 12 && hourNow < 24) {
  greeting = 'good afternoon, everyone!';
} else if (hourNow >= 0 && hourNow < 24) {
  greeting = 'good morning, everyone';
} else {
  greeting = 'wait, you did not give me a proper response';
}
document.write(greeting); 
*/


//This section below was the if/else logic after we added the Date object and the getHours() method. This was part of Class 6 Demo, to show objects and methods.
/** 
var today = new Date();
var hourNow = today.getHours(); 
var greeting;
if (hourNow > 18 && hourNow < 24) {
  greeting = 'Good evening, Class!';
} else if (hourNow > 12 && hourNow < 24) {
  greeting = 'Good afternoon, Class!';
} else if (hourNow >= 0 && hourNow < 24) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>');
*/


//This section adds our if/else logic into a function. 
/** 
function runGreeting() {
    var hourNow = prompt('Whats up my coder person?');
    var greeting;
    if(hourNow > 18 && hourNow < 24) {
        greeting = 'Good evening';
    } else if (hourNow > 12 && hourNow < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Wait, you did not give me a proper respone.'
    }
    console.log('Our Response: ', greeting);
    document.write(greeting);
}
runGreeting();
*/


// Message and Target are parameters of runGreeting function
function  runGreeting(message, target) {
// We still use the prompt method and use 
// the message parameter value the argument as the 
// prompt message to the user. 
    var hourNow = prompt(message);
    //Declare a variable called greeting.
    var greeting;
    if(hourNow >= 0 && hourNow <= 12){
        greeting = 'Good Morning ' + target;
    } else if (hourNow >= 12 && hourNow <= 18) {
        //The assigned greeting will be.
        greeting = 'Good Afternoon, ' + target;
    } else if(hourNow >= 18 && hourNow <= 24) {
        //The assigned greeting will be.
        greeting = 'Good evening, ' + target;
    } else {
        greeting = 'Wait, you did not give me a proper respone.'
    }
    //Console Log Greeting
    console.log('Our Response: ', greeting);
    document.write(greeting);
}
// This is where we 'Call' our function.
runGreeting('What time is it? ', 'everyone!');