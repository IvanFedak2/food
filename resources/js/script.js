$(document).ready(() => {
  /* For the sticky Navigation */
  $('.js--section-features').waypoint((direction) => {
    if (direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px',
  });

  /* Scroll on buttons */
  $('.js--scroll-to-plan').click(() => {
    $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
  });
  $('.js--scroll-to-start').click(() => {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
  });
  /*   navigation Scroll */

  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
    // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      && location.hostname == this.hostname
      ) {
      // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top,
          }, 1000, () => {
          // Callback after animation
          // Must change focus!
            const $target = $(target);
            $target.focus();
            if ($target.is(':focus')) { // Checking if the target was focused
              return false;
            }
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          });
        }
      }
    });

  /*   Animations on Scroll  */
  $('.js--wp-1').waypoint((direction) => {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '40%',
  });

  $('.js--wp-2').waypoint((direction) => {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '40%',
  });

  $('.js--wp-3').waypoint((direction) => {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '40%',
  });

  $('.js--wp-4').waypoint((direction) => {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '40%',
  });

  $('.js--wp-5').waypoint((direction) => {
    $('.js--wp-5').addClass('animated rollIn');
  }, {
    offset: '40%',
  });
});