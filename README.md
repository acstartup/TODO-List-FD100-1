# Very Simple TODO List (FD100: #1/100)

A basic todo list web application built with HTML and JavaScript.

## Features
- Add tasks to your list
- Remove all tasks with one click
- Clean, minimal interface

## How to Run
1. Open `index.html` in your web browser
2. Type a task in the input box
3. Click "Add" to add it to the list
4. Click "Remove" to clear all tasks

## Files
- `index.html` - Main page structure
- `js/script.js` - Todo list functionality

## Tools/Languages (Techstack)
- **JavaScript**
- **HTML**

## What I Learned
- HTML & JS connection (getElementByIds=("submit"))
- If structuring ( if (task !== ""))
- Event listeners (addEventListener)
- Creating and removing HTML elements dynamically (items=querySelectorAll, items.forEach( item => item.remove())
- Working with forms and inputs (input.value, input=id value, value for content)

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
