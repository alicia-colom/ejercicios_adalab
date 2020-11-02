// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					<img src={logo} className="App-logo" alt="logo" />
// 					<p>Hello world!</p>
// 					<a
// 						className="App-link"
// 						href="https://reactjs.org"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 					>
// 						Learn React
// 					</a>
// 				</header>
// 			</div>
// 		);
// 	}
// }

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">{titleElement}</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

const titleElement = 'Hello World!';


// EXPLICACIÓN Interfaz declarativa vs. imperativa:
// https://books.adalab.es/materiales-front-end-k/modulo-3/3_2_intro_react#interfaz-declarativa-vs-imperativa
//
// const person = {
//   fullName: {
//     name: "Ada",
//     lastName: "Lovelace"
//   },
//   title: "Countess of Lovelace",
//   areas: ["Mathematics", "Computing"]
// };
// const personCardElement = document.getElementById("person-card");

// // CÓMO, imperativa
// const cardTitle = document.createElement("h2");
// cardTitle.textContent = `${person.fullName.name}, ${person.title}`;
// cardTitle.classList.add("card-title");
// personCardElement.appendChild(cardTitle);

// const cardList = document.createElement("ul");
// cardList.classList.add("card-area-list");
// for (const area of person.areas) {
//   const cardListItem = document.createElement("li");
//   cardListItem.classList.add("card-area");
//   cardListItem.textContent = area;
//   cardList.appendChild(cardListItem);
// }
// personCardElement.appendChild(cardList);

// // QUÉ, declarativa (React)
// const personCardComponent = (
//   <article>
//     <h2 className="card-title">
//       {person.fullName.name}, {person.title}
//     </h2>
//     <ul className="card-area-list">
//       {person.areas.map(area => (
//         <li className="card-area">{area}</li>
//       ))}
//     </ul>
//   </article>
// );

// ReactDOM.render(personCardComponent, personCardElement);


export default App;
