(function(){ var s = document.createElement('script'), e = ! document.body ? document.querySelector('head') : document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init({ statementLink : '', footerHtml : '', hideMobile : false, hideTrigger : false, language : 'en', position : 'right', leadColor : '#146FF8', triggerColor : '#146FF8', triggerRadius : '50%', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerOffsetX : 10, triggerOffsetY : 10, triggerRadius : '50%' } }); }; e.appendChild(s); }());

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

  // GRAVITY FORM SUBMIT BUTTONS
  $('#gravityform--id-2 .gform_footer .gform_button').html('<i class="far fa-long-arrow-right"></i>');
  $('#gravityform--id-4 .gform_footer .gform_button').html('<i class="far fa-long-arrow-right"></i>');

  if(windowWidth < 480) {
    $('#gravityform--id-4 input[type="email"]').attr('placeholder', 'Email address');
  }

  $('#gravityform--id-5 .gform_footer .gform_button').append('<span class="orb"><i class="far fa-long-arrow-right"></i></span>');
  $('#gravityform--id-6 .gform_footer .gform_button').append('<span class="orb"><i class="far fa-long-arrow-right"></i></span>');

  // ---------------------------------------------------------------------------

  // TEAMGRID COMPONENT
  $('.teamGrid__info_single.joel-mehler').hide();
  $('.teamGrid__info_single.alyssa-wychers').hide();
  $('.teamGrid__info_single.avery-williams').hide();
  $('.teamGrid__info_single.samuel-dean').hide();

  $(document).on('click', '.teamGrid__names_single.justin-radomski', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.justin-radomski').show();

    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
    $('.teamGrid__info_single.avery-williams').hide();
    $('.teamGrid__info_single.samuel-dean').hide();
  });

  $(document).on('click', '.teamGrid__names_single.joel-mehler', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.joel-mehler').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
    $('.teamGrid__info_single.avery-williams').hide();
    $('.teamGrid__info_single.samuel-dean').hide();
  });

  $(document).on('click', '.teamGrid__names_single.alyssa-wychers', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.alyssa-wychers').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.avery-williams').hide();
    $('.teamGrid__info_single.samuel-dean').hide();
  });

  $(document).on('click', '.teamGrid__names_single.avery-williams', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.avery-williams').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
    $('.teamGrid__info_single.samuel-dean').hide();
  });

  $(document).on('click', '.teamGrid__names_single.samuel-dean', function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.samuel-dean').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
    $('.teamGrid__info_single.avery-williams').hide();
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
