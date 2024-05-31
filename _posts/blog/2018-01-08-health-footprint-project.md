---
layout: blog-post
category: blog
date: 2018-01-08

published: true
redirect_from:
  - /foodprint/health
  - /foodprint/health-workshop

author: Aleksandra Aleksandrowicz

title: Health Footprint Project
subtitle: Publication of the full booklet and the new environmental indicators.

blog-image: 2017-12-19-health-footprint-project.jpg
image: 2017-12-19-health-footprint-project.jpg
tags:
  - press
  - environment
---

### The idea: a sustainability standard for restaurants

1/3 of greenhouse gases originate from the production and consumption of food. At the same time food related diseases like obesity, diabetes and cardiovascular diseases are on the rise in most countries.

Currently, different methods are used to identify healthy and nutritious meals. It's hard to work out which one is most appropriate.

Based on these leading questions we focused on the following results:

### Project goals

Systematic comparison of health concepts and approaches that are applied in research and by general health recommendations and labels.

Meta-analysis of existing literature on the climate, the environmental and our health.

Define the compatibility of different health approaches with climate goals by calculating the carbon and "health footprints" of 5000 meals.

Strategic collaboration with experts and stakeholders to stimulate debate, improve methodology and foster exchange and consensus on how to combine health and climate recommendations.

Develop user-friendly instruments for restaurants and the public, to optimize health and climate impact of their meals.

### The health footprint project

The health footprint project invited to create a common ground for health action by summarizing current knowledge on different definitions of healthy diets and consequences of bad dietary habits, namely diet related disorders.

As a consequence, and a result of the project, Eaternity included additional Health Score indicator into the Eaternity App to support the overall goal of reducing the food related climate impact.

At the Health Footprint Workshop 2016 held in Zürich we discussed with scientists, chefs, consumers and farmers the state of the knowledge in sciences and which indicators are crucial to assess environmental sustainability of food.

Together we formulated a message that combines the goals of both climate friendly and healthy nutrition, giving consumers and restaurants the opportunity to contribute to a sustainable and healthy future. We summarized and discussed the available knowledge of climate friendly and healthy nutrition. And provided guidelines for the restaurants and consumers showing the way towards climate friendly and healthy nutrition.

Based on the discussions and the scientific work conducted within this project we selected the Global Burden of Disease Study to develop an indicator for menus - the <a href="/foodprint/vita-score">Health Score</a>. It was further discussed and reviewed by the advisory board, as well as further experts from the field of nutrition.

The Vita-Score together with the environmental footprints was tested against data from real restaurant, the conclusion was: "We are out of balance!". <a href="/blog/smart-chefs-restaurant-analysis">Learn more about the Restaurant Analysis.</a>

All main findings and conclusions are summarized in the <a href="">Healthy Eating Guidelines</a> and are broadly supported by experts and stakeholders.

All results of the project were put into practice at the <a href="/blog/smart-chefs-event">impuls event “Smart Chefs”</a>. Chefs presented delicious appetizers and showed that tasty meals can be healthy and sustainable at the same time.

# Publications

<ol>
<li> ➔ <a href="/blog/smart-chefs-research-results">Full Results of the Health Footprint Project</a></li>
<li> ➔ <a href="/assets/smart-chefs/2017-12-12_VitaScore_Documentation_web.pdf">Health Score Documentation - Whitepaper</a></li>
<li> ➔ <a href="/assets/smart-chefs/2017-12-21_HEALTH_HealthyGuidelines.pdf">Healthy eating guidelines (Swiss only)</a></li>
</ol>
<br />
<br />

# Project Updates

<div class="row push-bottom push-top">
      {% for item in site.categories['blog']  %}
         {% if item.tags contains 'health' limit:5 %}
        <div class="col-xs-12 col-sm-12  col-md-12">
        <h3>{{ item.date | date_to_string }} – {{ item.title }}</h3>

            <div class="small-push-bottom">
              {% if item.image != null %}<a href="{{ BASE_PATH }}{{ item.url }}"><img class="responsive" src="{{ ASSET_PATH }}/img/blog/teaser_1400x450/{{ item.image }}" />  </a>{% endif %}

              <br/><h4>{{ item.subtitle }}</h4><br/>
              {{ item.excerpt }} <a href="{{ BASE_PATH }}{{ item.url }}" style="float:right;margin-right:20px;">
                Read the full update.</a><br/>
            </div>

        </div>
        {% endif %}
      {% endfor %}

</div>

# Support

We express our deepest gratitude to the leading scientists in our advisory board that supported us throughout the project with valuable inputs and reviews.

We thank Migros Engagement Fund for funding the Health Footprint project.

<table class="table table-hover">
    <tbody>
        <tr>
          <td class="active" colspan="2">Health Footprint Project: 1.5.2015-31.10.2017</td>
        </tr>
        <tr>
          <td class="active">Project organization: </td>
          <td class="bgLightBlue">Aleksandra Aleksandrowicz, Eaternity – <a href="mailto:aaleksandrowicz@eaternity.ch">aaleksandrowicz@eaternity.ch</a> | +41 79 560 74 60</td>
        </tr>
        <tr>
          <td class="active"></td>
          <td class="bgLightBlue">Deputy: Judith Ellens, Eaternity – <a href="mailto:ioconnor@eaternity.ch">jellens@eaternity.ch</a></td>
        </tr>
        <tr>
          <td class="active"></td>
          <td class="bgLightBlue">Siewerdtstrasse 95, 8050 Zürich</td>
        </tr>
        <tr>
          <td class="active">Scientific partner:</td>
          <td class="bgLightBlue">Global Burden of Disease Project</td>
        </tr>
        <tr>
          <td class="active">Made possible by:</td>
          <td class="bgLightBlue">Engagement Migros development fund</td>
        </tr>
       </tbody>
     </table>
<table class="table table-hover">
<tbody>
<tr>
  <td >  <a href="http://www.engagement-migros.ch/de/pioniere/eaternity"><img src="/img/organic-foodprint/logo-migrosengagement.svg"></a></td>
</tr>
</tbody>
</table>

[organic]: http://www.eaternity.org/assets/smart-chefs/170927-Eaternity-fact_sheet_booklet.pdf
[summary]: http://www.eaternity.org/assets/smart-chefs/2017-12-16-Smart-Chefs-Compilation.pdf
