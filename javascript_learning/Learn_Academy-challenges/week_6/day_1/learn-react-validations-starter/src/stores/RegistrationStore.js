class RegistrationStore{
	constructor(){
		this.fields = {
			firstName: "",
			lastName: "",
			email: "",
			password: ""
 		}
		this.errors = {}
	}

	getFields(){
		return this.fields;
	}

	getErrors(){
		return this.errors;
	}

	validate(){
		const pwsField = this.fields.password;
		this.errors = {};
		this.validatePresence("firstName");
		this.validatePresence("lastName");
		this.validatePassword("password");
		this.validateEmail("email");

	}

	validatePresence(fieldName){
		if (this.fields[fieldName] === ""){
			this.addError(fieldName, "is required");
		}
	}

	validatePassword(fieldName){
		const filter =  /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

			if (!filter.test(this.fields[fieldName])){
				this.addError(fieldName, "must meet password requirements")
		}
	}

	validateEmail(fieldName){
		const filter =  /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
		if (!filter.test(this.fields[fieldName])){
			this.addError(fieldName, "is not an email")
		}
	}

	addError(fieldName, message){
		this.errors[fieldName] = message;
	}
}

const store = new RegistrationStore();
export default store;
