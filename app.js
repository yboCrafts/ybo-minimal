"use strict";

const navSlide = () => {
	const btn = document.querySelectorAll("button");
	const front = document.querySelector(".front-container");
	const back = document.querySelector(".back-container");

	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = function () {
			back.classList.toggle("back-active");
			front.classList.toggle("front-hide");
			// console.log(i);
		};
	}
};

navSlide();
