var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var form = popup.querySelector("form");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");


link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("modal-content-show");
	if (storage) {
		login.value = storage;
		password.focus();
	}else{
		login.focus();
	}
});

close.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event){
	event.preventDefault();
	if(!login.value || !password.value){
		alert("Нужно ввести логин и пароль");
	}else{
		localStorage.setItem("login", login.value);
	}
	console.log("Отправили форму" + " Логин: " + login.value + " Пароль: " + password.value);
});

