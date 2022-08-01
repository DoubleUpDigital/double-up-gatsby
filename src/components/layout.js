import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql, withPrefix } from "gatsby"
import Logo from "../components/logo"
import Navigation from "../components/navigation"

import LetsTalkForm from "./abstracts/LetsTalkForm"
import { ParallaxProvider } from 'react-scroll-parallax';
import $ from 'jquery'
import { Script } from "gatsby"

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
  })

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  }

  useEffect(() => {

    // jQuery

    $('.gravityform:not(.gravityform--id-2):not(.gravityform--id-4) .gform_button').append('<span class="orb"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-right" class="svg-inline--fa fa-long-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M295.515 115.716l-19.626 19.626c-4.753 4.753-4.675 12.484.173 17.14L356.78 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h344.78l-80.717 77.518c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l131.799-131.799c4.686-4.686 4.686-12.284 0-16.971L312.485 115.716c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg></span>');

    $('.gravityform--id-2 .gform_button').html('<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-right" class="svg-inline--fa fa-long-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M295.515 115.716l-19.626 19.626c-4.753 4.753-4.675 12.484.173 17.14L356.78 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h344.78l-80.717 77.518c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l131.799-131.799c4.686-4.686 4.686-12.284 0-16.971L312.485 115.716c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>');

    $('.gravityform--id-4 .gform_button').html('<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-right" class="svg-inline--fa fa-long-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M295.515 115.716l-19.626 19.626c-4.753 4.753-4.675 12.484.173 17.14L356.78 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h344.78l-80.717 77.518c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l131.799-131.799c4.686-4.686 4.686-12.284 0-16.971L312.485 115.716c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>');

    // NUMBERED LIST
    $('.NumberedList__content-inner').not('[data-num=0]').hide();
    $(document).on('click', '.NumberedList__title', function() {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      var dataNum = $(this).data('num');
      var show = $('.NumberedList__content-inner[data-num=' + dataNum + ']');
      $(show).show();
      $(show).siblings().hide();
    });

    // NumberedList Mobile
    $('.NumberedList__accordion-item .NumberedList__accordion-content').hide();
    $(document).on('click', '.NumberedList__accordion-item .NumberedList__accordion-title', function(){
      $(this).parents().siblings().children('.NumberedList__accordion-content').slideUp(300);
      $(this).siblings('.NumberedList__accordion-content').slideToggle(300);
      $(this).parents().toggleClass('active');
      $(this).parents().siblings('.NumberedList__accordion-item').removeClass('active');
    });

    // FOOTER ACCORDION ON MOBILE
    var windowWidth = $( window ).width();
    if(windowWidth < 769) {
      $('.site-footer__cols-list .site-footer__list').hide();

      $(document).on('click', '.site-footer__cols-list-1 .site-footer__list-label', function() {
        $(this).toggleClass('active');
        $(this).parents().siblings('.site-footer__cols-list').children('.site-footer__list-label').removeClass('active');
        $('.site-footer__cols-list-1 .site-footer__list').slideToggle(300);
        $(this).parents().siblings('.site-footer__cols-list').children('.site-footer__list').slideUp(300);
      });

      $(document).on('click', '.site-footer__cols-list-2 .site-footer__list-label', function() {
        $(this).toggleClass('active');
        $(this).parents().siblings('.site-footer__cols-list').children('.site-footer__list-label').removeClass('active');
        $('.site-footer__cols-list-2 .site-footer__list').slideToggle(300);
        $(this).parents().siblings('.site-footer__cols-list').children('.site-footer__list').slideUp(300);
      });

      $(document).on('click', '.site-footer__cols-list-3 .site-footer__list-label', function() {
        $(this).toggleClass('active');
        $(this).parents().siblings('.site-footer__cols-list').children('.site-footer__list-label').removeClass('active');
        $('.site-footer__cols-list-3 .site-footer__list').slideToggle(300);
        $(this).parents().siblings('.site-footer__cols-list').children('.site-footer__list').slideUp(300);
      });
    }

    // GRAVITY FORM PLACEHOLDERS
    if(windowWidth < 480) {
      $('#gravityform--id-4 input[type="email"]').attr('placeholder', 'Email address');
    }

  }, []);


  return (
    <ParallaxProvider>
    <Script
      src={`https://www.googleoptimize.com/optimize.js?id=GTM-KF3WB3X`}
    />
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
          <div className={`site-header__mobile-nav ${isActive ? "open" : ""}`}>
            <button className="site-header__hamburger-button" id="hamburger" type="button" aria-label="Menu Button" onClick={() => setActive(!isActive)}>
              <div className="site-header__hamburger-button-symbol">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </button>
            <div className="site-header__mobile-nav-items">
              <Navigation />
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
              <Link className="button" to={siteOptions.headerCta.url}>
                <span className="button__text">
                  {siteOptions.headerCta.title}
                </span>
                <span className="button__orb">
                  <FontAwesomeIcon icon={faLongArrowRight} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="site-main">
        {children}
      </main>

      <footer className="site-footer darkmode">
        {!hideCta &&
          <div className="site-footer__cta" id="cta">
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
                    <a href={siteOptions.facebook} className="site-footer__social-item-link" target="_blank" rel="noreferrer" aria-label="Facebook">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li className="site-footer__social-item">
                    <a href={siteOptions.twitter} className="site-footer__social-item-link" target="_blank" rel="noreferrer" aria-label="Twitter">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="site-footer__social-item">
                    <a href={siteOptions.instagram} className="site-footer__social-item-link" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="site-footer__social-item">
                    <a href={siteOptions.linkedin} className="site-footer__social-item-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li className="site-footer__social-item">
                    <a href={siteOptions.dribbble} className="site-footer__social-item-link" target="_blank" rel="noreferrer" aria-label="Dribbble">
                      <FontAwesomeIcon icon={faDribbble} />
                    </a>
                  </li>
                </ul>
                <div className="site-footer__cols-branding site-footer__cols-branding-mobile">
                  <Link className="site-footer__logo-link" to="/" aria-label="Homepage">
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
    </ParallaxProvider>
  )


}



export default Layout
