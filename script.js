const head = document.querySelector(".nav");

const box1 = document.querySelector(".box1");
box1.addEventListener("click", function () {
  box1.style.backgroundColor = "red";
  box1.style.color = "white";
  box1.style.border = "none";
});

const box2 = document.querySelector(".box2");
box2.addEventListener("click", function () {
  box2.style.backgroundColor = "green";
  box2.style.color = "white";
  box2.style.border = "none";
});

const box3 = document.querySelector(".box3");
box3.addEventListener("click", function () {
  box3.style.backgroundColor = "blue";
  box3.style.color = "white";
  box3.style.border = "none";
});

const box4 = document.querySelector(".box4");
box4.addEventListener("click", function () {
  box4.style.backgroundColor = "yellow";
  box4.style.border = "none";
});

const input = document.querySelector("#name");

const btn = document.querySelector("#btn");

function handleData(event) {
  event.preventDefault();

  const inputValue = input.value;

  head.textContent = " hello , " + inputValue;
}

const val = btn.addEventListener("click", handleData);
