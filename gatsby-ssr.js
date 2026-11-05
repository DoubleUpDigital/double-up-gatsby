import React from "react"
import SunsetModal from "./src/components/abstracts/SunsetModal"

export const wrapPageElement = ({ element }) => (
  <>
    {element}
    <SunsetModal />
  </>
)
