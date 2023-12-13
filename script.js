var plus_button = document.querySelectorAll(".plus");
function inc(e) {
  var clickedButton = e.target;
  var div = clickedButton.parentElement;
  var paragraph = div.querySelector("p");
  console.log(paragraph);
  var value = Number(paragraph.innerHTML);
  value++;
  paragraph.innerHTML = value;
  tr = div.parentElement.parentElement;
  unitPrice = tr.querySelector(".unitPrice");
  price = tr.querySelector(".price");
  calcule = Number(unitPrice.innerHTML) * value;
  price.innerHTML = calcule;
  somme();
}
for (let i = 0; i < plus_button.length; i++) {
  plus_button[i].addEventListener("click", inc);
}
var minus_button = document.querySelectorAll(".minus");
function min(e) {
  var clickedButton = e.target;
  var div = clickedButton.parentElement;
  var paragraph = div.querySelector("p");
  console.log(paragraph);
  var value = Number(paragraph.innerHTML);

  if (value > 0) {
    value--;
  }

  paragraph.innerHTML = value;
  tr = div.parentElement.parentElement;
  unitPrice = tr.querySelector(".unitPrice");
  price = tr.querySelector(".price");
  calcule = Number(unitPrice.innerHTML) * value;
  price.innerHTML = calcule;
  somme();
}
for (let i = 0; i < minus_button.length; i++) {
  minus_button[i].addEventListener("click", min);
}

Allprices = document.querySelectorAll(".price");
var totalprice = document.querySelector("#total");
function somme() {
  var sum = 0;
  for (let i = 0; i < Allprices.length; i++) {
    sum += Number(Allprices[i].innerHTML);
  }
  totalprice.innerHTML = sum;
}

var like_buttons = document.querySelectorAll(".like");
function changeColor(e) {
  var likebuttons = e.target;
  if (likebuttons.style.color != "red") {
    likebuttons.style.color = "red";
  } else {
    likebuttons.style.color = "#424242";
  }
}
for (let i = 0; i < like_buttons.length; i++) {
  like_buttons[i].addEventListener("click", changeColor);
}
var delete_Buttons = document.querySelectorAll(".delete");
function deleteRow(e) {
  var clickedIcon = e.target;
  var tr = clickedIcon.parentElement.parentElement.parentElement.parentElement;
  var deletePrice = tr.querySelector(".price");
  deletePrice.innerHTML = 0;
  somme();
  tr.remove();
}
for (let i = 0; i < delete_Buttons.length; i++) {
  delete_Buttons[i].addEventListener("click", deleteRow);
}