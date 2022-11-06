const collapsibleIcons = document.querySelectorAll(".collapsible__icon");
collapsibleIcons.forEach((icon) =>
  icon.addEventListener("click", function () {
    const parent = this.closest(".collapsible");
    parent.classList.toggle("collapsible--expanded");
  })
);
