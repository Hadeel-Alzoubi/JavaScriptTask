/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune()
{
    var number = 3 ;
    var name = "Alice";
    var location = "Jordan";
    var job = "fullstack developer";
    console.log("You will be a " + job + " in " + location +" , and married to " + name+" with "+number + " kids.");
}
tellFortune();

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age. 
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age)
{
    var updateage = age *7;
    console.log("Your doggie is "  + updateage +" years old in dog years!");
}
calculateDogAge(1);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age ,amount)
{
    var x = 100 - age ;
    var y = x * amount * 365 ;
    console.log("You will need " + y + " cups of cofee to last you until the ripe old age of 100");
}

calculateSupply(80,5);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name)
{
    console.log("Hello " + name);
}

greet("hadeel");

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

//-------- function double(cat) {
//  --------   return 2 * x;
//  ----------- }

// Solution : The x is not declare

// --------function double(7) {
//  --------   return 2 * 7;
//  -------- }

// Solution : The Function Must take a Variable not number

// --------function double('7') {
//   --------  return 2 * 'x';
//   --------}

// Solution : The Function Must take a Variable not string 


/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

//Solution :
function double1(x) 
    {
        return 2 * x ;
     }

//Solution :
function double2 (x)
    {
        return 2 * x;
    }
//Solution :
function double3 (x)  
    {
        return 2 * x;
    }
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(a)
{
    console.log(a**3);
}

cube(3);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
... (293 lines left)*/

function multiply(a,b)
{
    console.log(a*b);
}

multiply(10,2);