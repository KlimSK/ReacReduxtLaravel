<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('fonts/yandex/stylesheet.css') }}">
    <link rel="stylesheet" href="{{ asset('fonts/lato/lato.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}  ">
</head>
<body>

<div id="dev">
</div>

</body>


<script src="{{ asset('libs/jquery/jquery.js') }}"></script>
{{--<script src="{{ asset('libs/Semantic-UI-CSS-master/semantic.min.js') }}"></script>
<script src="{{ asset('libs/Semantic-UI-Calendar-master/calendar.min.js') }}"></script>
<script src="{{ asset('libs/Semantic-UI-Alert/Semantic-UI-Alert.js') }}"></script>--}}

<script src="{{ asset('js/app.js') }}"></script>

{{--<script src="{{ asset('js/all.min.js') }}"></script>--}}
</html>
