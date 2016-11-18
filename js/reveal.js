window.addEventListener("scroll",
function() { 
   if(window.scrollY > 800) {
      console.log(scrollY);
       $('.form-container').slideDown();
   }
   else {
      $('.form-container').slideUp();
   }
},false);
