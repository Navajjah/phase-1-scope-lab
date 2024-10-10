// Write your solution in this file!
// Declare customerName in global scope
var customerName = "bob"

//Function to upperCase
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase(); // Change customerName to uppercase
}


var bestCustomer;

//Function to set bestCustomer
function setBestCustomer() {
    return bestCustomer = "not bob"; // Assign 'not bob' to bestCustomer
}

//function to overwrite bestCustomer
function overwriteBestCustomer() {
    return bestCustomer = "maybe bob"; 
}


const leastFavoriteCustomer = "Alice";

// Function to attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = "Bob";
    console.error("cannot change the value of a constant") 
}

