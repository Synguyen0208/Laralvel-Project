<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel</title>
    <link rel="icon" href="https://www.passerellesnumeriques.org/wp-content/uploads/2016/03/pn-logo.png" type="image/x-icon" />
    <!-- Google Fonts -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"> -->
    
    <!-- Styles -->
    <link href="assets4/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets4/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets4/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets4/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets4/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets4/css/style.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>

<body>
    <div id="app">

    </div>

</body>
<script src="{{asset('./js/app.js')}}"></script>
<script src="assets4/vendor/aos/aos.js"></script>
  <script src="assets4/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets4/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets4/vendor/php-email-form/validate.js"></script>
  <script src="assets4/vendor/swiper/swiper-bundle.min.js"></script>

  <!-- Template Main JS File -->
  <script src="assets4/js/main.js"></script>
</html>