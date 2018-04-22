// email validation using regex code
const filterEmail = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/

// Password validation RegEx for JavaScript
//
// Passwords must be
// At least 8 characters long, max length anything
// Include at least 1 lowercase letter
// 1 capital letter
// 1 number
// 1 special character => !@#$%^&*
const filterPws = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
