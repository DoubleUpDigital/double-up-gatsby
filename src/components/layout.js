import React, { useEffect, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Logo from "../components/logo"
import Navigation from "../components/navigation"

const Layout = ({ invertHeader, isHomePage, children }) => {
  
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
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
          
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>
      <div className="placeholder"></div>

      <footer className="site-footer">
        <div class="site-footer__form">
        
        </div>
        <div className="site-footer__main">
          <div class="container">
            <div className="site-footer__cols">
              <div className="site-footer__cols-branding">
                <Link className="site-footer__logo-link" to="/">
                  <Logo />
                </Link>
                <div className="site-footer__copyright">
                  <span>© {new Date().getFullYear()} Double Up Holdings LLC</span>
                </div>
              </div>
              <div className="site-footer__cols-list">
                
              </div>
              <div className="site-footer__cols-list">
              
              </div>
              <div className="site-footer__cols-list">
              
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
