document.getElementById("myForm").onclick= function() {


    var firstName = document.getElementById("firstName").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var birthdate = document.getElementById("birthdate").value;
    var img = document.getElementById("img").value;
    var desc = document.getElementById("desc").value;
    var major = document.getElementById("major").value;
    var html = document.getElementById("html").value;
    var css = document.getElementById("css").value;
    var js = document.getElementById("js").value;
    var number = document.getElementById("number").value;
    var num = document.getElementById("num").value;

    let array = [];
    
    if(html.checked)
      {
        array.push("html");
      }
    if(css.checked )
      {
        array.push("css");
      }
    if(js.checked )
      {
        array.push("js");
      }

    var formData = {
      firstName,
      age,
      gender,
      birthdate,
      img ,
      
    };
    var formdata2 = {
      desc,
      major,
      array,
    };
    var formdata3 ={
      
      number,
      num
    }
  
    
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("formdata2",JSON.stringify(formdata2));
    localStorage.setItem("formdata3",JSON.stringify(formdata3));

    console.log("Form data stored in local storage:", formData);
    console.log("Form2 data stored in local storage:", formdata2);
    console.log("Form3 data stored in local storage:", formdata3);

  };
