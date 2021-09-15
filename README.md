# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Code](https://github.com/agusthas/stats-preview-card-component/)
- Live Site URL: [Live](https://agusthas.github.io/FEM_stats-preview-card-component/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS Modules
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Vite JS

### What I learned

- **REACT** as a framework.
- Instead of making `::after` or `::before` and play with their **z-index**, use `linear-gradient` to create overlay.

```css
.card__image {
  background: linear-gradient(rgba(82, 0, 132, 0.5), rgba(82, 0, 133, 0.5)),
    url('../../assets/images/image-header-desktop.jpg');
}
```

### Continued development

- Reduce how many times i used `magic` numbers.

### Useful resources

- [Vite Docs](https://vitejs.dev/guide/) - This helped me guide how to use vite with react such as how to handle static files, and deploying projects to github pages.

## Author

- Frontend Mentor - [@agusthas](https://www.frontendmentor.io/profile/agusthas)
- Twitter - [@agusthas](https://www.twitter.com/agusthas)
