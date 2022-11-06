
	/* *********** Modal Naruci ************ */

	var elements = $('.modal-overlay, .modal123');

	$('span').click(function(){
	    elements.addClass('active');
	});

	$('.close-modal').click(function(){
	    elements.removeClass('active');
	});

  	/* *********** Go to Top Dugme ************ */

    mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }


    function topFunction() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
    }



	/* *********** Lagano skrol ************ */
	
	$(document).ready(function(){

	  $("a").on('click', function(event) {


	    if (this.hash !== "") {

	      event.preventDefault();

	      var hash = this.hash;


	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){

	       
	        window.location.hash = hash;
	      });
	    } 
	  });
	});
