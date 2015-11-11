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
      <p>Vegetable before animal: fruit, vegetables and cereals show an extensively better environmental impact, as livestock breeding is resource and energy-intensive.</p>
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

<div class="container">
  <div class="row big-push-top big-push-bottom verticalAlign">
    <div class="col-xs-12 col-sm-5">
      <div>
        <h1>The Eaternity-meal</h1>
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
      <a href="http://app.eaternity.ch/#!menu:2d9e98bc-025b-44e8-910d-7beabdfbdcd3">
        <div class="roundTeaser">
          <img class="responsive" src="/img/eat-at-home/meal1.jpg" />
          <span class="button">Go to the recipe <i class="fa fa-angle-right fa-lg"></i></span>
        </div>
      </a>
      <p>Lemony Potato Salad with pickled onions and cucumber</p>
    </div>
    <div class="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-offset-0 col-md-3 xs-push-top">
      <a href="http://app.eaternity.ch/#!menu:94d8b613-c890-4873-9a5d-02ffced2beea">
        <div class="roundTeaser">
          <img class="responsive" src="/img/eat-at-home/meal2.jpg" />
          <span class="button">Go to the recipe <i class="fa fa-angle-right fa-lg"></i></span>
        </div>
      </a>
      <p>Lettuce Wraps with Curried Tofu and Coconut Basil Chutney</p>
    </div>
    <div class="col-xs-offset-2 col-xs-8 col-sm-offset-2 col-sm-4 col-md-offset-0 col-md-3 sm-push-top">
      <a href="http://app.eaternity.ch/#!menu:551f007d-b656-49bb-9490-54bbbbc43abf">
        <div class="roundTeaser">
          <img class="responsive" src="/img/eat-at-home/meal3.jpg" />
          <span class="button">Go to the recipe <i class="fa fa-angle-right fa-lg"></i></span>
        </div>
      </A>
      <p>Marinara sauce for pasta and lasagne</p>
    </div>

    <div class="col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-offset-0 col-md-3 sm-push-top">
      <a href="http://app.eaternity.ch/#!menu:6ba84240-f7ff-4455-a45c-1dda55baacee">
        <div class="roundTeaser">
          <img class="responsive" src="/img/eat-at-home/meal4.jpg" />
          <span class="button">Go to the recipe <i class="fa fa-angle-right fa-lg"></i></span>
        </div>
      </a>
      <p>Corn and Zucchini Fritters</p>
    </div>
  </div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="/js/jquery.magnific-popup.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/icheck.min.js"></script>
