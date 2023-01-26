// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
//import "./src/style.css"
import "./src/styles/global.scss"

export const onRouteUpdate = ({ location, prevLocation }) => {
  const dataLayer = window.dataLayer || []
  dataLayer.push({'event': 'optimize.activate'})
}
