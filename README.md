## Yelp Clone
<a href='https://yelpclone.petefowler.dev'>Live page</a>

<a href='https://github.com/Pete-Fowler/yelp-clone-backend'>Back end reposotiry</a>

This Yelp clone was built in a group project for the Flatiron School curriculum. It uses Ruby, Active Record, and Sinatra for the back end, and React for the front end. Our goal was to build as much functionality from the Yelp website as we could in only about 4 days. One of my contributions was a StarRating component to display an average star rating, which is more accurate than Yelp's version, because it fills a partially full star in tenths rather than Yelp's version which only renders them full, half-full, or empty.

### Backend
I was responsible for writing over half the backend, including the routes to search the database for businesses by name, parent category, subcategory, all businesses, and for details of one business. I did most of the work to seed our database with information from the Yelp API, as well as other sources for images and the Faker gem for dummy content.

One challenge here was that the Yelp API did not give as much information as needed without doing an additional fetch for each business. Some dummy content such as fake reviews was used as doing several hundred fetches or more in one go to seed the database did not seem feasible during development of a free student project.

Another challenge was that for Restaurants, the main fetch data would only return a restaurant as a member of hundreds of restaurant subcategories, and it did not include the parent category of restaurant. Searching by this category did not work until I implemented a solution by creating several different fetches and loops to create business records and manually add the parent category into our database.

### Frontend
I wrote the following components:
- BusinessResult
- SearchBar
- StarRating
- StarRatingPicker

I also contributed to all or nearly all of the other components and component styles, and other group members added some contributions to my components as well.

The BusinessResult component lists details about each business in card format, and navigates the user to a BusinessDetails component on click. 

The SearchBar includes a controlled input and uses react-router-dom to navigate the user to another component that fetches to search the database using the search term from the input received from a url parameter. I added conditional rendering in the header to display the header differently depending on which page the user is on.

The StarRating and StarRatingPicker components were the most interesting to build. I matched Yelp's style of displaying an average star rating with full stars, partially colored stars, and empty gray stars. For adding a review, I added Yelp's hover effects that highlight the stars appropriate and change the color of all the stars for each step. 

This was done by converting the star rating to an array of 1s, fractions, and 0s, and then mapping that to divs, using a linear gradient that would render the background completely full or empty or partially full for each star appropriately. This is arguably better than the Yelp website's version, which uses rounding and only displays stars fully, empty, or half-full.

### Improvements
I would improve many things about this project. The seed data is limited and could potentially be expanded. There are many features of the Yelp site that were not implemented due to lack of time, including additional dropdown menus, filters for sorting, and maps. 

Within the scope of our project, I could see the value of following a style guide. Our group had different styles and experience levels and approaches, and people lacking professional experience and a style guide led to code that often could have been cleaner and following the same format to make it more readable. 

I noticed this particularly with the CSS, as one group member began creating global rules to denote flexbox rows and columns and other things before I was able to get the group to use CSS modules. It seemed like this caused some of the styling and conditional rendering code to feel somewhat ugly and hacky. I ran into this in particular with the conditional rendering of the header to display differently depending on the route. This probably would have gone better if everyone was using CSS modules from the beginning or agreed on a convention such as block, element, modifier.

