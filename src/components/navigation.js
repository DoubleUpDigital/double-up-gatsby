import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import {
  faArrowRight,
} from '@fortawesome/pro-regular-svg-icons'
import {
  faCaretUp,
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = () => {
  const nav = useStaticQuery(graphql`
    {
      wpMenu(locations: {eq: GATSBY_HEADER_MENU}) {
        menuItems {
          nodes {
            label
            url
            target
            parentId
            id
            headerMenuOptions {
              menuDescription
              menuItemDescription
              menuItemIcon {
                gatsbyImage(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  formats: [AUTO, WEBP]
                  outputPixelDensities: [1.5, 2]
                  quality: 100
                  width: 60
                )
                localFile {
                  publicURL
                  extension
                }
              }
            }
          }
        }
      }
    }
  `)

  // move menu items with a parent ID under the parent
  const menuItems = nav.wpMenu.menuItems.nodes
  menuItems.forEach((menuItem, i) => {
    if (menuItem.parentId) {
      const parent = menuItems.find(item => item.id === menuItem.parentId)
      if (parent) {
        if (!parent.children) {
          parent.children = []
        }
        parent.children.push(menuItem)
        menuItems.splice(i, 1)
      }
    }
  })

  return (
    <ul className="menu">
      {menuItems.map((menuItem,i) => (
        <li className="menu__item" key={'menuItem_' + i}>
          <Link
            to={menuItem.url}
            className="menu__item-link"
            activeClassName="menu__item-link--active"
            partiallyActive={true}>
            {menuItem.label}
          </Link>
          {menuItem.children && (
            <>
              <div className="menu__item-arrow">
                <FontAwesomeIcon icon={faCaretUp} />
              </div>
              <div className="sub-menu">
                {menuItem.headerMenuOptions.menuDescription && (
                  <div className="sub-menu__description margin-fix" dangerouslySetInnerHTML={{ __html: menuItem.headerMenuOptions.menuDescription }} />
                )}
                <div className="sub-menu__grid">
                  {menuItem.children.map((childMenuItem, i) => (
                    <Link
                      to={childMenuItem.url}
                      className="sub-menu__item"
                      activeClassName="sub-menu__item--active"
                      partiallyActive={true}
                      key={'childMenuItem_' + i}>
                      {childMenuItem.headerMenuOptions.menuItemIcon && (
                        <div className="sub-menu__item-icon">
                          {childMenuItem.headerMenuOptions.menuItemIcon.localFile.extension !== 'svg' ? (
                            <GatsbyImage
                              image={childMenuItem.headerMenuOptions.menuItemIcon.gatsbyImage}
                              alt={childMenuItem.label}
                              />
                          ) : (
                            <img
                              src={childMenuItem.headerMenuOptions.menuItemIcon.localFile.publicURL}
                              alt={childMenuItem.label}
                              />)
                          }
                        </div>
                      )}
                      <div className="sub-menu__item-text">
                        <span className="sub-menu__item-label">
                          {childMenuItem.label}
                          <FontAwesomeIcon className="sub-menu__item-arrow" icon={faArrowRight} />
                        </span>
                        {childMenuItem.headerMenuOptions.menuItemDescription && (
                          <div className="sub-menu__item-description" dangerouslySetInnerHTML={{ __html: childMenuItem.headerMenuOptions.menuItemDescription }} />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navigation
