// check for errors in the form and alert the user
function validateCform() {

    var form = document.getElementById("contactform");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);

    // get the values from the form to be validated
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;



    if (name == "" || email == "") {
        alert("Please ensure the form is filled out correctly.");
        return;
    }

    if (!email.includes("@", ".")) {
        alert("Ensure the email address is valid.")
        return;
    }

    if (document.getElementById('message').value == "") {
        alert("Please enter a message.")
        return;

    }


    //demo - since we can't use libs such as smtp.js to send the email or phpmailer
    // show alert when there are no errors detected and forces a reload on the page
    alert("We will contact you soon!")
    location.reload();

}