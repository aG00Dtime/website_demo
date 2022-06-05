var rate = 0;
var stars = "";


// temp add review to page for demo
function submitRate() {

    var user = document.getElementById('name').value;
    var review = document.getElementById('reviewtext').value;

    if (user != "" && review != "") {

        if (rate == 5) {
            for (i = 0; i < 5; i++) {
                stars += '<i class="fa-solid fa-star"></i>'
            }

        }

        else if (rate == 4) {
            for (i = 0; i < 4; i++) {
                stars += '<i class="fa-solid fa-star"></i>'
            }

        }
        else if (rate == 3) {
            for (i = 0; i < 3; i++) {
                stars += '<i class="fa-solid fa-star"></i>'
            }

        }
        else if (rate == 2) {
            stars = '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> ';

        }
        else if (rate == 1) {
            stars = '<i class="fa-solid fa-star"></i> ';

        }
        else if (rate == 0) {
            stars = '<i class="fa-solid fa-face-frown"></i>';
        }


        var html =

            "<div class ='new slide-up'>" +
            "<br><br>" +
            "<h3 id = 'username'>" + user + "</h3>" +
            "<h3 id = 'rating' class='rating'>" + stars + "</h3>" +
            "<br><hr>" +

            "<p id='review-text'>" + review + "</p>" +

            "<hr></hr>" +
            "</div>"

        document.getElementById('old_reviews').innerHTML += html;
        document.getElementById('name').value = "";
        document.getElementById('reviewtext').value = "";
        stars = "";

        closeForm();


    }
}


// start rating
function startRating(item) {
    rate = item.id[0];
    sessionStorage.star = rate;
    for (var i = 0; i < 5; i++) {
        if (i < rate) {
            document.getElementById((i + 1)).style.color = "yellow";
        }
        else {
            document.getElementById((i + 1)).style.color = "black";
        }
    }
}


// validate review form
function validate() {
    var user = document.getElementById('name').value;
    var review = document.getElementById('reviewtext').value;
    if (user == "" || review == "") {
        alert("Please ensure all fields are filled in.")
        return;
    }

    submitRate();



}

// hide stuff when the review button is clicked
function openForm() {

    document.getElementById("leave-review").style.display = "none";
    document.getElementById("review").style.display = "flex";
    document.getElementById("old_reviews").style.display = "none";
}

function closeForm() {
    document.getElementById("review").style.display = "none";
    document.getElementById("leave-review").style.display = "flex";
    document.getElementById("old_reviews").style.display = "block";
}