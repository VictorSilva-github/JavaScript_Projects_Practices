// TODO: write your code here!

const buttons = document.querySelectorAll(".clickable");
const container = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    button.classList.toggle("active");
    event.stopPropagation();
  });
});

container.addEventListener('click', (event) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
});


// OUTRO EXEMPLO ///////


// const displayClickedElement = (event) => {
//   console.log(event.currentTarget);
//   event.currentTarget.classList.toggle("active");
// };

// const bindButtonToClick = (button) => {
//   button.addEventListener('click', displayClickedElement);

// };

// buttons.forEach(bindButtonToClick);
