import React from "react";
import ResponsiveSlider from "./Slider";

const Work = () => {
	const slides = [
		{
			image: "/restaurant.jpg",
			title: "The Restaurant",
			description:
				"Group assignment where we had to build a mock restaurant application using Typescipt and React. We also had to incorporate a working admin page for bookings and a customer booking form using an internal API.",
			link: "https://github.com/ToveLissner/TheRestaurant",
		},
		{
			image: "/movies2.jpg",
			title: "Movies Page",
			description:
				"Group assignment where we had to creata a full stack application and create our own API. The API uses Express to serve movie information such as titles, summaries and release dates. For this assignment we also used handlebars.js to render the page's different components. The focus for this assignment was not styling, which is why the page is not fully responsive.",
			link: "https://github.com/clarrexd/expresstest",
		},
		{
			image: "/todo.png",
			title: "To-Do List",
			description:
				"One of my first assignments where I had to create a to-do list using regular Javascript DOM manipulation. I also used Localstorage in this project in order to prevent each list item from disappearing on page reload. ",
			link: "https://github.com/yuen0/ToDo",
		},
		// Add more slides as needed
	];
	return (
		<div
			id="work"
			className=" relative h-full pt-12 w-full flex flex-col bg-primary-100 justify-center items-center"
		>
			<ResponsiveSlider slides={slides} />
		</div>
	);
};

export default Work;
