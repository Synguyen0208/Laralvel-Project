@extends('master')
@section('css')
<link href="assets4/vendor/aos/aos.css" rel="stylesheet">
<link href="assets4/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="assets4/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
<link href="assets4/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
<link href="assets4/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
<link href="assets4/css/style.css" rel="stylesheet">
<link href="assets4/css/write.css" rel="stylesheet">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css">
<script
    src="https://www.paypal.com/sdk/js?client-id=AQN2zsWVWJgHZ859tX9_IYA1-SF-JUsAdcyPM9m8FI2cddAN1UFDqzuuO4UF_dV_82KBr4pwU6j9uaZa"> // Required. Replace YOUR_CLIENT_ID with your sandbox client ID.
  </script>
<style>
    body {
        font-family: 'Nunito', sans-serif;
    }
</style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Open+Sans">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
@endsection
@section('javascript')
<script>
  $(document).ready(function() {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function() {

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({
        opacity: 0
      }, {
        step: function(now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          next_fs.css({
            'opacity': opacity
          });
        },
        duration: 600
      });
    });

    $(".previous").click(function() {

      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

      //show the previous fieldset
      previous_fs.show();

      //hide the current fieldset with style
      current_fs.animate({
        opacity: 0
      }, {
        step: function(now) {
          opacity = 1 - now;

          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          previous_fs.css({
            'opacity': opacity
          });
        },
        duration: 600
      });
    });

    $('.radio-group .radio').click(function() {
      $(this).parent().find('.radio').removeClass('selected');
      $(this).addClass('selected');
    });

    $(".submit").click(function() {
      return false;
    })

  });
  jQuery(document).ready(function($) {
    $('.tabs .btn_styles').click(function() {
      if (!$(this).hasClass('active')) {
        let active, parent, tab;
        active = $(this);
        let amount = $(this).text();
        amount = amount.replace("$", "");
        $('#amount').val(parseInt(amount));
        $('#amount').click();
        parent = $(this).closest('.tabs').first();
        parent.find('.btn_styles').each(function() {
          tab = $($(this).attr('href'));
          if ($(this).is(active)) {
            $(this).addClass('active');
            if (tab.length > 0) tab.show();
          } else {
            $(this).removeClass('active');
            if (tab.length > 0) tab.hide();
          }
        });
      }

      return false;
    });
  });
</script>
<script src="assets4/vendor/aos/aos.js"></script>
  <script src="assets4/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets4/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets4/vendor/php-email-form/validate.js"></script>
  <script src="assets4/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets4/js/main.js"></script>
  <script>
$(document).ready(function(){
	$(".wish-icon i").click(function(){
		$(this).toggleClass("fa-heart fa-heart-o");
	});
});	
</script>
<script
  src="https://code.jquery.com/jquery-2.2.4.js"
  integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
  crossorigin="anonymous"></script>

  <script type ="text/javascript">

    $(document).ready(function(){
$('.list').click(function(){
    const value =$(this).attr('data-filter');
    if(value=='all'){
        $('.itemBox').show('1000');

    }else{
        $('.itemBox').not('.'+value).hide('1000');
        $('.itemBox').filter('.'+value).show('1000');
    }
})

// add active

$('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})
    })
</script>
@endsection