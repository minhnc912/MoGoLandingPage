// change color navbar
const nav_items = document.querySelectorAll(".nav-item");

const nav_item_active = document.querySelector(".nav-item.active");
const line = document.querySelector(".line");

line.style.left = nav_item_active.offsetLeft + "px";
line.style.width = nav_item_active.offsetWidth + "px";

nav_items.forEach(function (item) {
    item.onclick = function () {
        document.querySelector(".nav-item.active").classList.remove("active");

        line.style.left = item.offsetLeft + "px";
        line.style.width = item.offsetWidth + "px";

        this.classList.add("active");
    };
});

// change slide
const slide_item = document.querySelectorAll(".banner_slide-item");
const slide_list = document.querySelectorAll(".slide_list-item");

const banner_message = document.querySelectorAll(".banner_message");

slide_item.forEach(function (item, index) {
    item.onclick = function () {
        const message = banner_message[index];
        document
            .querySelector(".banner_slide-item.active")
            .classList.remove("active");
        document
            .querySelector(".banner_message.active")
            .classList.remove("active");

        this.classList.add("active");
        message.classList.add("active");
    };
});

// service show content
const serviceItems = document.querySelectorAll(".service_content-header");
const serviceDescription = document.querySelectorAll('.service_content-description')
const angles = document.querySelectorAll(".angle_svg");


serviceItems.forEach(function (item, index) {
    item.onclick = function () {
        const angle = angles[index];
        const content = serviceDescription[index];

        document.querySelector('.service_content-description.active').classList.remove('active');
        document.querySelector('.angle_svg.active').classList.remove('active');

        content.classList.add('active');
        angle.classList.add('active');
    };
});
