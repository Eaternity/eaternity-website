---
layout: default
name: eat-at-home
title:  "eat at home"
permalink: /meals/
---

<div class="container hidden-xs">
	<div class="row">
		<div class="col-xs-12 text-center">
			<ul class="subNavigation">
				<a href="/meals"><li class="current">Eat at home</li></a>
				<a href="/meals/restaurants"><li>Eaternity-Restaurants</li></a>
			</ul>
		</div>
	</div>
</div>

<div class="container">
  <div class="row push-top small-push-bottom">
    <div class="col-xs-12 text-center">
      <h1>What is at the heart of climate-friendly food?</h1>
    </div>
  </div>
  <div class="row push-bottom">
    <div class="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8 text-center">
      <p>One third of our greenhouse gas emission originate from our food consumption. This is massive! Through smart and climate friendly diets, we can not only solve big problems of our global climate and resource crises. We can also shifts towards a more healthy and more sustainable way of living. Factors that are relevant for climate friendly foods, ordered by efficiency are:</p>
    </div>
  </div>
  <div class="row big-push-bottom">
    <div class="col-xs-12 col-sm-4 text-center">
      <img src="/img/eat-at-home/ingredients.svg" />
      <h3>#1: Ingredients</h3>
      <p>Plant-based instead of animal-based: fruit, vegetables and cereals show an extensively better environmental impact, as livestock breeding is resource and energy-intensive.</p>
    </div>
    <div class="col-xs-12 col-sm-4 text-center xs-push-top">
      <img src="/img/eat-at-home/seasonality.svg" />
      <h3>#2: Seasonality</h3>
      <p>Seasonal Vegetables: Avoid plane transportation with its high emissions due to fuel consumption. Also, beware of greenhouse produced veggies as a lot of energy is needed for electric lighting, watering and heating.</p>
    </div>
    <div class="col-xs-12 col-sm-4 text-center xs-push-top">
      <img src="/img/eat-at-home/regionality.svg" />
      <h3>#3: Regionality</h3>
      <p>Another factor is location. Be aware of long transport distances. Favour fresh products over deep-frozen ones.</p>
    </div>
  </div>
</div>

<div class="window" style="background-image: url('/img/eat-at-home/eatathome-parallax.jpg')"></div>

<div id="award" class="container">
  <div class="row big-push-top big-push-bottom verticalAlign">
    <div class="col-xs-12 col-sm-5">
      <div>
        <h1>The Eaternity Meal</h1>
        <p>Meals are granted climate-friendly status if they belong to the top 20% of all meals being served (currently 25’246 in our database). A climate friendly meal has at least <span class="semiBold">53% LESS CO₂</span> emissions then the average meal.</p>
        <a class="button" href="/app/get-the-app">Get the Eaternity App <i class="fa fa-angle-right fa-lg"></i></a>
      </div>
    </div>
    <div class="col-xs-12 col-sm-7 xs-push-top">
      <img class="responsive" src="/img/eat-at-home/illustration-eaternity-meal.svg">
    </div>
  </div>

  <div class="row small-push-bottom">
    <div class="col-xs-12 text-center">
      <h1>Little preview of our recipes</h1>
    </div>
  </div>
  <div class="row push-bottom text-center">

	  <!-- specific code -->
	{% for item in site.categories['recipes'] reversed offset:1 limit:4 %}
	<div class="span3">
		<a href="{{ BASE_PATH }}{{ item.url }}" class="thumbnail recipe-frame-small" data-placement="bottom" rel="tooltip" title="{{ item.title }}">
			<img  src="{{ ASSET_PATH }}{{ item.image-thumb }}" />
		</a>
	</div>
	{% endfor %}
	  <!-- specific code -->

    <div class="col-xs-offset-2 col-xs-8 col-sm-offset-2 col-sm-4 col-md-offset-0 col-md-3">
      <a href="http://app.eaternity.org/?locale=en#!menu:4d8b5be5-311c-4a8e-8ddd-7f63181856e0">
        <div class="roundTeaser">
          <img class="responsive" src="/img/eat-at-home/meal-1.jpg" />
          <span class="button">Go to the recipe <i class="fa fa-angle-right fa-lg"></i></span>
        </div>
      </a>
      <p>Rustic nutty red wine sauce with tagliatelle and Jerusalem artichoke</p>
    </div>
    <div class="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-offset-0 col-md-3 xs-push-top">
      <a href="http://app.eaternity.org/?locale=en#!menu:27defe12-6ad0-4ca1-b310-b7d4a8eeef7d">
        <div class="roundTeaser">
          <img class="responsive" src="/img/eat-at-home/meal-2.jpg" />
          <span class="button">Go to the recipe <i class="fa fa-angle-right fa-lg"></i></span>
        </div>
      </a>
      <p>Spinach lentil lasagne with pear and hazelnuts</p>
    </div>
    <div class="col-xs-offset-2 col-xs-8 col-sm-offset-2 col-sm-4 col-md-offset-0 col-md-3 sm-push-top">
      <a href="http://app.eaternity.org/?locale=en#!menu:adea6b25-14a8-4efa-bfe1-248d235f2bd5">
        <div class="roundTeaser">
          <img class="responsive" src="/img/eat-at-home/meal-3.jpg" />
          <span class="button">Go to the recipe <i class="fa fa-angle-right fa-lg"></i></span>
        </div>
      </A>
      <p>Aromatic pistachio pesto</p>
    </div>

    <div class="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-offset-0 col-md-3 sm-push-top">
      <a href="http://app.eaternity.org/?locale=en#!menu:c0e7cd35-cf9c-4b0f-88cd-d52ba3a9f948">
        <div class="roundTeaser">
          <img class="responsive" src="/img/eat-at-home/meal-4.jpg" />
          <span class="button">Go to the recipe <i class="fa fa-angle-right fa-lg"></i></span>
        </div>
      </a>
      <p>The Carrot Garden</p>
    </div>
  </div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="/js/jquery.magnific-popup.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/icheck.min.js"></script>
