import React from "react";
import { SlArrowDown } from "react-icons/sl";
const Aboutme = () => {
	return (
		<div className="relative flex flex-col justify-center h-screen py-16 lg:pt-0  lg:pb-0 bg-primary-100">
			<div
				id="about"
				className="relative flex flex-col items-start  w-full px-4 md:px-0 lg:px-8 "
			>
				<div className="mb-16 md:mx-auto lg:my-40 lg:max-w-lg lg:pr-5">
					<h1 className="inline-block py-px mb-4 font-lato text-4xl font-bold tracking-wider text-secondary-100 uppercase rounded-full ">
						About me.
					</h1>
					<p className="pr-5 mb-5 text-base text-primary-50 md:text-lg">
						My name is Nicolas Lopez Yuen. I'm an ambitious and hard-working
						person with a knack for learning.
						<br />
						<br />
						During my tenure at Medieinstitutet in Stockholm I will be gaining a
						solid understanding of both front-end and back-end development. As
						well as specializing in e-commerce development. This encompasses
						skills such as HTML5, CSS/SCSS/Tailwind, React,
						Javascript/Typescript, SQL, PHP, NodeJS and APIs.
						<br />
						<br />
						My current passion lies in coming up with creative solutions and
						designs and is therefore something that I'm planning on further
						honing for the remainder of my studies.
						<hr className=" border-secondary-100 border-t-2 h-3 w-32 md:w-64 mt-4 ml-56"></hr>
					</p>
				</div>
			</div>
			<div className="absolute mx-auto bottom-8 left-1/2 transform -translate-x-1/2 ">
				<a href="#work">
					<SlArrowDown className=" w-10 h-10 text-secondary-100" />
				</a>
			</div>
		</div>
	);
};

export default Aboutme;
