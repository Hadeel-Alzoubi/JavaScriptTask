document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var bdate = document.getElementById("bdate").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    // Validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/; // At least 8 characters, one uppercase, one lowercase, one number, one special character
    
    // Check validation
    var errors = [];
    if (!firstName.trim()) {
      errors.push("First name is required.");
    }
    if (!lastName.trim()) {
      errors.push("Last name is required.");
    }
    if (!bdate.match(/^\d{4}-\d{2}-\d{2}$/)) {
      errors.push("Birth date must be in YYYY-MM-DD format.");
    }
    if (!emailRegex.test(email)) {
      errors.push("Invalid email format.");
    }
    if (email !== confirmEmail) {
      errors.push("Emails do not match.");
    }
    if (!password.match(passwordRegex)) {
      errors.push("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
    }
    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }
    
    // Display errors or store form data
    if (errors.length > 0) {
      var errorDiv = document.getElementById("errors");
      errorDiv.innerHTML = errors.join("<br>");
      errorDiv.classList.add("error");
    } else {
      // Create an object to hold form data
      var formData = {
        firstName: firstName,
        lastName: lastName,
        bdate: bdate,
        email: email,
        password: password
      };
    
      // Store form data in local storage
      localStorage.setItem("formData", JSON.stringify(formData));
    
      console.log("Form data stored in local storage:", formData);
      
      // Clear errors
      var errorDiv = document.getElementById("errors");
      errorDiv.innerHTML = "";
      errorDiv.classList.remove("error");
    }
  });
  
  // Retrieve and display form data from local storage
  var storedFormData = localStorage.getItem("formData");
  if (storedFormData) {
    console.log("Form data retrieved from local storage:", JSON.parse(storedFormData));
  } else {
    console.log("No form data found in local storage.");
  }