import React from "react";
import ResponsiveSlider from "./Slider";

const Work = () => {
	const slides = [
		{
			image: "public/restaurant.JPG",
			title: "The Restaurant",
			description:
				"Group assignment where we had to build a mock restaurant application using Typescipt and React. We also had to incorporate a working admin page for bookings and a customer booking form using an internal API.",
			link: "https://github.com/ToveLissner/TheRestaurant",
		},
		// {
		// 	image: "../../public/restaurantbig.jpg",
		// 	title: "Slide 2",
		// 	description: "This is a brief description of slide 2.",
		// 	link: "https://example.com/slide-2",
		// },
		// Add more slides as needed
	];
	return (
		<div
			id="work"
			className=" relative h-screen pt-12 w-full flex flex-col bg-primary-100 justify-center items-center"
		>
			<ResponsiveSlider slides={slides} />
		</div>
	);
};

export default Work;
