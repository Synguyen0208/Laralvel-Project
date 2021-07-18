@extends('master')
@section('css')
<link href="assets4/vendor/aos/aos.css" rel="stylesheet">
<link href="assets4/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="assets4/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
<link href="assets4/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
<link href="assets4/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
<link href="assets4/css/style.css" rel="stylesheet">
<style>
    body {
        font-family: 'Nunito', sans-serif;
    }
</style>



<!-- link staff -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Open+Sans">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
@endsection
@section('javascript')

<script src="assets4/vendor/aos/aos.js"></script>
  <script src="assets4/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets4/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets4/vendor/php-email-form/validate.js"></script>
  <script src="assets4/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets4/js/main.js"></script>


  <!-- script staff -->
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