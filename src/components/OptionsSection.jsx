import React from 'react'
import "./option-button-styles.css"
import { useState } from 'react'

function OptionsButton(props) {
  const id = props.selected;
  return (
    <button
      className={`btn-17 ${props.selected}`}
      id={id}
      onClick={() => props.onClick(props.id)}
    >
      <span className="text-container">
        <span className={`${props.selected === id ? "text" : "selected-text" }`}>{props.text}</span>
      </span>
    </button>
  )
}

function OptionsSection() {
  const [selectedButton, setSelectedButton] = useState(null);
  
    const handleSelection = function(id) {
      setSelectedButton(null);
      setSelectedButton(id);
  }

  return (
    <>
      <OptionsButton
        text="Donate"
        id="donate"
        onClick={handleSelection}
        selected={selectedButton === "donate" ? "selected" : ""}
      />
      <OptionsButton
        text="Additional Information"
        id="info"
        onClick={handleSelection}
        selected={selectedButton === "info" ? "selected" : ""}
      />
      <OptionsButton
        text="About this Fundraise"
        id="about"
        onClick={handleSelection}
        selected={selectedButton === "about" ? "selected" : ""}
      />
    </>
  )
}


export default OptionsSection