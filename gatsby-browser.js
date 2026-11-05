// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
//import "./src/style.css"
import "./src/styles/global.scss"

import React from "react"
import SunsetModal from "./src/components/abstracts/SunsetModal"

export const onRouteUpdate = ({ location, prevLocation }) => {
  const dataLayer = window.dataLayer || []
  dataLayer.push({'event': 'optimize.activate'})
}

export const wrapPageElement = ({ element }) => (
  <>
    {element}
    <SunsetModal />
  </>
)
