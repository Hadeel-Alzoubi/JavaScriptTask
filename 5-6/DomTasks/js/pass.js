// * Passwords must be at least 6 characters long.
//     * The two passwords must match.
//   - By default the submit button should be hidden. Display the button only when there are no errors.

function checkpass() {
    let pass = document.getElementById("pass");
    let confirm = document.getElementById("confirm");
    let errormatch = document.querySelector('.errormatch');
    let errorlin = document.querySelector('.errorlin');
    let btn = document.getElementById("btn");
    
    if (pass.value.length < 6) {
        errorlin.style.display = 'inline';
    }
    else
    {
        errorlin.style.display = 'none'

        if(confirm.value === pass.value){

            btn.style.display='inline';
            errormatch.style.display ='none'

        }
        else
        {
            btn.style.display='none';
            errormatch.style.display ='inline'
        }
    }
    
}
function borderpass() {
    
    document.getElementById("pass").style.boxShadow = "3px 3px 3px 3px blue";
}
function borderconfirm()
{
    document.getElementById("confirm").style.boxShadow = "3px 3px 3px 3px blue";
}
