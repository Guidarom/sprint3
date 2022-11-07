
// Exercise 6
// Get the input fields
const form =document.getElementById("form")
const userName = document.getElementById("fName");
const email = document.getElementById("fEmail");
const address = document.getElementById("fAddress");
const lastName = document.getElementById("fLastN");
const password = document.getElementById("fPassword");
const phoneNumber = document.getElementById("fPhone");

form.addEventListener('submit',e=>{
	e.preventDefault(); 
	validate();
}); 

function validate(){
	let error=0
	const nameValue  = userName.value.trim();
	const emailValue = email.value.trim();
	const addressValue = address.value.trim();
	const lastNameValue = lastName.value.trim();
	const passwordValue = password.value.trim();
	const phoneNumberValue = phoneNumber.value.trim();

// Validate fields entered by the user: name, phone, password, and email

	if(nameValue == "" || nameValue.length < 3 ){
    userName.classList.add("is-invalid");
    error++;
	}
	else{
    userName.classList.remove("is-invalid");
	}
	if(lastNameValue == "" || lastNameValue.length < 3 ){
    lastName.classList.add("is-invalid");
    error++;
	}
	else{
    lastName.classList.remove("is-invalid");
	
	}
	if(emailValue.value == "" || emailValue.length < 3){
    email.classList.add("is-invalid");
    error++;
	}
	else{
    email.classList.remove("is-invalid");
	}

	if(passwordValue == "" || passwordValue.length < 4){
    password.classList.add("is-invalid");
    error++;
	}
	else{
    password.classList.remove("is-invalid");
	}
	if(addressValue == "" || addressValue.length < 3 ){
    address.classList.add("is-invalid");
    error++;
	}
	else{
    address.classList.remove("is-invalid");
	}
	if(phoneNumberValue == "" || phoneNumberValue.length!= 9 ){
    phoneNumber.classList.add("is-invalid");
    error++;
	}
	else{
    phoneNumber.classList.remove("is-invalid");
	}

	if(error>0){
    return false;
	}else{
    userName.classList.remove("is-invalid");
    lastName.classList.remove("is-invalid");
    address.classList.remove("is-invalid");
    email.classList.remove("is-invalid");
    password.classList.remove("is-invalid");
    phoneNumber.classList.remove("is-invalid");
    
    return true;
    }
}















/* function validate() {
	var error = 0;
	
	
	
	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(Name.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

} */
