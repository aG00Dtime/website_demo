let images = document.querySelectorAll(".gallery-img");
let cur_image;

if (images) {

    images.forEach(function (image, index) {

        image.onclick = function () {

            let css_element = window.getComputedStyle(image);

            let get_image_full_path = css_element.getPropertyValue("background-image");

            let get_image_path = get_image_full_path.split("/assets/gallery-background/thumbnails/");


            let set_image_path = get_image_path[1].replace('")', "");

            cur_image = index + 1;

            let image_container = document.body;

            let popup_window = document.createElement("div");

            image_container.appendChild(popup_window);

            popup_window.setAttribute("class", "img-window");
            popup_window.setAttribute("onclick", "closeImage()");

            let clicked_image = document.createElement("img");

            popup_window.appendChild(clicked_image);


            clicked_image.setAttribute("src", "../assets/gallery-background/" + set_image_path);





        }

    });
}


function closeImage() {

    document.querySelector(".img-window").remove();



}