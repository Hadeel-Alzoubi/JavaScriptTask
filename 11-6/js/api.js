const data = 'https://66681676f53957909ff67af8.mockapi.io/users/Animals'
const img = document.getElementById('image')
const myselect =  document.getElementById("myselect")
console.log('hi')

async function ani() {
    const res = await fetch(data)
    console.log(res)
    var jsondata = await res.json()
    console.log(jsondata)
    for (let i = 0; i<jsondata.length; i++)
        {
            var option = document.createElement('option');
            option.textContent = jsondata[i].name;
            myselect.appendChild(option);
        }

}

async function myimg(){
    const res = await fetch(data)
    console.log(res)
    const jsondata = await res.json()
    console.log(jsondata)
    for (let i = 0 ; i< jsondata.length; i++)
    {
        if (myselect.value == jsondata[i].name)
            {
                img.src = jsondata[i].image
            }
    }

}
myimg()