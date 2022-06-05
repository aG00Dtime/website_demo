// check for errors in the form and alert the user
function validateRform() {

    var form = document.getElementById("reservationForm");

    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);

    // get the values from the form to be validated
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    if (name == " " || email == " " || phone == "" || from == " " || to == " ") {
        alert("Please ensure the form is filled out correctly.");
        return;
    }

    if (!email.includes("@", ".")) {
        alert("Ensure the email address is valid.")
        return;
    }

    if (isNaN(phone)) {
        alert("Ensure the phone number is valid.")
        return;
    }

    //demo - I'd use smptp.js to send the email but we can use libs for that
    // show alert when there are no errors detected and forces a reload on the page
    alert("We will contact you soon!")
    location.reload();

}