const navbar = document.querySelector("#navbar");
const closenav = document.querySelector("#close");
const openav = document.querySelector("#show");
const sale = document.querySelector("#sale");
const closesale = document.querySelector("#closesale");
closenav.addEventListener("click", close);

openav.addEventListener("click", open);

closesale.addEventListener("click", hide);

function close() {
  const navbar = document.querySelector("#navbar");
  navbar.classList.add("hidden");
}

function open() {
  const navbar = document.querySelector("#navbar");
  navbar.classList.remove("hidden");
}

function show() {
  sale.classList.remove("hidden");
}

function hide() {
  sale.classList.add("hidden");
}

setTimeout(show, 10000);
