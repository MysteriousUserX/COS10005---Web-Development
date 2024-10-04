// filename: script.js
// Javascript functions for Sweet Life page
// Author: Nguyen Duc Tam


// ============= JavaScript for navigation tabs ==================

// Get the current pathname from the browser window
const pathName = window.location.pathname;

// Extract the name of the current page from the pathname
const pageName = pathName.split("/").pop();

// Define a function to set the active link in the navigation menu
function setActiveLink(page) {
    // Select all elements with a class matching the provided page name followed by "Menu"
    const menus = document.querySelectorAll("." + page + "Menu");
    // If such elements exist
    if (menus.length > 0) {
        // Iterate over each element
        menus.forEach(menu => {
            // Add the "activeLink" class to the element
            menu.classList.add("activeLink");
        });
    }
}

// Use a switch statement to determine which page is currently being viewed and set the active link accordingly
switch (pageName) {
    case "index.html":
        // If the current page is index.html, set the active link for the "index" page
        setActiveLink("index");
        break;
    case "register.html":
        // If the current page is register.html, set the active link for the "register" page
        setActiveLink("regis");
        break;
    case "order.html":
        // If the current page is order.html, set the active link for the "order" page
        setActiveLink("order");
        break;
    case "features.html":
        // If the current page is features.html, set the active link for the "features" page
        setActiveLink("features");
        break;
    default:
        // If the current page doesn't match any of the cases, do nothing
        break;
}


// Toggle hamburger menu open/close
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// ============= JavaScript for register.html page ==================

// Validate registration form
function validateForm() {
    // create a boolean to check whether the form is wrong
    var isValid = true;
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var genderM = document.getElementById('genderm').checked;
    var genderF = document.getElementById('genderf').checked;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;
    var favIce = document.getElementById('fav-ice').value;
    var conditions = document.getElementById('conditions').checked;
    var firstNameError = document.getElementById('firstname-error');
    var lastNameError = document.getElementById('lastname-error');
    var genderError = document.getElementById('gender-error');
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');
    var repasswordError = document.getElementById('repassword-error');
    var favIceError = document.getElementById('favice-error');
    var conditionsError = document.getElementById('conditions-error');

    firstNameError.textContent = '';
    lastNameError.textContent = '';
    genderError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    repasswordError.textContent = '';
    favIceError.textContent = '';
    conditionsError.textContent = '';

    // check if the inputs are in the right format and print out error message
    if (firstName.trim() === '') {
        isValid = false;
        firstNameError.textContent = 'First name cannot be blank.';
    }

    if (lastName.trim() === '') {
        isValid = false;
        lastNameError.textContent = 'Last name cannot be blank.';
    }

    if (!genderM && !genderF) {
        isValid = false;
        genderError.textContent = 'Please select your gender.';
    }

    if (email.trim() === '') {
        isValid = false;
        emailError.textContent = 'Email cannot be blank.';
    }

    if (password.length < 9) {
        isValid = false;
        passwordError.textContent = 'Password must be at least 9 characters long.';
    }

    if (password !== repassword) {
        isValid = false;
        repasswordError.textContent = 'Passwords do not match.';
    }

    if (favIce === '') {
        isValid = false;
        favIceError.textContent = 'Please select your favorite ice cream.';
    }

    if (!conditions) {
        isValid = false;
        conditionsError.textContent = 'You must agree to our Terms and conditions and Privacy policy in order to continue.';
    }

    if (!isValid) {
        // Form has errors, prevent submission
        return false;
    }

    // Form is valid
    return true;
}

// ============= JavaScript for order.html page ==================

// Toggle delivery address open/close
function showDeliveryAddressField() {
    var orderType = document.getElementById('orderType').value;
    var deliveryAddress = document.getElementById('deliveryAddress');
    
    if (orderType === 'delivery') {
        deliveryAddress.innerHTML = `
            <label for="deliveryAddressInput" class="orderLabel">Delivery Address:</label>
            <input type="text" id="deliveryAddressInput" name="deliveryAddress">
            <span id="deliveryAddressError" class="error"></span>
            <label for="postCode" class="orderLabel">Postal Code:</label>
            <input type="text" name="postcode" id="postCode">
            <span id="postcodeError" class="error"></span>
            <div id="billingCheck">
                <input type="checkbox" id="sameAsDelivery" onchange="copyDeliveryAddress()">
                <label for="sameAsDelivery" class="la-terms">Billing Address is the same as Delivery Address</label>
            </div>
            <hr>
        `;
    } else {
        deliveryAddress.innerHTML = ''; // Clear the content
    }
}

