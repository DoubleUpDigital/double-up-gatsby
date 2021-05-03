import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Logo from "../components/logo"
import Navigation from "../components/navigation"

// TODO: Fix whatever in the world this is
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'
library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn, faDribbble, faLongArrowRight);

const Layout = ({ invertHeader, isHomePage, children }) => {

  const {
    wp: {
      generalSettings: { title },
      siteGlobalSettings: { siteOptions },
    },
    footerMenu1,
    footerMenu2
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
        siteGlobalSettings {
          siteOptions {
            businessName
            copyrightName
            emailAddress
            phoneNumber
            address
            dribbble
            facebook
            instagram
            linkedin
            twitter
            headerCta {
              target
              title
              url
            }
          }
        }
      }
      footerMenu1: wpMenu(locations: {eq: GATSBY_FOOTER_MENU}) {
        menuItems {
          nodes {
            label
            target
            url
          }
        }
      }
      footerMenu2: wpMenu(locations: {eq: GATSBY_FOOTER_MENU_2}) {
        menuItems {
          nodes {
            label
            target
            url
          }
        }
      }
    }
  `)

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.pageYOffset > 80)
      );
    }
  }, [])

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>

      <header className={`site-header ${invertHeader ? "site-header--inverted" : ""} ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container container--flex container--full site-header__cols">
          <div className="site-header__branding">
            <Link className="site-header__branding-link" to="/">
              <Logo />
            </Link>
          </div>
          <nav className="site-header__navigation">
            <Navigation />
          </nav>
          <div className="site-header__cta">
            <Link className="button" to={siteOptions.headerCta.url}>
              <span className="button__text">
                {siteOptions.headerCta.title}
              </span>
              <span className="button__orb">
                <FontAwesomeIcon icon={faLongArrowRight} />
              </span>
            </Link>
          </div>
          <div className="site-header__mobile-nav">
            <button class="site-header__hamburger-button" type="button">
                <div class="site-header__hamburger-button-symbol">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
          </div>
        </div>
      </header>

      <main className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="site-footer__form">

        </div>
        <div className="site-footer__main">
          <div className="container">
            <div className="site-footer__cols">
              <div className="site-footer__cols-branding">
                <Link className="site-footer__logo-link" to="/">
                  <Logo />
                </Link>
                <div className="site-footer__copyright">
                  <span>© {new Date().getFullYear()} {siteOptions.copyrightName || siteOptions.businessName}</span>
                </div>
                <ul className="site-footer__social">
                  <li className="site-footer__social-item">
                    <a href={siteOptions.facebook} className="site-footer__social-item-link" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li className="site-footer__social-item">
                    <a href={siteOptions.twitter} className="site-footer__social-item-link" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="site-footer__social-item">
                    <a href={siteOptions.instagram} className="site-footer__social-item-link" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="site-footer__social-item">
                    <a href={siteOptions.linkedin} className="site-footer__social-item-link" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li className="site-footer__social-item">
                    <a href={siteOptions.dribbble} className="site-footer__social-item-link" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faDribbble} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="site-footer__cols-list">
                <span className="site-footer__list-label">Company</span>
                <ul className="site-footer__list">
                  {footerMenu1.menuItems.nodes.map((menuItem,i) => (
                    <li className="site-footer__list-item" key={'menuItem_' + i}>
                      <Link
                        to={menuItem.url}
                        className="site-footer__list-link">
                        {menuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="site-footer__cols-list">
                <span className="site-footer__list-label">What We Offer</span>
                <ul className="site-footer__list">
                  {footerMenu2.menuItems.nodes.map((menuItem,i) => (
                    <li className="site-footer__list-item" key={'menuItem_' + i}>
                      <Link
                        to={menuItem.url}
                        className="site-footer__list-link">
                        {menuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="site-footer__cols-list">
                <span className="site-footer__list-label">Contact</span>
                <ul className="site-footer__list">
                  <li className="site-footer__list-item">
                    <a className="site-footer__list-link" href={`tel:${siteOptions.phoneNumber}`}>{siteOptions.phoneNumber}</a>
                  </li>
                  <li className="site-footer__list-item">
                    <a className="site-footer__list-link" href={`mailto:${siteOptions.emailAddress}`}>{siteOptions.emailAddress}</a>
                  </li>
                  <li className="site-footer__list-item" dangerouslySetInnerHTML={{__html:siteOptions.address}}></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
