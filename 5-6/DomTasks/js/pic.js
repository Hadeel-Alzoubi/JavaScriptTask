function f() {   
    let x = document.getElementById("flag");
    let no = document.getElementById("no");
    
    if(x.value == "jo")
        {
            no.src = "/pic/jordan.png";
        }
    else if(x.value == "pa")
        {
            no.src = "/pic/palestine.jpg"
        }
    else if(x.value == "al")
        {
            no.src = "/pic/algeria.png"
        }
    else if(x.value == "le")
        {
            no.src = "/pic/lebanon.png"
        }
    else if(x.value == "no")
        {
            no.src = "/pic/nopic.png"
        }
        
    
}
// document.getElementById("flag").addEventListener("onchange" ,flag()) ;