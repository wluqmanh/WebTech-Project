const auth =  firebase.auth();
function SignIn(){

		var email = document.getElementById("email");
		var password = document.getElementById("password");

		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));

}

	function signOut(){

		auth.signOut();
		alert("Signed Out");
    return;
	}


auth.onAuthStateChanged(function(user){

		if(user){

			var email = user.email;
			alert("Active User " + email);
      window.location.href = "../Home/Home.html";



		}else{

			alert("No Active User");

		}
	});
