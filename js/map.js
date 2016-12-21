var linkMap = document.querySelector(".js-open-map");
var popupMap = document.querySelector(".modal-content-map");
var closeMap = popupMap.querySelector(".modal-content-close");

linkMap.addEventListener("click", function(event){
	event.preventDefault();
	popupMap.classList.add("modal-content-show");
});

closeMap.addEventListener("click", function(event){
	event.preventDefault();
	popupMap.classList.remove("modal-content-show");
});