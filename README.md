# 4602-Mozilla
*Due November 4, 2019 @ 11:59pm through GitHub Classroom*

Projects may be submitted up to 3 days late, with a 10% penalty per day
## Team SLYM:
<ul>
  <li>Paige Stockebrand: Aid in design as well as prototyping</li>
  <li>Lu Liu: Github liaison and visualization coder</li>
  <li>Mary Yoder: First viz write up, ideation, research</li>
  <li>Julia Merten: Aid in design as well majority of write up</li>
</ul>

## Running the Project:
<ol>
  <li><a href="https://info-4602-5602.github.io/project-1-mozilla-slym/d3/categorical.html" target="_blank">Categorical</a> (longer load)</li>
  <li><a href="https://info-4602-5602.github.io/project-1-mozilla-slym/d3/quantitative.html" target="_blank">Quantitative</a></li>
</ol>

## The Visualizations:
#### Visualization 1: Categorical
Our first visualization is a categorical scatter plot where responders are grouped by language and color-coded by their level of comfort with technology (on a scale of Ultra Nerd to Luddite). The plot also features a scroll-over for each mark that tells the user the country, language, and comfort level for each responder represented by the mark, for ease of access.

Within high level tasks, the visualization was created in order to help __analyze__ level of comfortability of technology on the basis of language grouping, to inform the question of whether language barriers change people’s interaction with technology. 

Within middle level tasks, the visualization aids the viewer in several ways, including elements of __search__ and __query__. Within search, the user has the ability to find specific data points by browsing through language’s respective groupings as well as through a color key to aid in understanding the groups general comfort level using technology. The query aspect comes into play as the user has the opportunity to hover over individual points in order to learn even more about each point, in this case in particular, the surveyed party’s country of origin, to give more context to the language they speak. 

Within low level tasks, the viewer may most likely pay attention to __trends__ particularly in color patterns. Within each language category, the viewer will likely look for similar colors corresponding to comfort with technology. However, this also presents the opportunity for __outliers__ in the data as well, for language is more flexible an identifier than country, so there may be those who speak a language that is not commonplace for their country of origin. The design of navigation of this chart is a little less straightforward, as it is more rooted in concepts than just individuals. The grouping by language lends to the user being able to navigate the trends of language and technology, especially in the use of the scroll-over which can provide more context for why a responder considered themselves tech savvy or not.

We chose this chart because language is an uncommon lens with which to view interactions with technology, organizing responders in this way displays not only the distribution of languages throughout countries but the ways in which that distribution affects the use of technology. Language is concrete in the sense that it will never be universal, which makes it an interesting foil to the heavily programmed and rigid world of tech.

To build our visualization we first worked to design our project on a whiteboard, choosing trends we found the most compelling and unconventionally connected with each other. After brainstorming, it was time to refine our products based on what we felt was feasible to code.  Within this step we needed to work on transforming the qualitative data into quantitative data, which proved to be quite the challenge. We worked to simplify our csv and create a new version, dropping the elements which we did not need. We decided to build a concentric bubble graph at first because we believed it was a fun and engaging way to present the data in an easy to group manner. But upon attempting to execute the code we had a lot of trouble because finding skeleton code for this assignment was more difficult than the stacked bar chart. Instead had to rework the idea to what you see now. Beyond this we began to code and build our vis in D3. 

To refine our project, we playtested each version of our visualization and brainstormed what we thought could be changed. This began with working with a less complex color scheme, as well as more interactivity. 



#### Visualization 2: Quantitative
Our second visualization is a quantitative stacked bar graph that compares individuals excitement about the future of connection to the number of connected devices that they actually own as well as the number of people responding to each category.This visualization aims to present the categorization of people by their hope for the future of electronics and its relationship to the electronics they already own. The navigation method for this visualization is simple, the responders are grouped according to their hope for the future of technological devices and then further categorized according to the number of technological devices they own. This visualization aims to present the categorization of people by their hope for the future of electronics and its relationship to the electronics they already own.This technique makes for easy navigation based on the distributions of individuals with fewer versus more devices in the context of their ideas about the future to paint a picture of what the connected future may actually look like. 

Within the highest level of tasks, this visualization is designed to __present__ data in order to communicate to viewers the correlation between technological optimism alongside the number of devices owned by the surveyed. Another high level task that could be applied to this visualization is __discovery__ in which the visualization is created to help the viewer understand the different levels of technological optimism as well as the general size range of the group surveyed.

Within mid level taks, or what the user may be focusing on within the graph, the user can work with __search__ in order to __browse__ the graph for interesting aspects within the graph, as they can be drawn in by color and the color key to help them understand what element each color represents as the number of technological devices owned, as it isn’t displayed explicitly on the x and y axis. 

Within low level tasks, or what specific attributes are found within the visualization, the user is able to focus on high level __trends__, specifically involving color patterns that will be apparent. From color patterns, the user may be able to draw conclusions regarding whether or not owning more technological devices has a correlation to the level of technological optimism one has for the future. 

To __design__ our project, we wanted to start with quantitative data. The data on this graph is mainly quantitative, as mentioned before, it categorizes the responders both by color (their device count) and opinion on the future of tech. The design of this graph is in essence intended to present, it has clear categorical outlines by which the data is sorted, and these outlines guide the user of the visualization to the intended conclusions. We designed this visualization to organize responders by their levels of comfort with a technological future, and expecting to find trends regarding the number of devices they own.

To __build__ our visualization we first worked to design our project on a whiteboard, choosing trends we found the most compelling and unconventionally connected with each other. After brainstorming, it was time to refine our products based on what we felt was feasible to code. Within this step we needed to work on transforming the qualitative data into quantitative data, which proved to be quite the challenge. We worked to simplify our csv and create a new version, dropping the elements which we did not need. We decided to build a stacked bar chart because we had found starter skeleton code to aid us, and we believed it would be a simplistic way to lay things out side by side for the viewer to draw  conclusions. Beyond this, we began to code and build our vis in D3. 

To __refine__ our project, we playtested each version of our visualization and brainstormed what we thought could be changed. This began with working with creating a more visually compelling key to the graph as well as making the number of users surveyed in each category known.
