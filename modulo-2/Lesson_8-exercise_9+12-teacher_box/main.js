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

//NO FUNCIONA!! NO ERES TÚ... :)
// const pepi = document.querySelector(".pepi");

// function handleChange(click) {
// 	console.log("Soy la función y funciono");

// 	if (click.pepi.classList.contains("teacher--selected")) {
// 		click.pepi.classList.remove("teacher--selected");
// 		console.log("Estoy borrando la clase");
// 	} else {
// 		click.pepi.classList.add("teacher--selected");
// 		console.log("Estoy añadiendo la clase");
// 	}
// }

// pepi.addEventListener("click", handleChange);

//////

const teacherBox = document.querySelectorAll(".teacher");
// teacherBox = [teacherBox1, teacherBox2, teacherBox3];
console.log(teacherBox);

function handleChange(event) {
	console.log("Soy la función y funciono");

	if (event.currentTarget.classList.contains("teacher--selected")) {
		event.currentTarget.classList.remove("teacher--selected");
		console.log("IF: Estoy borrando la clase");
	} else {
		event.currentTarget.classList.add("teacher--selected");
		console.log("ELSE: Estoy añadiendo la clase");
	}
}

for (const eachTeacher of teacherBox) {
	eachTeacher.addEventListener("click", handleChange);
}