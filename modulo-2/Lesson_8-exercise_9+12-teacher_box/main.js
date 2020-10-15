"use strict";

// const teacherBox = document.querySelector(".teacher");

// function handleChange() {
// 	console.log("Soy la función y funciono");

// 	if (teacherBox.classList.contains("teacher--selected")) {
// 		teacherBox.classList.remove("teacher--selected");
// 		console.log("Estoy borrando la clase");
// 	} else {
// 		teacherBox.classList.add("teacher--selected");
// 		console.log("Estoy añadiendo la clase");
// 	}
// }

// teacherBox.addEventListener("click", handleChange);

//////

const teacherBox = document.querySelectorAll(".teacher");

function handleChange(event) {
	console.log("Soy la función y funciono");
  // console.log(event);
  // console.log(event.currentTarget);

	if (event.currentTarget.classList.contains("teacher--selected")) {
		event.currentTarget.classList.remove("teacher--selected");
		console.log("Estoy borrando la clase");
	} else {
		event.currentTarget.classList.add("teacher--selected");
		console.log("Estoy añadiendo la clase");
	}
}

for (const eachTeacher of teacherBox) {
	eachTeacher.addEventListener("click",handleChange);
}

