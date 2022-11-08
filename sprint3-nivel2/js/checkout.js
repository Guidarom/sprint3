
// Exercise 6
// Get the input fields
const form =document.getElementById("form")
const userName = document.getElementById("fName");
const email = document.getElementById("fEmail");
const address = document.getElementById("fAddress");
const lastName = document.getElementById("fLastN");
const password = document.getElementById("fPassword");
const phoneNumber = document.getElementById("fPhone");

function validate(){ 
form.addEventListener('submit',e=>{
	/* validate();  */
	let error=0
	const nameValue  = userName.value.trim();
	const emailValue = email.value.trim();
	const addressValue = address.value.trim();
	const lastNameValue = lastName.value.trim();
	const passwordValue = password.value.trim();
	const phoneNumberValue = phoneNumber.value.trim();

	const regEx = {
		regNames: /^[A-Za-z\s]*$/,
		regEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
		regPassword: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/,
	}

// Validate fields entered by the user: name, phone, password, and email
    
	userName.classList.remove("is-invalid");
	lastName.classList.remove("is-invalid");
	email.classList.remove("is-invalid");
	password.classList.remove("is-invalid");
	address.classList.remove("is-invalid");
	phoneNumber.classList.remove("is-invalid");

	if(nameValue == "" || nameValue.length < 3|| !nameValue.match(regEx.regNames)){
    userName.classList.add("is-invalid");
    error++;
	}
	
    

	if(lastNameValue == "" || lastNameValue.length < 3 || !nameValue.match(regEx.regNames)){
    lastName.classList.add("is-invalid");
    error++;
	}
		
	if(emailValue.value == "" || emailValue.length < 3|| !emailValue.match(regEx.regEmail)){
    email.classList.add("is-invalid");
    error++;
	}
    
	if(passwordValue == "" || passwordValue.length < 4||!passwordValue.match(regEx.regPassword)){
    password.classList.add("is-invalid");
    error++;
	}
	
	if(addressValue == "" || addressValue.length < 3 ){
    address.classList.add("is-invalid");
    error++;
	}
    
	
	if(phoneNumberValue == "" || phoneNumberValue.length!= 9 ){
    phoneNumber.classList.add("is-invalid");
    error++;
	}
    
	
	if(error>0){
		e.preventDefault(); 		
    return false;
	}else{
    return true;
    }
});
}













