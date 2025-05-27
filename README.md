# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![Solution Preview](solution%20images/desktop%20active.png)
![Solution Preview](solution%20images/desktop%20step%20two%20monthly.png)
![Solution Preview](solution%20images/desktop%20step%20two%20yearly.png)
![Solution Preview](solution%20images/desktop%20step%20three%20monthly.png)
![Solution Preview](solution%20images/desktop%20step%20three%20yearly.png)
![Solution Preview](solution%20images/desktop%20step%20four%20yearly.png)
![Solution Preview](solution%20images/desktop%20confirm%20message.png)
![Solution Preview](solution%20images/mobile%20page%20one.png)
![Solution Preview](solution%20images/mobile%20page%20one%20active.png)
![Solution Preview](solution%20images/mobile%20page%20two%20monthly.png)
![Solution Preview](solution%20images/mobile%20page%20two%20yearly.png)
![Solution Preview](solution%20images/mobile%20page%20three%20monthly.png)
![Solution Preview](solution%20images/mobile%20page%20three%20yearly.png)
![Solution Preview](solution%20images/mobile%20page%20four.png)
![Solution Preview](solution%20images/mobile%20thanks%20page.png)


### Links

- Solution URL: (https://www.frontendmentor.io/solutions/frontend-mentor-multi-step-form-sCoa41YS5r)
- Live Site URL: (https://maxessien.github.io/Multi-step-form-FEM-Challenge/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- SCSS

## What I learned

Working on this multi-step form helped reinforce my knowledge of:

- DOM manipulation
- Step-by-step navigation logic
- Form validation and error handling
- Responsive design techniques

Here’s a sample of the JavaScript logic I used for navigating between steps:

```javascript
const nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", () => {
  currentStep++;
  showStep(currentStep);
});
```

### Continued development

I plan to continue improving in the areas of accessibility and state management. In future projects, I want to explore using a JavaScript framework like React to handle component-based logic more efficiently.

## Author

- Website - [Max Essien](https://github.com/Maxessien/nav-template-demo)
- Frontend Mentor - [@Maxessien](https://www.frontendmentor.io/profile/Maxessien)