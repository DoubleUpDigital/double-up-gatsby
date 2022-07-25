import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "./list.scss"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'
library.add(faCheck);

const List = data => {
  return (
		<section className={`list ${data.spaceBackground ? "listSpace"  : ""}`}>
			{data.spaceBackground && <StaticImage
				className="list__background"
				src="../../../ui/blob-full-1.png"
				placeholder="tracedSVG"
				quality="100"
				alt=""
				style={{position: "absolute"}} />}
			<div className="container container--small">
				<span className={`list__tag tag ${data.spaceBackground ? "tag--purple-filled"  : ""}`}>{data.sectionLabel}</span>
				<h2 className="list__heading">{data.heading}</h2>
				<div className="list__content margin-fix" dangerouslySetInnerHTML={{ __html:data.content }}></div>
			</div>
			<div className="container container--medium">
				<ul className="list__items">
					{data.listItems.map((item,i) => (
						<li className="list__items_item" key={'listItem_' + i}>
							<span className="list__items_item_icon">
								<FontAwesomeIcon icon={faCheck} />
							</span>
							<span className="list__items_item_text">{item.text}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
  )
}

export default List
