function scrollToProductCarousel() {
  // Get the section element by its ID
  var productCarousel = document.getElementById("productCarousel");
  // Scroll to the section
  productCarousel.scrollIntoView({ behavior: "smooth" });
}

var lastScrollTop = 0;
window.addEventListener('scroll', function(){
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop){
    // Scroll down
    document.querySelector('.sub-header').classList.add('hidden');
    document.querySelector('.content').style.paddingTop = '0';
  } else {
    // Scroll up
    document.querySelector('.sub-header').classList.remove('hidden');
    document.querySelector('.content').style.paddingTop = '60px'; // Adjust this value to match the height of your header
  }
  lastScrollTop = currentScroll;
});
