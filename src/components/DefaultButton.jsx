import React from 'react'
import "./component-styles.css"

function DefaultButton() {
  return (
    <button class="learn-more">
    <span class="circle" aria-hidden="true">
    <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
    </button>
  )
}

export default DefaultButton