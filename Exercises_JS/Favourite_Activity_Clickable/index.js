const buttons = document.querySelectorAll(".clickable");
const container = document.querySelector("body");

buttons.forEach((button) =>{
    button.addEventListener('click', (event) =>{
        button.classList.toggle("active");
        event.stopPropagation();
    });
});

container.addEventListener('click', (event) => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  });
  