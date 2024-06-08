function fontfamily() {
    let x = document.getElementById("font");
    let text = document.getElementById("t");
    if(x.value == "a")
        {
            text.style.fontFamily = "serif";
        }
    else if(x.value == "b")
        {
            text.style.fontFamily = "sans-serif";
        }
    else if(x.value == "c")
        {
            text.style.fontFamily = "monospace";
        }
    else if(x.value == "d")
        {
            text.style.fontFamily = "cursive";
        }

}

function fontsize() {
    let x = document.getElementById("size");
    let text = document.getElementById("t");
    if(x.value == "10")
        {
            text.style.fontSize = "10px";
        }
    else if(x.value == "20")
        {
            text.style.fontSize = "20px";
        }
    else if(x.value == "30")
        {
            text.style.fontSize = "30px";
        }
    else if(x.value == "40")
        {
            text.style.fontSize = "40px";
        }
    else if(x.value == "50")
        {
            text.style.fontSize = "50px";
        }
}

function bold() {
    let x = document.getElementById("b");
    if (x.checked) {
         document.getElementById("t").style.fontWeight = "bold";
    }
}
function italic() {
    let x = document.getElementById("i");
    if (x.checked) {
         document.getElementById("t").style.fontStyle = "italic";
    }
}
function underline() {
    let x = document.getElementById("u");
    if (x.checked) {
         document.getElementById("t").style.textDecoration = "underline";
    }
}

// else if(x.value == "u")
//     {
//         text.style.textDecoration = "underline";
//     }
//     else if(x.value == "i")
//     {
//         text.style.fontStyle = "italic";

//     }