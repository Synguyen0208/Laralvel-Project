<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Passerellesnumeriques Viet Nam</title>
  @yield('css')
  <link rel="icon" href="https://www.passerellesnumeriques.org/wp-content/uploads/2016/03/pn-logo.png" type="image/x-icon" />
</head>
<body>
    <div id="app">

    </div>
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat">
</div>
</body>

<script src="{{asset('./js/app.js')}}"></script>
@yield('javascript')
</html>