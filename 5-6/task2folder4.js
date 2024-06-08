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

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age)
{
    if (age >= 20)
        {
            console.log("yes you can");
        }
        else{
            var sumage = 20 - age;
            console.log("please come back after " + sumage + " years to get one");
        }
}
canIGetADrivingLicense(10);
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(a,b)
{
    if(a.length == b.length)
        {
            console.log("true");
        }
        else 
        {
            console.log("false");
        }
}

sameLength("tree","car");

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(num1,num2) {
    if(num1 > num2)
        {
            console.log(num1);
        }
        else if(num2 > num1)
            {
                console.log(num2);
            }
}
largerNubmer(1,-20);
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(num1,num2,num3) {
    for (let i = 0; i < 3; i++)
        {
            if(num1 < num2 && num1 < num3)
                {
                    console.log(num1);
                }
            else if(num2 < num1 && num2 < num3)
                {
                    console.log(num2);
                }
                else
                {
                    console.log(num3);
                }
        }
    
}
smallerNubmer(1005,1003,993);
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(str1,str2,str3,str4,str5) {
    let array = [str1,str2,str3,str4,str5];
    let arr = [str1.length,str2.length,str3.length,str4.length,str5.length];
    // console.log(array);
    if(arr[0] <= arr[1] && arr[0] <= arr [2] && arr[0] <= arr [3] && arr[0] <= arr [4] )
        {
            console.log(str1);
        }
    else if(arr[1] <= arr[0] && arr[1] <= arr [2] && arr[1] <= arr [3] && arr[1] <= arr [4] )
        {
            console.log(str2);
        }
    else if(arr[2] <= arr[0] && arr[2] <= arr [1] && arr[2] <= arr [3] && arr[2] <= arr [4] )
        {
            console.log(str3);
        }
    else if(arr[3] <= arr[0] && arr[3] <= arr [1] && arr[3] <= arr [2] && arr[3] <= arr [4] )
        {
            console.log(str4);
        }
    else if(arr[4] <= arr[0] && arr[4] <= arr [1] && arr[4] <= arr [2] && arr[4] <= arr [3] )
        {
            console.log(str5);
        }
}
shorterString("by","tr","car","air","github");

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(str1,str2,str3,str4)
{
    let arr = [str1.length,str2.length,str3.length,str4.length];
    if(arr[0] >= arr[1] && arr[0] >= arr[2] && arr[0] >= arr[3])
        {
            console.log(str1);
        }
    else if(arr[1] >= arr[0] && arr[1] >= arr[2] && arr[1] >= arr[3])
        {
            console.log(str2);
        }
    else if(arr[2] >= arr[0] && arr[2] >= arr[1] && arr[2] >= arr[3])
        {
            console.log(str3);
        }
    else if(arr[3] >= arr[0] && arr[3] >= arr[1] && arr[3] >= arr[2] )
        {
            console.log(str4);
        }
}
longerString("air","school","car","github");

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(num) {
    if (num % 2 == 0)
        {
            console.log("True");
        }
    else
        {
            console.log("False");
        }
}
isEven(7);

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(num) {
    if (num % 2 != 0) {
        console.log("true");
    }
    else
    {
        console.log("false");
    }
}
isOdd(9);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(num) {
    if(num < 0)
        {
            console.log(num = num * -1);
        }
    else
        {
            console.log(num);            
        }
}
positive(-80);

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(first , last) {
    console.log(first +" " +last);    
}
fullName("hadeel" ,"AL_zoubi");

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(n1,n2,n3,n4,n5) {
    let avg = (n1+n2+n3+n4+n5)/5;
    console.log(avg);
}
average(5,7,9,3,5);

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber() {
    let random = Math.random();
    console.log(random);
}
randomNumber();

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(p1,p2) {
    let random = (Math.random()*p2)+p1;
    console.log(random);
}
randomBetweenNumbers(3,100);

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(p) {
    if (p >= 95 && p <= 100)
        {
            console.log("A");
        }
    else if (p >= 85 && p <= 94)
        {
            console.log("B");
        }
    else if (p >= 70 && p <= 84)
        {
            console.log("C");
        }
    else if (p >= 50 && p <= 69)
        {
            console.log("D");
        }
    else if (p >= 0 && p <= 49)
        {
            console.log("F");
        }
}

scoreInUniversty(96);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

var count = 0;
function counter() {
    console.log(++count);   
}
counter();
counter();
counter();

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter() {
    counter();
    // console.log(count + " and the counter reset now");
    count = 0;
    console.log(count + " and the counter reset now");
}
resetCounter();
counter();
counter();
counter();
resetCounter();
resetCounter();
counter();
counter();
