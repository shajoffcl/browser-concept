console.log("main.js file loaded..");

var btn = document.querySelector("button");
var div = document.querySelector(".container");
var hdg = document.querySelector("h1");
var flag = true;
var p = null;

console.log(div.id); // standard attribute
console.log(div.type); // non-standard attribure
console.log(div.getAttribute("type")); // method to get non-standard attribute

btn.addEventListener("click", handleBtn);

div.onclick = function (event) {
  console.log(this); // this === event.currentTarget
  console.log(event.currentTarget);
  console.log(event.target);
  alert("Div");
};

function handleBtn(event) {
  event.stopPropagation();
  flag ? textGenerator() : div.removeChild(p);
  propertyChanger();
}

function textGenerator() {
  p = document.createElement("p");
  var text = document.createTextNode("wow, Auto Text generated...");
  p.style.color = "red";
  p.appendChild(text);
  div.appendChild(p);
}

function propertyChanger() {
  var btnContent = flag
    ? "Click here to remove Text"
    : "Click here to generate Text";
  btn.innerHTML = btnContent;
  hdg.id = flag ? "blue" : "green";
  flag = !flag;
}
