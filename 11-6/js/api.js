const data = 'https://66681676f53957909ff67af8.mockapi.io/users/Animals'

const img = document.getElementById('image')
const myselect =  document.getElementById("myselect")


async function animal() {
    const response = await fetch(data)

    var jsondata = await response.json()

    document.getElementById("image").src = jsondata[0].image;

    for (let i = 0; i < jsondata.length; i++)
        {
            var option = document.createElement('option');
            option.textContent = jsondata[i].name;
            myselect.appendChild(option);
        }

}

async function myimg(){

    const response = await fetch(data)
    console.log(response)
    const jsondata = await response.json()
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
