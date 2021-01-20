// stickup.min.js plugin code start
  jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
  });
  // stickup.min.js plugin code end
  
  // justflip.js plugin code start
  $('.img-flip').justFlipIt({
  });
// justflip.js plugin code end

// typed.js plug in code start

var typed3 = new Typed('.balance', {
  strings: ['agility with stability!'],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true, // this is a default
  loop: true
}); 

var typed3 = new Typed('.ready', {
  strings: ['to get started?'],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true, // this is a default
  loop: true
});
// typed.js plug in code end

// wow.js plug in code start
  new WOW().init();
// wow.js plug in code end



// magnifik.min.js plugin code start

  $('.example').magnifik({
    ratio: 0.5
  });


// magnifik.min.js plugin code end


  