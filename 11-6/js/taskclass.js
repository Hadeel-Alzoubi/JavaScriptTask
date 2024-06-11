const url = "https://66681676f53957909ff67af8.mockapi.io/users/Students";

async function getAya()
{
    const response = await fetch(url);

    const data = await response.json();

    // const aya = data[4];
    
    // console.log(data[4]);
    // console.log(data[4].id);
//   document.getElementById("exampleInputID").innerHTML
    let ayaid = data[4].id;
    document.getElementById("exampleInputID").value = ayaid;

    let ayaname = data[4].name;
    document.getElementById("exampleInputText").value = ayaname;
}

getAya();