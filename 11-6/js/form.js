document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Get form values
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
    // Create an object to hold form data
    var formData = {
      firstName: firstName,
      age: age,
      gender:gender,
      birthdate:birthdate,
      img :img,
      
    };
    var formdata2 = {
      desc:desc,
      major:major,
      html:html,
      css:css,
      js:js,
    };
    var formdata3 ={
      
      number:number,
      num:num
    }
    // Store form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("formdata2",JSON.stringify(formdata2));
    localStorage.setItem("formdata3",JSON.stringify(formdata3));

    console.log("Form data stored in local storage:", formData);
    console.log("Form2 data stored in local storage:", formdata2);
    console.log("Form3 data stored in local storage:", formdata3);

    var storedFormData = localStorage.getItem("formData");
  if (storedFormData) {
    console.log("Form data retrieved from local storage:", JSON.parse(storedFormData));
  } else {
    console.log("No form data found in local storage.");
  }

  var storedFormData2 = localStorage.getItem("formData2");
  if (storedFormData2) {
    console.log("Form2 data retrieved from local storage:", JSON.parse(storedFormData2));
  } else {
    console.log("No form data found in local storage.");
  }

  var storedFormData3 = localStorage.getItem("formData3");
  if (storedFormData3) {
    console.log("Form3 data retrieved from local storage:", JSON.parse(storedFormData3));
  } else {
    console.log("No form data found in local storage.");
  }
  });
  
  // Retrieve and display form data from local storage
  