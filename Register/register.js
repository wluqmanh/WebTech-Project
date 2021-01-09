  const auth =  firebase.auth();
  function SignUp(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.messages));

    alert("Your account has been registered successfully");
    setTimeout(function redirects(){window.location.href = "../Register/Login.html"; }, 2000);
  }

  function signOut(){

    auth.signOut();
    alert("Signed Out");
  }

function checkpass(){

  var get_elem = document.getElementById,
  pass1 = document.getElementById('password'),
  pass2 = document.getElementById('password2'),
  pass = true;

  var cond = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if(pass1.value.match(cond)){
    pass = true;
  }

  else{
    pass = false;
    alert("Your password does not fulfill the condition of having at least 1 Capital letter, integer and 8 character.");
    return;
  }

  if(pass1.value === pass2.value && (pass1.value + pass2.value) !== "") {
    pass = true;

  }
  else if(pass2.value !== pass1.value) {
    pass = false;
    alert("Your re-enter password does not same");
    return;
  }

  if(pass){
    SignUp();
  }

}
