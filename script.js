
let index = 0;

function nextTestimonial(){

let items = document.querySelectorAll(".testimonial");

items[index].classList.remove("active");

index = (index + 1) % items.length;

items[index].classList.add("active");

}
