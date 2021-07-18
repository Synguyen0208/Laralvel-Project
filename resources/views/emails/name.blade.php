<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div>
    Name  : {{ $data1["name"] }}<br>
    Email : {{ $data1["email"] }}<br>
    Subject : {{ $data1["subject"] }}<br>
    Message : Hello Admin, {{$data1["message"]}}
</div>
</body>
</html>