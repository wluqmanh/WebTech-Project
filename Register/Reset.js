const auth =  firebase.auth();
function Reset(){

		var email = document.getElementById("email");
		var password = document.getElementById("password");

		const promise = auth.sendPasswordResetEmail(email.value);
		promise.catch(e => alert(e.message));
		alert("A link of Password reset has been sent to your email");


}
