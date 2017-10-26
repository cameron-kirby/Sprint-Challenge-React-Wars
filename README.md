# React Foo
* The purpose of this exercise is to get you used to being quizzed on _Interview Questions_ commonly asked about ReactJS.
* Answers to your written questions will be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. 
* Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation. 

## Questions
1. What is React JS? How does it differ from other JavaScript Frameworks?
2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.
4. Name the three arguments that are passed into the `React.createElement()` function?

## Project
* You're going to be building an applicatoin *starwars* that consumes live data that we're retrieving across the world wide web!
1. **cd into starwars** run `npm install` to retrieve all the dependancies. 
2. Once you have installed all the _node_modules_ you should be able to run `npm start` to get your server up and running.
3. Once your server is up and running open Chrome and head over to `localhost:3000` to see your beautiful app. Ok, maybe it's not THAT pretty yet, but it's your goal to ensure this project becomes a thing of beuty.

### If you notice inside of `App.js` we're calling an open sourced **API** from withing `componentDidMount()` and saving the results of that API on state. 
#### Open up your chrome `React Dev Tools` to peek at the data set on `state` of your `App` component. 
* You should see something like this:

![Star Wars state data]('starwars_data.png')

* Your goal here is to build an app that displays the data
