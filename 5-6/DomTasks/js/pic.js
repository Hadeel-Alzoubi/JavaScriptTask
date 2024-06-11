function f() {   
    let x = document.getElementById("flag");
    let no = document.getElementById("no");
    
    if(x.value == "jo")
        {
            no.src = "/DomTasks/pic/jordan.png";
        }
    else if(x.value == "pa")
        {
            no.src = "/DomTasks/pic/palestine.jpg"
        }
    else if(x.value == "al")
        {
            no.src = "/DomTasks/pic/algeria.png"
        }
    else if(x.value == "le")
        {
            no.src = "/DomTasks/pic/lebanon.png"
        }
    else if(x.value == "no")
        {
            no.src = "/DomTasks/pic/nopic.png"
        }
        
    
}
// document.getElementById("flag").addEventListener("onchange" ,flag()) ;