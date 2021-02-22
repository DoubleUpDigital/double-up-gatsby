import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import Lottie from "lottie-react";
import heroAnimation from "/content/assets/hero.json";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexTemplate = ({ data }) => (
	<Layout>
	  <Lottie animationData={heroAnimation} />
  	
  </Layout>
)

export default IndexTemplate