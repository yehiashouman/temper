<html>
    <head>
        <title>App Name - @yield('title')</title>
	@yield('before-styles')
	@yield('after-styles')
    </head>
    <body>
        <div class="container">
            @yield('content')
           
        </div>
	@yield('before-scripts')
	@yield('after-scripts')
    </body>
</html>

