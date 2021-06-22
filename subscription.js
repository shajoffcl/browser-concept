document.addEventListener("click", function (event) {
  let id = event.target.dataset.toggleId;
  if (!id) return;

  let elem = document.getElementById(id);
  elem.hidden = !elem.hidden;
});

elem.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  alert("Button context menu");
};

document.oncontextmenu = function (event) {
  event.preventDefault();
  alert("Document context menu");
};
