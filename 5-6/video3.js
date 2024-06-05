function font_family()
{
    var x=document.getElementById("font-family").value;
    if(x=="cursive"){
        document.getElementById("text").style.fontFamily="cursive";
    }else if(x=="fantasy"){
        document.getElementById("text").style.fontFamily="fantasy";
    }
    else if(x=="Arial, Helvetica, sans-serif"){
        document.getElementById("text").style.fontFamily="Arial, Helvetica, sans-serif";
    }
    else if(x=="serif"){
        document.getElementById("text").style.fontFamily="serif";
    }
}

function fontsize()
{
    var x=document.getElementById("font-size").value;
            if(x=="20px"){
                document.getElementById("text").style.fontSize="20px";
            }
            else if(x=="50px"){
                document.getElementById("text").style.fontSize = "50px";
            }
}

function Bold(){
    var x=document.getElementById("bold");
    if(x.checked)
    document.getElementById("text").style.fontWeight = "bold";
    else{
        document.getElementById("text").style.fontWeight = "normal";}
}

function Italic()
{
    var x = document.getElementById("italic");
    if(x.checked)
            document.getElementById("text").style.fontStyle = "italic";
        else
        {
            document.getElementById("text").style.fontStyle = "normal";
        }
}

function underline()
{
    var x = document.getElementById("underline");
    if(x.checked)
        {
            document.getElementById("text").style.textDecoration = "underline";
        }
}