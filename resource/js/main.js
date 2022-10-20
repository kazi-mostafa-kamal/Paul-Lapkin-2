function openNav() {
    document.getElementById("mk").style.width = "40%";
  }

  function closeNav() {
    document.getElementById("mk").style.width = "0";
};
  

var mixer = mixitup('.list-container');
$(document).ready(function () {
   
    let mybutton = document.getElementById("top-up");


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }


    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

  
});
