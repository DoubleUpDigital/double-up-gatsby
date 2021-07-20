import React, { useEffect, useState } from "react"
import { Helmet } from 'react-helmet'
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"
import Logo from "../components/logo"
import Navigation from "../components/navigation"
import LetsTalkForm from "./abstracts/LetsTalkForm"

import useDocumentScrollThrottled from '../scripts/useDocumentScrollThrottled';

// TODO: Fix whatever in the world this is
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons'
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons'
library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn, faDribbble, faLongArrowRight, faChevronDown);

const Layout = ({ invertHeader, invertPage, isHomePage, children, hideCta }) => {

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
            mainCtaTag
            mainCtaHeading
            mainCtaContent
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
  const [hidden, setHidden] = useState(false);
  const MINIMUM_SCROLL = 240;
  const TIMEOUT_DELAY = 200;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setScrolled(currentScrollTop > 80);

    setTimeout(() => {
      setHidden(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });


  return (
    <>
    <div className={`global-wrapper ${invertPage ? "darkmode" : ""}`} data-is-root-path={isHomePage}>

      <header className={`site-header ${invertHeader ? "site-header--inverted" : ""} ${invertPage ? "site-header--darkmode" : ""} ${scrolled ? "site-header--scrolled" : ""} ${hidden ? "site-header--hidden" : ""}`}>
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
            <button className="site-header__hamburger-button" type="button">
                <div className="site-header__hamburger-button-symbol">
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
        {!hideCta &&
          <div className="site-footer__cta">
            <div className="container container--medium-2">
              <div className="site-footer__cta_flex">
                <div className="site-footer__cta_content">
                  {siteOptions.mainCtaTag && <span className="tag">{siteOptions.mainCtaTag}</span>}
                  <h2 className="site-footer__cta_heading">{siteOptions.mainCtaHeading}</h2>
                  <div className="site-footer__cta_text">{siteOptions.mainCtaContent}</div>
                </div>
                <LetsTalkForm/>
              </div>
            </div>
          </div>
        }

        <div className="site-footer__main">
          <div className="container">
            <div className="site-footer__cols">
              <div className="site-footer__cols-branding">
                <div className="site-footer__cols-branding site-footer__cols-branding-desktop">
                  <Link className="site-footer__logo-link" to="/">
                    <Logo />
                  </Link>
                  <div className="site-footer__copyright">
                    <span>© {new Date().getFullYear()} {siteOptions.copyrightName || siteOptions.businessName}</span>
                  </div>
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
                <div className="site-footer__cols-branding site-footer__cols-branding-mobile">
                  <Link className="site-footer__logo-link" to="/">
                    <Logo />
                  </Link>
                  <div className="site-footer__copyright">
                    <span>© {new Date().getFullYear()} {siteOptions.copyrightName || siteOptions.businessName}</span>
                  </div>
                </div>
              </div>
              <div className="site-footer__cols-list site-footer__cols-list-1">
                <span className="site-footer__list-label">Company <FontAwesomeIcon icon={faChevronDown} /></span>
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
              <div className="site-footer__cols-list site-footer__cols-list-2">
                <span className="site-footer__list-label">What We Offer <FontAwesomeIcon icon={faChevronDown} /></span>
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
              <div className="site-footer__cols-list site-footer__cols-list-3">
                <span className="site-footer__list-label">Contact <FontAwesomeIcon icon={faChevronDown} /></span>
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
    <Helmet>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src={withPrefix('main.js')} type="text/javascript" />
    </Helmet>
    </>
  )
}

export default Layout
