function login(){
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if(user && user.username === username && user.password === password){
    localStorage.setItem("loggedIn", true);
    loadHome(); // <-- redirects to homepage
  } else {
    alert("Invalid credentials");
  }
}
function loadHome(){
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("cartPage").style.display = "none";
  document.getElementById("thankyouPage").style.display = "none";
  document.getElementById("homePage").style.display = "block"; // <-- shows homepage
  renderProducts();
  updateCartCount();
}
