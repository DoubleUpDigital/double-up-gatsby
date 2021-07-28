(function(){ var s = document.createElement('script'), e = ! document.body ? document.querySelector('head') : document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init({ statementLink : '', footerHtml : '', hideMobile : false, hideTrigger : false, language : 'en', position : 'right', leadColor : '#146FF8', triggerColor : '#146FF8', triggerRadius : '50%', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerOffsetX : 10, triggerOffsetY : 10, triggerRadius : '50%' } }); }; e.appendChild(s); }());


// FORM BUTTONS
var gformButtons = document.querySelectorAll('.gravityform:not(.gravityform--id-2) .gform_button');
var arrow = '<span class="orb"><i class="far fa-long-arrow-right"></i></span>';

Array.from(gformButtons).forEach(function (item) {
  item.insertAdjacentHTML('beforeend', arrow);
});

var gformButtonsSimple = document.querySelectorAll('#gravityform--id-2 .gform_button');
var arrowSimple = '<i class="far fa-long-arrow-right"></i>';

Array.from(gformButtonsSimple).forEach(function (item) {
  item.innerHTML = arrowSimple;
});





jQuery(document).ready(function($) {

  // FOOTER ACCORDION ON MOBILE
  var windowWidth = $( window ).width();
  if(windowWidth < 769) {
    $('.site-footer__cols-list .site-footer__list').hide();
    $('.site-footer__cols-list-1 .site-footer__list-label').click(function() {
      $(this).toggleClass('active');
      $('.site-footer__cols-list-1 .site-footer__list').slideToggle();
    });
    $('.site-footer__cols-list-2 .site-footer__list-label').click(function() {
      $(this).toggleClass('active');
      $('.site-footer__cols-list-2 .site-footer__list').slideToggle();
    });
    $('.site-footer__cols-list-3 .site-footer__list-label').click(function() {
      $(this).toggleClass('active');
      $('.site-footer__cols-list-3 .site-footer__list').slideToggle();
    });
  }

  // ---------------------------------------------------------------------------

  // GRAVITY FORM PLACEHOLDERS
  if(windowWidth < 480) {
    $('#gravityform--id-4 input[type="email"]').attr('placeholder', 'Email address');
  }

  // ---------------------------------------------------------------------------

  // TEAMGRID COMPONENT

  // Show an element
  var show = function (elem) {
    elem.style.display = 'block';
  };
  // Hide an element
  var hide = function (elem) {
    elem.style.display = 'none';
  };

  // Toggle element visibility
  var toggle = function (elem) {
    // If the element is visible, hide it
    if (window.getComputedStyle(elem).display === 'block') {
      hide(elem);
      return;
    }
    // Otherwise, show it
    show(elem);
  };

  // Listen for click events
  document.addEventListener('click', function (event) {

    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggle(content);

  }, false);



  $('.teamGrid__info_single.joel-mehler').hide();
  $('.teamGrid__info_single.alyssa-wychers').hide();
  $('.teamGrid__info_single.avery-williams').hide();

  $(document).on('click', '.teamGrid__names_single.justin-radomski', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.justin-radomski').show();

    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
    $('.teamGrid__info_single.avery-williams').hide();
  });

  $(document).on('click', '.teamGrid__names_single.joel-mehler', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.joel-mehler').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
    $('.teamGrid__info_single.avery-williams').hide();
  });

  $(document).on('click', '.teamGrid__names_single.alyssa-wychers', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.alyssa-wychers').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.avery-williams').hide();
  });

  $(document).on('click', '.teamGrid__names_single.avery-williams', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.avery-williams').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
  });

  // TeamGrid Mobile
    $('.teamGrid__accordion .teamGrid__accordion-item .teamGrid__accordion-content').hide();
      $(document).on('click', '.teamGrid__accordion .teamGrid__accordion-item .teamGrid__accordion-title', function(){
      $(this).parent().toggleClass('active');
      $(this).siblings('.teamGrid__accordion-content').slideToggle(300);
      $(this).parent().siblings('.teamGrid__accordion-item').removeClass('active');
      $(this).parent().siblings('.teamGrid__accordion-item').find('.teamGrid__accordion-content').slideUp(300);
    });

    // ---------------------------------------------------------------------------

    // NUMBERED LIST COMPONENT
    $(document).on('click', '.NumberedList__item', function() {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });

    // NumberedList Mobile
    $('.NumberedList__accordion .NumberedList__accordion-item .NumberedList__accordion-content').hide();
      $(document).on('click', '.NumberedList__accordion .NumberedList__accordion-item .NumberedList__accordion-title', function(){
      $(this).parent().toggleClass('active');
      $(this).siblings('.NumberedList__accordion-content').slideToggle(300);
      $(this).parent().siblings('.NumberedList__accordion-item').removeClass('active');
      $(this).parent().siblings('.NumberedList__accordion-item').find('.NumberedList__accordion-content').slideUp(300);
    });

});
