const burger = document.querySelector(".burger")
const mobileNav = document.querySelector(".mobileNav")
const close = document.querySelector(".close")

burger.addEventListener("click" ,() => {
    mobileNav.classList.remove("hide")
})
close.addEventListener("click" ,() => {
    mobileNav.classList.add("hide")
})

// Set the date we're counting down to
const countDownDate = new Date("Sep 30, 2023 11:35:25").getTime();

// Update the count down every 1 second
const countdown = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".days").innerHTML = days
  document.querySelector(".hours").innerHTML = hours
  document.querySelector(".mins").innerHTML = minutes
  document.querySelector(".secs").innerHTML = seconds
 

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = "";
    document.querySelector(".account .text p").innerHTML = "Register Now for new updates"
    document.querySelector(".account .text h2").innerHTML = "Register To Access Courses"
    document.querySelector(".account .text").style.margin = "100px 0"
    document.querySelector(".account .text p").style.margin = "10px"
  }
}, 1000);


