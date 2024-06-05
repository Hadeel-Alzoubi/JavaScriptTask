
 /* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

var result = window.prompt("Enter the GBA");
if (result >= 90 && result <= 100)
    {
        console.log( "A");
    }
else if (result >= 80 && result <= 89)
    {
        console.log( "B");
    }
else if(result >= 70 && result <= 79)
    {
        console.log( "C");
    }
else if(result >= 60 && result <= 69)
    {
        console.log( "D");
    }
else if (result >= 50 && result <= 59)
    {
        console.log( "E");
    }
else 
    {
        console.log( "Fail");
    }