const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const interval_time = 5000;
let slide_interval;
const next_slide = () => {
  //gets current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for next child
  if (current.nextElementSibling) {
    //add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prev_slide = () => {
  //gets current class
  const current = document.querySelector(".current");
  //remove current class
  current.classList.remove("current");
  //check for prev child
  if (current.previousElementSibling) {
    //add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    //add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//button event
next.addEventListener("click", (e) => {
  next_slide();
  if(auto){
    clearInterval(slide_interval);
    slide_interval = setInterval(next_slide, interval_time);
  }
});
prev.addEventListener("click", (e) => {
  prev_slide();
  if(auto){
    clearInterval(slide_interval);
    slide_interval = setInterval(next_slide, interval_time);
  }
});

//auto slide
if(auto){
  //run next slide at interval time
  slide_interval = setInterval(next_slide, interval_time)
}
export {next_slide}
export {prev_slide}