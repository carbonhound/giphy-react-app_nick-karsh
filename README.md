
![chLogo](https://user-images.githubusercontent.com/96540682/196782653-e87c5cd4-e734-41da-a120-8a33053afb8e.png)
# Welcome to the Carbonhound Technical Exercise!

![chGus](https://user-images.githubusercontent.com/96540682/196782767-7031c984-d16b-40f8-9c6c-afa8c9fc059f.png)

Thank you so much for taking the time to interview with us. We have prepared a technical exercise that we hope you will enjoy!

## General Instructions
This exercise is intended to focus on your ability to code in an existing repo in React and write CSS. 
- Take a maximum of 1 hour to complete the exercise
- You may use any IDE you're most comfortable with
- You'll need `npm`, `yarn`, and `node` installed to run the app
- Use comments (in code or on your final PR) to explain and provide flavour to your solutions and thought process

### Running the app
1. We've provided you a copy of our exercise repo for you to use - clone this repo locally.
2. Update the Giphy API key(located in `src/services/GiphyService.js`) with the one provided for the exercise. (Alternatively you can create your own on the Giphy site for free!)
3. Run `yarn install` and `yarn start` to start the app
4. The app will be served on `http://localhost:3000/`
5. When you're finished, create a PR against the main branch and link it to us in the original e-mail thread that sent you the test for us to review. 
   - avoid pushing to "main" directly, it's easier for us to review!
   - make sure the repo is public or we won't be able to access it

## Exercise Description
We have built a Create-React-App that loads a list of the top 25 trending Gifs on Giphy, and searches popular Gifs. Our tech lead has put forward
3 tasks they have prioritized from the product and QA teams, and has assigned you to get them done!

### Step 1 - Solve the Bug
We had a recent deployment and the app is now failing to load! Fix the bug in the app so the Giphy image list shows correctly.

### Step 2 - Clean up the Search Gif Functionality
Our clients have really liked the search feature we've added to the site - but we received some feedback that it's cumbersome to have to refresh the page to get the default
Trending list back. Update the Search bar to allow clearing your search - this should reinstate the default "Trending" list that appears when you first open the site.

### Step 3 - Introduce a New Feature: User Avatar
Looking at competitive products, our product team has formed a hypothesis that making your Gif experience more personable increases engagement. To test this theory,
we're going to implement a feature that displays the avatar image of the user associated to each Gif on the list. If this feature is successful, product would like to apply avatars to other elements of the app going forward, so please ensure your solution is flexible.

The response from Giphy contains a "user" object that has all the fields you need to perform this task.

The design team is on vacation, so your BE-focused tech lead has created and provided screenshot of an example implementation and has given you permission to take
creative liberty in the styling, as long as you timebox your work! (ie. this is a good opportunity to be creative, 
but should not take a significant portion of the exercise).

![Screen Shot 2022-10-19 at 11 26 20 AM](https://user-images.githubusercontent.com/96540682/196968652-3acac65c-1733-4c1c-8190-40b42428e6b2.png)

## Good Luck!

