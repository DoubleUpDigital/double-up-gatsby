import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Navigation = () => {
  const nav = useStaticQuery(graphql`
    {
      wpMenu(locations: {eq: GATSBY_HEADER_MENU}) {
        menuItems {
          nodes {
            label
            url
            target
          }
        }
      }
    }
  `)

  return (
    <ul className="menu">
      {nav.wpMenu.menuItems.nodes.map((menuItem,i) => (
        <li className="menu__item" key={'menuItem_' + i}>
          <Link className="menu__item-link" to={menuItem.url}>
            {menuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
