---
layout: blog-post
category: blog

published: true

author: Manuel Klarmann

title: A New Eaternity Rating System
subtitle: Meals, ingredients and restaurants are treated now all the same.

blog-image: 2018-10-22-Eaternity-Rating-Update.jpg
image: 2018-10-22-Eaternity-Rating-Update.jpg
tags:
- press
- planet
---

Eaternity has updated the way we give ratings for the CO₂ values provided on ingredients, recipes and reports. Please note that everything is backwards compatible and all CO₂-values do stay the same! Also, there are roughly the same amount of climatefriendly meals. Therefore, no worries, it is not harder to be climatefriendly! Yet, the biggest benefit is that every portion, no matter how big or small it is, can now be awarded being climate-friendly.

This has important implications, as we now can give a climate-friendly award for buffets, side-dishes or even snacks and food products. This means, we can apply what we are doing to so many more businesses. Also the overall restaurant comparison is fairer. The rating system for the ingredients is the same as for the recipes, which makes things in general much easier to understand.

| **Rating** |                   | Explanation                                                                                         |
| ---------- | :---------------: | --------------------------------------------------------------------------------------------------- |
| A:         | very good (green) | Eating only these foods, would reduce our carbon footprint by ⅔ (the goal we need to reach by 2050) |
| B:         |   good (orange)   | These foods are better than average. Each of those will reduce your carbon footprint.               |
| C:         |  not good (red)   | These foods are worse than average. Each of those will increase your carbon footprint.              |
| D:         |                   | These are the 20% worse. Avoiding those foods should be your second priority.                       |
| E:         |                   | These are the 10% worse. Avoiding those foods should be your first priority.                        |
| ---        |        ---        | ---                                                                                                 |

<br />

Previously we differentiated between rating ingredients, recipes and restaurants. Ingredients being normalized by weight, restaurants by kcal, and recipes not being normalized at all but thresholded by 320 kcal. This is no more.

The most important change, is that a climate-friendly meal can be above 710g of CO₂ . And some meals below 710g of CO₂ might be not climate-friendly any more. There is no way around this. To some of you, we have been announcing this change already for some time.

We are trying to do manage this transition as smoothly as possible. So in case you have any concerns, or questions. Just write or call us directly. If you are interested, what we did in all details, just keep reading below.

We are confident, that this change brings our system up to date with many more possible applications for the coming years. This will be of benefit to you all. We hope you see this the same way, as we do.

<h3>How does it work?</h3>
We create a food-unit to normalize all food items. This food-unit is orthogonal (independent) to our Climate Score and our Vita Score. Which means it cannot have any of their metrics included (like: fiber, high trans fatty acids, low polyunsaturated fatty acids, sodium, etc.). It serves as a proper normalization function. We use this unit to compare restaurants, menus, convenience foods/products and ingredients against the environmental and health scores we have.

We include the following nutrients, respective to their recommended daily amounts (as given by the [German Health Society (DGE)][1] and other commonly used standards, like the [Nutrient Rich Food (NRF)][2] index):

|                                    |
| ---------------------------------- |
| g proteins / 50 g                  |
| g fats / 66 g                      |
| kJ (the rest of it) / 6000 kJ      |
| g water / 2500 g                   |
| g (weight - "minus" water) / 600 g |
| ---                                |

<br />

<h4>Example</h4>

100g whole-grain cereals contains 10g proteins, 7g fats, 1434 KJ, 16g water - 84g dry-weight. Hence the food-unit is:
10/50 + 7/66 + (1434-17*10-37*7)/6000 + 16/2500 + 84 /600 = 0.62

Given a CO₂ value of 85g CO₂ / 100g - now we have 137 g CO₂/Food-Unit. This currently scores better than 74% of all our products.

[1]: https://www.dge.de/wissenschaft/referenzwerte/
[2]: https://academic.oup.com/ajcn/article/91/4/1095S/4597206
