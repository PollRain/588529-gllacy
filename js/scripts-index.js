
 var link = document.querySelector(".button-adres-and-contacts");

 var popup = document.querySelector(".modal-feedback");
 var overlay = document.querySelector(".modal-overlay");
 var close = popup.querySelector(".modal-close");

 var form = popup.querySelector("form");
 var login = popup.querySelector("[name=user-name]");

 link.addEventListener("click", function (evt) {
 evt.preventDefault();
 popup.classList.add("modal-show");
 login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("modal-show");
 });
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

var mapLink = document.querySelector(".map");
