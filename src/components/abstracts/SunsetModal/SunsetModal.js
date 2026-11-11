import React, { useEffect, useState } from "react"
import "./sunsetModal.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowRight } from "@fortawesome/pro-regular-svg-icons"

// TODO: Draft copy, pending review.
const content = {
  logo: "/punch-logo.png",
  logoAlt: "Punch",
  heading: "Double Up Digital is now Punch!",
  body:
    "We’ve got a new name and a fresh look, but we’re still building modern websites for growing brands. Come say hello at our new site.",
  buttonLabel: "Visit Punch",
  buttonUrl: "https://fueledbypunch.com/",
}

const STORAGE_KEY = "sunsetModalClosed"

const getScrollbarWidth = () => {
  const outer = document.createElement("div")
  outer.style.visibility = "hidden"
  outer.style.overflow = "scroll"
  document.body.appendChild(outer)

  const inner = document.createElement("div")
  outer.appendChild(inner)

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
  outer.parentNode.removeChild(outer)

  return scrollbarWidth
}

/*
 * Mounted once in wrapPageElement (gatsby-browser.js and gatsby-ssr.js) so it stays mounted
 * between pages. Rendering it from a page or from Layout would remount it on every route
 * change, bringing it back after the X or backdrop closed it.
 */
const SunsetModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  // sessionStorage doesn't exist at build time. Starting closed and reading it here keeps
  // the server and client markup the same.
  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setIsOpen(true)
    }
  }, [])

  // Lock body scroll
  useEffect(() => {
    if (!isOpen) return

    const scrollbarWidth = getScrollbarWidth()
    document.body.style.overflow = "hidden"

    if (scrollbarWidth) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="sunsetModal">
      <div className="sunsetModal__wrap" onClick={closeModal}>
        <div className="sunsetModal__card" onClick={e => e.stopPropagation()}>
          <button
            className="sunsetModal__close"
            type="button"
            aria-label="Close Modal"
            onClick={closeModal}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.25 0.75L12 12L0.750025 23.25" />
              <path d="M0.75 0.75L12 12L23.25 23.25" />
            </svg>
          </button>
          <div className="sunsetModal__content">
            <img
              className="sunsetModal__logo"
              src={content.logo}
              alt={content.logoAlt}
            />
            <div className="sunsetModal__text">
              <h3 className="sunsetModal__heading">{content.heading}</h3>
              <p className="sunsetModal__body">{content.body}</p>
            </div>
            <div className="sunsetModal__actions">
              <a
                className="button"
                href={content.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button__text">{content.buttonLabel}</span>
                <span className="button__orb">
                  <FontAwesomeIcon icon={faLongArrowRight} />
                </span>
              </a>
              <button
                className="sunsetModal__continue"
                type="button"
                onClick={() => {
                  closeModal()
                  sessionStorage.setItem(STORAGE_KEY, "true")
                }}
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SunsetModal
