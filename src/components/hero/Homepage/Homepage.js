import React from 'react'
import parse from "html-react-parser"
import Lottie from "lottie-react";
import heroAnimation from "/content/assets/hero.json";

const Homepage = data => {
  return (
		<section id="Homepage">
			<Lottie animationData={heroAnimation} />
		  <h1>{data.heading}</h1>
		</section>
  )
}

export default Homepage