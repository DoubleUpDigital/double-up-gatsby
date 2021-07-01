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

  // GRAVITY FORM SUBMIT BUTTONS
  $('#gravityform--id-2 .gform_footer .gform_button').html('<i class="far fa-long-arrow-right"></i>');
  $('#gravityform--id-4 .gform_footer .gform_button').html('<i class="far fa-long-arrow-right"></i>');

  $('#gravityform--id-5 .gform_footer .gform_button').append('<span class="orb"><i class="far fa-long-arrow-right"></i></span>');
  $('#gravityform--id-6 .gform_footer .gform_button').append('<span class="orb"><i class="far fa-long-arrow-right"></i></span>');

  // TEAMGRID COMPONENT
  $('.teamGrid__info_single.joel-mehler').hide();
  $('.teamGrid__info_single.alyssa-wychers').hide();
  $('.teamGrid__info_single.avery-williams').hide();
  $('.teamGrid__info_single.samuel-dean').hide();

  $('.teamGrid__names_single.justin-radomski').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.justin-radomski').show();

    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
    $('.teamGrid__info_single.avery-williams').hide();
    $('.teamGrid__info_single.samuel-dean').hide();
  });

  $('.teamGrid__names_single.joel-mehler').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.joel-mehler').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
    $('.teamGrid__info_single.avery-williams').hide();
    $('.teamGrid__info_single.samuel-dean').hide();
  });

  $('.teamGrid__names_single.alyssa-wychers').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.alyssa-wychers').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.avery-williams').hide();
    $('.teamGrid__info_single.samuel-dean').hide();
  });

  $('.teamGrid__names_single.avery-williams').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.avery-williams').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
    $('.teamGrid__info_single.samuel-dean').hide();
  });

  $('.teamGrid__names_single.samuel-dean').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.teamGrid__info_single.samuel-dean').show();

    $('.teamGrid__info_single.justin-radomski').hide();
    $('.teamGrid__info_single.joel-mehler').hide();
    $('.teamGrid__info_single.alyssa-wychers').hide();
    $('.teamGrid__info_single.avery-williams').hide();
  });
});
