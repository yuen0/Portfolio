import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef();

	const handleClickOutside = (event) => {
		if (navRef.current && !navRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={navRef}>
			<button
				className="fixed top-4 z-30 right-4 text-secondary-100 h-12 w-12  rounded flex justify-center items-center group"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-8 h-8"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-8 h-8"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				)}
			</button>

			<div
				className={`fixed top-0 right-0 z-20 h-screen w-64 flex flex-col justify-center text-2xl items-center text-white bg-primary-200 p-6 transform transition-all duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<Link to="/" className="block mb-4">
					<HashLink to="/#home">Home</HashLink>
				</Link>

				<NavHashLink to="/#about" className="block mb-4">
					About
				</NavHashLink>

				<NavHashLink to="/#work" className="block mb-4">
					Work
				</NavHashLink>

				<Link to="/contactpage" className="block mb-4">
					<NavHashLink to="/contactpage/#contact">Contact</NavHashLink>
				</Link>
				<a
					target="_blank"
					href="https://www.linkedin.com/in/nicolas-l-b6abab161/"
				>
					<button
						type="button"
						className="relative mt-3 w-32 h-12 inline-flex justify-center items-center px-3.5 py-2 border-2 border-secondary-100 bg-transparent text-sm text-secondary-100 font-medium"
					>
						Resume
					</button>
				</a>
			</div>

			<div
				className={`fixed inset-0 bg-primary-100 blur-md z-10 opacity-50 transition-all duration-300 ease-in-out ${
					isOpen ? "visible" : "invisible"
				}`}
				onClick={() => setIsOpen(false)}
			></div>
		</div>
	);
};

export default HamburgerMenu;