// Toggle credit card open/close
function showCreditCardField() {
    var paymentMethod = document.getElementById('paymentMethod').value;
    var creditCardInfo = document.getElementById('creditCardInfo');
    if (paymentMethod === 'payOnline') {
        creditCardInfo.innerHTML = `
            <label for="creditCardType" class="orderLabel">Credit Card Type:</label>
            <select id="creditCardType" name="creditCardType">
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="amex">American Express</option>
            </select>
            <br>
            <label for="creditCardNumber" class="orderLabel">Credit Card Number:</label>
            <input type="text" id="creditCardNumber" name="creditCardNumber">
            <span id="creditCardNumberError" class="error"></span>
        `;
    } else {
        creditCardInfo.innerHTML = ''; // Clear the content
    }
}

// Copy delivery address to billing address when the checkbox is checked
function copyDeliveryAddress() {
    var sameAsDeliveryCheckbox = document.getElementById('sameAsDelivery');
    var deliveryAddressInput = document.getElementById('deliveryAddressInput');
    var billingAddressInput = document.getElementById('billingAddressInput');
    if (sameAsDeliveryCheckbox.checked) {
        if (deliveryAddressInput.value.trim() === '') {
        alert("Please enter your delivery address first.");
        sameAsDeliveryCheckbox.checked = false;
        } else {
        billingAddressInput.value = deliveryAddressInput.value;
        }
    } else {
        billingAddressInput.value = '';
    }
}

// Validate Order Page
function validateOrder() {
    var orderType = document.getElementById('orderType').value;
    var billingAddress = document.getElementById('billingAddressInput').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var paymentMethod = document.getElementById('paymentMethod').value;
    var isValid = true;

    // Validate billing address
    if (orderType === 'delivery') {
        var deliveryAddress = document.getElementById('deliveryAddressInput').value;
        var postCode = document.getElementById('postCode').value;

        if (!deliveryAddress.trim()) {
            document.getElementById('deliveryAddressError').innerHTML = "Delivery address is required";
            isValid = false;
        } else {
            document.getElementById('deliveryAddressError').innerHTML = "";
        }

        if (!postCode.trim() || !/^\d{4}$/.test(postCode.trim())) {
            document.getElementById('postcodeError').innerHTML = "Postal code must be 4 digits";
            isValid = false;
        } else {
            document.getElementById('postcodeError').innerHTML = "";
        }

        if (document.getElementById('sameAsDelivery').checked) {
            document.getElementById('billingAddressInput').value = deliveryAddress;
        }
    }

    // Validate billing address
    if (!billingAddress.trim()) {
        document.getElementById('billingAddressError').innerHTML = "Billing address is required";
        isValid = false;
    } else {
        document.getElementById('billingAddressError').innerHTML = "";
    }

    // Validate contact number
    if (!contactNumber.trim()) {
        document.getElementById('contactNumberError').innerHTML = "Contact number is required";
        isValid = false;
    } else {
        document.getElementById('contactNumberError').innerHTML = "";
    }


    // Validate credit card number if payment method is pay online
    if (paymentMethod === 'payOnline') {
        var creditCardType = document.getElementById('creditCardType').value;
        var creditCardNumber = document.getElementById('creditCardNumber').value;
        var expectedLength = (creditCardType === 'amex') ? 15 : 16;
        if (!creditCardNumber.trim() || creditCardNumber.trim().length !== expectedLength || !(/^\d+$/.test(creditCardNumber.trim()))) {
            document.getElementById('creditCardNumberError').innerHTML = "Credit card number must be " + expectedLength + " digits";
            isValid = false;
        } else {
            document.getElementById('creditCardNumberError').innerHTML = "";
        }
    }
    return isValid;
}






