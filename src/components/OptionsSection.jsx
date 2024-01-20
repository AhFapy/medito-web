import React from 'react'
import "./option-button-styles.css"

function OptionsButton(props) {
  return (
<button class="btn-17">
  <span class="text-container">
    <span class="text">{props.text}</span>
  </span>
</button>
  )
}

function OptionsSection() {
  return (
    <>
      <OptionsButton text="Donate"/>
      <OptionsButton text="Additional Information"/>
      <OptionsButton text="About this Fundraise"/>
    </>
  )
}


export default OptionsSection