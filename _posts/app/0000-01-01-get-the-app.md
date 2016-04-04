---
layout: default
name: get-the-app
title: Get the App!
categories: app
---


<div class="wrapper">

  <div class="container hidden-xs">
    <div class="row">
      <div class="col-xs-12 text-center">
        <ul class="subNavigation">
          <a href="/app"><li>At a glance</li></a>
          <a href="/app/get-the-app"><li class="current">Get the App</li></a>
          <a href="/app/professional"><li>Professional</li></a>
          <a href="/app/clients"><li>Clients</li></a>
        </ul>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row push-top small-push-bottom">
      <div class="col-xs-12 col-sm-offset-1 col-sm-6 col-md-5">
		<form id="register" action="{{ site.eaternity_app }}/signup">
        <h1>App'etite for Change? Sign up for free now.</h1>
        <p>We establish climate friendly meals in society. Get involved by using our free app and share the Eaternity-philosophy.</p>
        <input type="text" name="name" placeholder="Your Name"/>
        <input type="text" name="email" placeholder="E-mail" />
        <!-- <div class="small-push-top">
          <input type="checkbox" name="check"> I accept the <a href="/legal">terms and conditions</a> of Eaternity
        </div> -->
        <button type="submit" class="small-push-top">
          Create account <i class="fa fa-angle-right fa-lg"></i>
        </button>
		</form>
		<p id="result" class="small-push-top"></p>
      </div>
      <div class="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-offset-2 col-md-3">
        <img class="responsive" src="/img/get-the-app/iphone-screen.png">
      </div>
    </div>
  </div>
</div>

<div id="footer" class="sticky"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="/js/jquery.magnific-popup.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/icheck.min.js"></script>
<script src="/js/script.js"></script>
