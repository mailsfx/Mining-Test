// ================  burger menu ============
const burger = document.querySelector('.burger-btn');
const menu = document.querySelector('.top_menu_list');
burger.addEventListener('click',()=>{
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
});

function fn_close(){
    burger.classList.remove('_active');
    menu.classList.remove('_active');
}


// ================= scroll-position ==================
const upArrow = document.querySelector('.up-arrow');

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 600)
    upArrow.classList.add('_active');
  else
    upArrow.classList.remove('_active');

});

// ================= anchor-links ==================
const anchors = document.querySelectorAll('a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');

     // console.log(anchorId);

      if (anchorId != "#")
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      });
    });
  }
}













