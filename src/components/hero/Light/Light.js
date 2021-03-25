import React from 'react'
import * as lightStyles from "./light.module.scss"

const Light = data => {
  return (
		<section className={lightStyles.hero}>
			<div className="header-spacer"></div>
			<div className={lightStyles.hero__content}>
				<div className="container">
					<span className="tag">{data.title}</span>
				  <h1 className={lightStyles.hero__title}>{data.heading}</h1>
					<div 
						className={`${lightStyles.hero__description} margin-fix`} 
						dangerouslySetInnerHTML={{ __html:data.content}}>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Light