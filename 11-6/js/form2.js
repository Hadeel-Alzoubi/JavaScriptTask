document.getElementById("firstName").addEventListener("input", (e) => {
  let warning = document.getElementById("firstName-warning");
  if (/[0-9]/.test(e.target.value))
    warning.innerText =
      "Numbers are not allowed";
  else warning.innerText = "";
});
document.getElementById("lastName").addEventListener("input", (e) => {
  let warning = document.getElementById("lastName-warning");
  if (/[0-9]/.test(e.target.value))
    warning.innerText =
      "Numbers are not allowed";
  else warning.innerText = "";
});
document.getElementById("birthDate").addEventListener("input", (e) => {
  let warning = document.getElementById("birthDate-warning");
  if (
    !/(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}/.test(
      e.target.value
    )
  )
    warning.innerText = "The format should be dd/mm/yyyy";
  else warning.innerText = "";
});
let email = document.getElementById("email");
email.addEventListener("input", (e) => {
  let warning = document.getElementById("email-warning");
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value))
    warning.innerText = "The E-mail is not valid";
  else warning.innerText = "";
});
document.getElementById("confirmEmail").addEventListener("input", (e) => {
  let warning = document.getElementById("confirmEmail-warning");
  if (email.value != e.target.value)
    warning.innerText = "Emails don't match";
  else warning.innerText = "";
});
let password = document.getElementById("password");

document.getElementById("confirmPassword").addEventListener("input", (e) => {
    let warning = document.getElementById("confirmPassword-warning");
    if (password.value != e.target.value)
      warning.innerText = "Passwords don't match";
    else warning.innerText = "";
  });