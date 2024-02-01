import React, { useState } from 'react'
import DonationBar from "../DonationBar"
import "./styles.css"
import { useRef } from "react";


function DonationOption(props) {
  
  return (
    <div
      className={props.selected ? "selected-round-circle" : "round-circle"}
      onClick={() => {
        props.onClick(props.id);
      }}
    >
      <b>{props.text}</b>
    </div>
  );
}

function Donate() {
  const [donationAmount, setDonationAmount]= useState();
  const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      const value = e.target.value;
  
      const numericValue = value.replace(/[^0-9]/g, '');

      setDonationAmount(numericValue)
      setInputValue(numericValue);
      console.log("donation value set to", donationAmount)
    };
  
  const donationData = {
    totalGoal:"$150.000",
    currentAmount: "$37.500",
}
const [selectedButton, setSelectedButton] = useState(null);
  
const handleSelection = function(id) {
  setSelectedButton(id);
  setDonationAmount(id)

  console.log("element with id:", id, "changed")
}

  const handleSubmit = function() {
    const wrapper = document.getElementById('wrapper');
    const donatedWindow = document.getElementById('donatedWindow');

    if (wrapper && donatedWindow) {
      wrapper.classList.remove("wrapper");
      wrapper.classList.add("hidden");
  
      donatedWindow.classList.remove("hidden");
      donatedWindow.classList.add("donated-window");
    }
  }

  const returnFunction = function() {
    const wrapper = document.getElementById('wrapper');
    const donatedWindow = document.getElementById('donatedWindow');

    if (wrapper && donatedWindow) {
      wrapper.classList.add("wrapper");
      wrapper.classList.remove("hidden");
  
      donatedWindow.classList.add("hidden");
      donatedWindow.classList.remove("donated-window");
    }
  }


  return (
    <>
    <div className='hidden' id="donatedWindow">
      <p>You have donated {donationAmount}!<br/> </p>
      
      <div>Thanks for your support</div>
      <button className='donate-submit' onClick={returnFunction}>
        Go Back
      </button>

    </div>
    <div className='wrapper' id="wrapper">
            <span className='donate-title'><b>Contribute To The Cause</b></span>
      <div className='bg-header'>
      <DonationBar totalGoal={donationData.totalGoal} currentAmount={donationData.currentAmount} height="1rem"/>
      <span className='amount-text'>{donationData.currentAmount} raised of <b>{donationData.totalGoal}</b></span>
      <div className='donate-wrapper'>
        
        <DonationOption
        text="$5"
        onClick={() => handleSelection("$5")}
        id="$5"
        selected={selectedButton === "$5" ? true : ""}
        />
        
        <DonationOption
        text="$10" 
        onClick={() => handleSelection("$10")}
        id="$10"
        selected={selectedButton === "$10" ? true : ""}
  />
        <DonationOption
        text="$15"
        onClick={() => handleSelection("$15")}
        id="$15"
        selected={selectedButton === "$15" ? true : ""}
        />
        <DonationOption
        text="$50"
        onClick={() => handleSelection("$50")}
        id="$50"
        selected={selectedButton === "$50" ? true : ""}
        />
        <DonationOption
        text="$100"
        onClick={() => handleSelection("$100")}
        id="$100"
        selected={selectedButton === "$100" ? true : ""}
        />
        </div>
        <input
        type="text" 
        id="numericInput"
        className='donator-input'
        value={inputValue}
        onChange={handleInputChange}
        pattern="[0-9]*" 
        placeholder='Custom Amount'
      />
      <button className='donate-submit' onClick={handleSubmit}>
        Donate
      </button>
      </div>
    </div>
    </>
  )
}

export default Donate