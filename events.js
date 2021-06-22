document.addEventListener("love", function () {
  alert("Events!");
});

const evenT = new Event("love", { bubbles: true });

evt.onclick = function () {
  evt.dispatchEvent(evenT);
};

// u can also create CustomEvent and MouseEvent
