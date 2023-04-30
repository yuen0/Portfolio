import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<div className=" w-full h-auto mx-auto bg-primary-200 flex flex-col justify-start space-y-6 pb-4 pt-10 items-center">
			<h1 className=" text-white text-4xl font-bold"> Where to find me.</h1>

			<div className="flex mt-4 h-8 space-x-6 sm:justify-center sm:mt-0">
				<a
					target="_blank"
					href="https://www.linkedin.com/in/nicolas-l-b6abab161/"
					className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
				>
					<FaLinkedin className=" h-8 w-8" />
				</a>

				<Link
					to="/contactpage"
					className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
				>
					<SiGmail className=" h-8 w-8" />
				</Link>
				<a
					target="_blank"
					href="https://github.com/yuen0"
					className="text-gray-500 h-8 hover:text-gray-900 dark:hover:text-white"
				>
					<FaGithubSquare className=" h-8 w-8 " />
				</a>
			</div>
			<h2 className="text-sm text-primary-50 text-center ">©2023.</h2>
		</div>
	);
};

export default Footer;
