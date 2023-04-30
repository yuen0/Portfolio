import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SlArrowDown } from "react-icons/sl";
const Contact = () => {
	const form = useRef();
	const [buttonText, setButtonText] = useState("Send");
	const sendEmail = (e) => {
		e.preventDefault();
		setButtonText("Sending...");

		emailjs
			.sendForm(
				"service_3sbo4ak",
				"template_2sqtg97",
				form.current,
				"dBLrz9F6zxWvX7zqU"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("message sent");
					setButtonText("Sent");
					setTimeout(() => {
						setButtonText("Send");
						form.current.reset();
					}, 3000);
				},
				(error) => {
					console.log(error.text);
					setButtonText("Try Again");
					setTimeout(() => {
						setButtonText("Send");
					}, 3000);
				}
			);
	};

	return (
		<section className=" relative bg-primary-100 mx-auto h-screen  py-48">
			<div>
				<h2 className="mb-4 text-4xl font-lato tracking-wider font-extrabold text-center text-[#01f5b4]">
					Contact me.
				</h2>
			</div>
			<div className=" flex flex-wrap justify-evenly ">
				<div className="py-8 flex flex-col justify-start items-center">
					<form
						ref={form}
						onSubmit={sendEmail}
						className="space-y-8 w-96 px-6 py-4 rounded-xl shadow-lg bg-primary-100"
					>
						<div>
							<input
								type="text"
								name="user_name"
								className="shadow-sm border text-white bg-primary-200 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  border-gray-600 placeholder-grey-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
								placeholder="Full name"
								required
							/>
						</div>
						<div>
							<input
								type="email"
								name="user_email"
								className="shadow-sm border text-white bg-primary-200 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  border-gray-600 placeholder-grey-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
								placeholder="Email"
								required
							/>
						</div>
						<div className="sm:col-span-2">
							<textarea
								name="message"
								rows="6"
								className="shadow-sm border text-white bg-primary-200 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  border-gray-600 placeholder-grey-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
								placeholder="Message..."
							></textarea>
						</div>
						<button
							type="submit"
							value="Send"
							className="relative mt-8 w-24 inline-flex justify-center items-center px-3.5 text-center py-2 border-2 border-[#01f5b4] bg-transparent text-sm text-[#01f5b4] font-medium"
						>
							{buttonText}
						</button>
					</form>
				</div>
				<div className="absolute mx-auto bottom-8 left-1/2 transform -translate-x-1/2 ">
					<SlArrowDown className=" w-10 h-10 text-secondary-100" />
				</div>
			</div>
		</section>
	);
};

export default Contact;
