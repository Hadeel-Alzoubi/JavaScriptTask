/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

var x = window.prompt("enter first number");
var y = window.prompt("enter secound number");

if( x > y )
    {
        console.log(x);
    }
else
    {
        console.log(y);
    }
    
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
var x = window.prompt("enter first number");
var y = window.prompt("enter secound number");
var z = window.prompt("enter thered number");

if (x < 0 )
    {
        // console.log(x);
        window.alert(x);
    }
if ( y< 0)
    {
        // console.log(y);
        window.alert(y);
    }
if (z < 0)
    {
        // console.log(z);
        window.alert(z);
    }

    

 /******* End Your Code ********* */

/* 3. Write a JavaScript statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

function task3(x,y,z)
{
    let arr = [] ;

    if (x > y && x > z)
            {
                if (y > z )
                    {
                        window.alert(arr = [x,y,z]);
                    }
                    else
                    {
                        window.alert(arr = [x,z,y]);
                    }
            }
        else if (y > x && y > z)
            {
                if (x > z)
                    {
                        window.alert(arr = [y,x,z]);
                        
                    }
                    else 
                    {
                        window.alert(arr = [y,z,x]);
                    }
        
            }
        else if (z > x && z > y)
                {
                    if (y > x )
                        {
                            window.alert(arr = [z,y,x]);
                        }
                        else 
                        {
                            window.alert(arr = [z,x,y]);
                        }
                   
                }
}

var b = task3(0,-1,4)


 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

var num1 = -5;
var num2 = -2;
var num3 = -6;
var num4 = 0;
var num5 = -1;

if (num1 > num2 && num1 > num3 && num1 >num4 && num1 > num5)
    {
        window.alert(num1);
    }
else if (num2 > num1 && num2> num3 && num2>num4 && num2 > num5)
    {
        window.alert(num2);
    }
else if (num3 > num1 && num3> num2 && num3>num4 && num3 > num5)
    {
        window.alert(num3);
    }
else if (num4 > num1 && num4> num2 && num4>num3 && num4 > num5)
    {
        window.alert(num4);
    }
else if (num5 > num1 && num5> num2 && num5>num3 && num5 > num4)
    {
        window.alert(num2);
    }


 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

var x = window.prompt("enter first number");
var y = window.prompt("enter secound number");

if (x > y)
    {
        window.alert("Hello World");
    }
else
    {
        window.alert("Goodbye");
    }

 /******* End Your Code ********* */

