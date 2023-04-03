// change color navbar 
const nav_items = document.querySelectorAll('.nav-item');

const nav_item_active = document.querySelector('.nav-item.active');
const line = document.querySelector(".line");

line.style.left = nav_item_active.offsetLeft + "px";
line.style.width =  nav_item_active.offsetWidth + "px";

nav_items.forEach(function(item) {
    item.onclick = function() {
        document.querySelector(".nav-item.active").classList.remove("active");

        line.style.left = item.offsetLeft + "px";
        line.style.width = item.offsetWidth + "px";

        this.classList.add('active');
    }
})

// change color slide 
const slide_item = document.querySelectorAll(".banner_slide-item");
const slide_list = document.querySelectorAll(".slide_list-item");

slide_item.forEach(function(item) {
    item.onclick = function() {
        document.querySelector('.banner_slide-item.active').classList.remove('active');

        this.classList.add('active');
    }
})

