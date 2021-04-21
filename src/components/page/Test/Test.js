import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./test.module.scss"

const Test = data => {
  return (
		<div className="test">
			{data.text}
		</div>
  )
}

export default Test