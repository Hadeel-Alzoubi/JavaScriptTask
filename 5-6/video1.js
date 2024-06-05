function video1 ()
{
    document.getElementById("video1").innerHTML = "Hello World !";
}
function v1 ()
{
    document.getElementById("video1").innerHTML = "Can i help You ?";
}
document.getElementById('video1').addEventListener("mouseover", video1);
document.getElementById('video1').addEventListener("mouseleave", v1);