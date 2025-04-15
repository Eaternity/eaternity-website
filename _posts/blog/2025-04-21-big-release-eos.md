---
layout: blog-post
category: blog
date: 2025-04-14

published: true

author: Eaternity

title: Our Biggest Eaternity Release - EOS
subtitle: our new methods and database go life


blog-image: 2025-04-21-eos-release.jpg
image: 2025-04-21-eos-release.jpg
tags:
  - press
  - planet
---

Release Version: EOS - Phoenix - v0.5.x -- Release Date: 21.04.2025

### Release Summary:

After more than two years of hard work, we are thrilled to announce the update of our Eaternity models and database. This new release brings a new feature to estimate convenience product ingredients. It also brings more accurate CO₂ calculations based on the latest research, and improved calculation models that account for a greater spectrum of processing and transport methods.

---

# **What’s New in This Release?**

The key improvements include:

### **Improved Convenience Product Calculations**

We've introduced a new feature to calculate the quantity of each ingredient in convenience products more accurately. This algorithm looks at the ingredients list and nutritional values to derive the quantity of each ingredient in the product.

**Example:** A package of frozen strawberry yoghurt includes many different ingredients listed on the product label. Based on the order of the ingredients on the label, as well as the information in the nutritional label, we can tell how many grams of strawberries are in the product, and base our impact calculations on this.

### **Fine-Tuned Transport Emissions for Air and Land**

We've improved our transport models to provide more precise emissions calculations for both air and land transport, as well as food losses during transport. This will help you track the full sustainability impact of your restaurants’ supply chain.

**Example:** Strawberries can come from all over the world depending on the season and demand. While the type of transportation (air, sea, land) was already considered, here we have introduced parameters for the specific transport vehicle, distances, cargo loads and fuel efficiency, as well as for strawberries that were too badly damaged during the journey and have to be discarded.

![model updates illustration]({{site.baseurl}}/img/blog/2025-04-21-eos-release/model-updates.jpg)

### **Novell Food Processing Methods (\*)**

Our new processing models now account for the environmental impact of various food preparation methods (like freezing, drying, fermenting, or roasting). It also considers the type of transport required depending on the processing method. With these updates, you'll have more complete data to show your restaurant teams how food production processes impact sustainability.

**Example:** Frozen strawberry yoghurt involves many different processing steps, from the growing of strawberries and production of the milk, to transport of the raw ingredients, to fermentation, to production, to freezing, to the transport and storage of the frozen final product. The models now account for each step in this process, including how the initial temperature would impact freezing energy consumption. 

![processing model illustration]({{site.baseurl}}/img/blog/2025-04-21-eos-release/processing-model.jpg)

### **Latest Research Included in Base CO₂ Values**

We’ve updated our CO₂ values to reflect the latest scientific research. These changes mean more accurate emissions data across all our models, allowing you to confidently report your sustainability metrics to upper management, clients, employees, and guests.

### Other Improvements

- Vita Score includes updated DALY values and replaces kcal with Daily Food Units and includes risk points for adipositas.
- Greenhouse production for salads are now removed for Summer months.
- Origin calculation is done separately on ingredient-level.
- Percentage improvement available in PDF reports for the category comparisons.

---

### **What Does This Mean for You?**

These updates will make it easier for you to:

- **Track and report sustainability metrics** more confidently, supporting your **SDG goals**.
- **Understand and reduce emissions** across your supply chain, contributing to your company’s **overall sustainability efforts**.
<br /><br />

We know that these updates may lead to **differences** in CO₂ emissions calculations compared to previous values. These changes reflect a more **accurate and complete representation** of your food’s environmental impact. 

---

### Next Steps

- The release will go live on Easter Monday, April 21st. 
- If anything raises concerns, please feel free to [contact us](mailto:mail@eaternity.ch).
- Detailed documentation of all CO₂ value changes can be found [here](https://www.notion.so/Release-Notes-EOS-2025-04-21-15d83d9bdb05440bbcad2cb6baaa71c2).
- For more details, you can now also visit our [GitHub repository](http://gitlab.com/eaternity/eos).
- Due to the release, the regular reporting will be delayed until May. 

---

### THANK YOU

This update would not have been possible without the dedication and passion of everyone involved. 

A special thanks to:

- **Our Science and IT teams** for their efforts in enhancing our models to ensure more accurate data and performing detailed analysis on the results.
- **Sustainability experts** for sharing their research, insights and knowledge, helping us ensure our models reflect the most up-to-date research and best practices.
- **Our Clients**: Your valuable input and real-world usage helped us fine-tune these updates to better meet your needs and expectations.
<br /><br />

Your partnership in this journey is shaping a future where every meal is a step toward a healthier planet. 

**From the entire Eaternity team:** <br />thank you for your commitment, collaboration, and vision. We couldn’t do this without you. 😉

---

**(\*) Note: The new processing model consists of two main types of models**

1. Complex models that may create new nutrition files and life cycle inventories:
  
    Transport from production to processing, fruit processing to jam, fruit processing to fruit yoghurt and fruit processing to fruit soy yoghurt, drying, fish processing to fillet, bread baking, powder production, fruit juice production, freezing.

<br />
2. Simpler processing activities that don't significantly change product properties (calculation based on weight):
    
    Shelled nuts roasting, chopping of nuts, grinding, carbonating (beverages), setting up, cutting, shredding, mixing, baking (bread), heating (cooking), heating (grilling/frying), heating (deep frying), heating (pasteurizing), heating (roasting), fermenting, drying, smoking, pressing, extraction, cooling, freezing, germination, freeze-drying, distilling, filtering, puffing, jam production, yoghurt production, fruit juice production.

------

