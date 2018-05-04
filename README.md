# React-News-API
The Iron Yard 9.11, React Week 2, Children Components - Pair programming Activity 

## App Description  

In this project, you will use the News API to fetch, generate and render a random IGN news feed. To achieve this you will implement the following React logic: props, state, lifecycle, children components, and passing data via props.
Prerequisite  

For this project, you will need to get a News API key. It is free. It is also a great API. The response is the same no matter which news source you use. This means that you can change this app to be a New York Times app or an Engadget app. You will place this API URL/key in the fetch method. See App.js for instructions.

The app also has some magic going on (regular expressions), which takes the site title from the URL and sets it to state in order to render the site header.
![Mockup screen shot](https://github.com/carlotapearl/React-News-API/blob/master/news-api.jpeg)

## Instruction  
Right now the following events are not being handled by the react app:
1. Data retrieval from API.
2. Function sharing with children component via props.
3. Data sharing with children via props.
4. State.

## Problems to Solve  

## Before clicking on 'Click Me!', the application should:
1. Display a spinning icon. We have created and nested the component for your, but you need to set the state so that it renders when the app first loads.
2. Render the site header title from state.

## When you click on the 'Click Me!' button, the application should:
1. Render a random set of news feed articles with each click.
2. The spinning loader should disappear once the articles have rendered.
3. The random articles need to be in the state, first. (We have taken care of randomizing the articles for you).
4. The 'randomizer' function, even though it is called from the child component, needs to have its logic in the parent component.

## Hints  
Make sure the set up the initial state correctly. Make sure that you are properly passing state from the parent component's render method to the child component via props.

## Getting started  
1. Download starter fils, and place where you keep projects
2. Change directories into the project
3. Install the dependencies - `npm install`
4. Fire up the server - `npm start`

## Mockup  
![Mockup screen shot](https://github.com/carlotapearl/React-News-API/blob/master/newsmockup.gif)

## Your role as a student
Articulate their ideas as best you can. Try to facilitate effective collaboration with your paired student. Be willing to debate strategies for how best to approach your challenge, but don’t allow endless debate to keep you from making progress. Keep your eye on the clock and try to work yourself through the challenge at a reasonable pace. You and your partner should share the responsibility for authoring ideas and code. Finish your challenge and make certain that you call talk someone through the logic and strategies implemented by your group.
