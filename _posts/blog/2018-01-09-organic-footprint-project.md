---
layout: blog-post
category: blog

published: true

redirect_from:
- /foodprint/organic
- /foodprint/organic-workshop

author: Isabel O'Connor

title: Organic Footprint Project
subtitle: Publication of the full booklet and the new environmental indicators.

blog-image: 2017-12-19-organic-footprint-project.jpg
image: 2017-12-19-organic-footprint-project.jpg
tags:
- press
- environment
---

### The idea: a sustainability standard for restaurants

1/3 of greenhouse gases originate from the production and consumption of food. Currently, consensus on methodology and underlying assumptions of carbon footprint-calculations on organically produced foods is lacking.

Life cycle assessments do not necessarily capture the full environmental impact. Which additional factors other than carbon emissions should be considered in sustainability standards for meals? And how can this be easily adapted in restaurants and by individuals?

Based on these leading questions we focused on the following results:

### Project goals

Identification of the most important factors and assumptions influencing the climate.

Environmental impact of organic and conventional foods.

Extension of our CO₂-database with improved calculations for organic ingredients.

Identification of climate and environmentally relevant regulations of different organic standards and labels.

Quantification of the potential climate and environmental impacts of different organic standards and labels using the LCA method.

Develop practical recommendations and instruments for restaurants and the general public.

Adaptation and improvement of analysis, methodology and developed applications by having stakeholder reviews and organizing discussion groups and exchange workshops.

### The organic footprint project

The organic footprint project invited to create a common ground for climate action by summarizing current knowledge on the climate and environmental impacts of conventional and organic production.

As a consequence, and a result of the project, Eaternity provides CO₂ values for organic and conventional production. Further, Eaternity included additional indicators for water scarcity, tropical deforestation and animal welfare into the Eaternity App to support the overall goal of reducing the food related climate impact.

Together with our scientific partners at ZHAW and Quantis we investigated how the climate and environmental impacts of organic food differs from conventional food. At the Organic Footprint Workshop 2016 held in Zürich we discussed with scientists, chefs, consumers and farmers the state of the knowledge in sciences and which indicators are crucial to assess environmental sustainability of food.

Together we formulated a message that combines the goals of climate friendly and organic agriculture, giving consumers and restaurants the opportunity to contribute to a sustainable future. We summarized the common ground of available knowledge that is directly applicable to give consumers a choice. And establish clear and understandable recommendations for restaurants that are supported by all participants.

Based on the discussions and the scientific work conducted within this project we selected this core set of indicators. These indicators together with the health indicators were tested against data from real restaurant, the conclusion was: "We are out of balance!". <a href="">Learn more about the Restaurant Analysis.</a>

All main findings and conclusions are summarized in the <a href="">Organic Fact Sheet</a> and are broadly supported by experts and stakeholders.

All results of the project were put into practice at the <a>impuls event “Smart Chefs”</a>. Chefs presented delicious appetizers and showed that tasty meals can be healthy and sustainable at the same time.

# Publications

<ol>
  <li> ➔ <a href="/blog/smart-chefs-research-results">Full Results of the Organic Footprint Project</a></li>
  <li> ➔ <a href="/assets/smart-chefs/170927-Eaternity-fact_sheet_booklet.pdf">Organic Factsheet - Organic Footprint Project</a></li>
  <li> ➔ <a href="/assets/smart-chefs/2017-Entscheidungskriterien-Eaternity-Award-DE.pdf">Decision Criteria Eaternity Awards (DE)</a></li>
</ol>
<br />
<br />

# Project Updates

<div class="row push-bottom push-top">
      {% for item in site.categories['blog']  %}
         {% if item.tags contains 'organic' limit:5 %}
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

We thank Migros Engagement Fund for funding the Organic Footprint project.

<table class="table table-hover">
   <tbody>
    <tr>
     <td class="active" colspan="2">Organic Footprint Project: 1.5.2015-31.10.2017</td>
   </tr>
   <tr>
     <td class="active">Project organization: </td>
     <td class="bgLightBlue">Isabel O'Connor, Eaternity – <a href="mailto:ioconnor@eaternity.ch">ioconnor@eaternity.ch</a> | +41 76 479 62 47</td>
   </tr>
   <tr>
     <td class="active"></td>
     <td class="bgLightBlue">Deputy: Judith Ellens, Eaternity – <a href="mailto:jellens@eaternity.ch">jellens@eaternity.ch</a></td>
   </tr>
   <tr>
     <td class="active"></td>
     <td class="bgLightBlue">Siewerdtstrasse 95, 8050 Zürich</td>
   </tr>
   <tr>
     <td class="active">Scientific partner:</td>
     <td class="bgLightBlue">Deborah Scharfy, Institut für Umwelt und Natürliche Ressourcen IUNR, ZHAW Wädenswil –  <a href="mailto:scaf@zhaw.ch">scaf@zhaw.ch</a></td>
   </tr>
     <tr>
       <td class="active"></td>
       <td class="bgLightBlue">Raphaël Thierrin, Quantis, Zürich <a href="mailto:raphael.thierrin@quantis-intl.com">raphael.thierrin@quantis-intl.com</a></td>
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
  <td>  <a href="https://www.zhaw.ch/iunr/gof"><img src="/img/organic-foodprint/logo-zhaw.svg"></a></td>
  <td ><a href="https://quantis-intl.com"><img src="/img/partners/quantis.svg"></a></td>
  <td >  <a href="https://engagement.migros.ch/de/news-projekte/gesundheitsfoerderung/eaternity"><img src="/img/organic-foodprint/logo-migrosengagement.svg"></a></td>
</tr>
</tbody>
</table>

[organic]: http://www.eaternity.org/assets/smart-chefs/170927-Eaternity-fact_sheet_booklet.pdf
[summary]: http://www.eaternity.org/assets/smart-chefs/2017-12-16-Smart-Chefs-Compilation.pdf
