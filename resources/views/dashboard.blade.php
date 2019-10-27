@extends('layouts.admin_layout')

@section('title', 'Page Title')

@section('after-styles')
	<link rel="stylesheet" href="/dist/app.js<?php echo "?r=".rand(1,1000); ?>" />
@endsection

@section('after-scripts')
	<script src="/dist/app.js<?php echo "?r=".rand(1,1000); ?>"></script>
@endsection)


@section('content')
        <div id="app">
            <chart-component></chart-component>
        </div>
       

@endsection



