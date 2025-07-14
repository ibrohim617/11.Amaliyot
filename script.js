
let bodyColor = prompt("Введите цвет фона (например: blue, yellow или rainbow)").toLowerCase();

let textColor = prompt("Введите цвет тек)").toLowerCase();

if (bodyColor === "rainbow") {
  document.body.style.background = "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)";
} else {
  document.body.style.backgroundColor = bodyColor;
}

if (textColor === "rainbow") {
  document.body.style.color = "transparent";
  document.body.style.backgroundImage = "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)";
  document.body.style.webkitBackgroundClip = "text";
  document.body.style.backgroundClip = "text";
} else {
  document.body.style.color = textColor;
}