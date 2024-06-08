

function addsong() {
    let text = document.getElementById("song").value;
    let listsong = document.createElement("p");

    listsong.innerHTML = text;
    listsong.style.border = "solid 2px gray";
    listsong.style.background = "lightgray";
    listsong.style.borderRadius = "5px";
    document.getElementById("songdiv").appendChild(listsong);
    
}