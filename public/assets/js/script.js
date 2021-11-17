/* Fixed header */
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.innerWidth > 992) {
    if (window.pageYOffset > 40 ) {
      nav.classList.add('bg-white');
      $('.navbar-brand img').attr('src','/assets/img/scriptics_wht_bg.svg');
    } else {
      nav.classList.remove('bg-white');
      $('.navbar-brand img').attr('src','/assets/img/Scriptics_bg_logo.svg');
    }
  }
  else{
    $('.navbar-brand img').attr('src','/assets/img/scriptics_wht_bg.svg');
  }
});
document.addEventListener("DOMContentLoaded", function(){
  if (window.innerWidth > 992) {
    
    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
  
      everyitem.addEventListener('mouseover', function(e){
  
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
          nextEl.classList.add('show');
        }
      });
      everyitem.addEventListener('mouseleave', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
  
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
          nextEl.classList.remove('show');
        }
      })
    });
  }
}); 





//Emaljs Script
$( ".footer-email" ).on( "keyup", function() {
  var email = $(".footer-email").val();
  console.log('!!');
  if(IsEmail(email)==false){
    $(".email-tip").addClass("invalid");
    $(".email-tip").html("!Please enter valid mail").css("color", "red");
  }
  else{
    $(".email-tip").removeClass("invalid");
    $(".email-tip").html("");
  }
});
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
 }else{
    return true;
 }
}

