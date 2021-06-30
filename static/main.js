jQuery(document).ready(function($) {
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

  $('#gravityform--id-2 .gform_footer .gform_button').html('<i class="far fa-long-arrow-right"></i>');
  $('#gravityform--id-4 .gform_footer .gform_button').html('<i class="far fa-long-arrow-right"></i>');

  $('#gravityform--id-5 .gform_footer .gform_button').append('<span class="orb"><i class="far fa-long-arrow-right"></i></span>');
  $('#gravityform--id-6 .gform_footer .gform_button').append('<span class="orb"><i class="far fa-long-arrow-right"></i></span>');
});
