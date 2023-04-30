import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResponsiveSlider = ({ slides }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: true,
	};

	return (
		<div className=" w-80 md:w-3/5 text-white text-center mb-8">
			<Slider {...settings}>
				{slides.map((slide, index) => (
					<div key={index}>
						<h3 className=" text-start text-3xl font-lato font-bold">
							{slide.title}
						</h3>

						<img
							src={slide.image}
							alt={slide.title}
							className=" w-80 md:w-auto my-6 "
						/>

						<p className=" text-primary-50">{slide.description}</p>
						<a target="_blank" href={slide.link}>
							Learn more
						</a>
						<br />
						<a target="_blank" href={slide.link}>
							<button
								type="button"
								className="relative inline-flex items-center mt-6 px-3.5 py-2 border-2 border-secondary-100 bg-transparent text-sm text-secondary-100 font-medium"
							>
								Github
							</button>
						</a>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ResponsiveSlider;
