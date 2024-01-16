import React from 'react'
import "./page.css"
import Navbar from './components/Navbar'
import mainPhoto from './assets/main-photo.jpeg';
import DonationBar from './components/DonationBar';
import DefaultButton from './components/DefaultButton';

function Page() {
    const donationData = {
        totalGoal:"$150.000",
        currentAmount: "$37.500",
    }
  return (
    <>
    <Navbar/>
    <div className='presentation-section'>
        <div className='title-div'>
            <span className='title'>Raise Awareness About The Importance Of Mindfullness</span>
        </div>
    <div className='sub-section-container'>
        <div className='img-container'>
            <img className='main-photo' src={mainPhoto}></img>
        </div>
        <div className='funding-goal'>
            <span className='subtitle'>Join us in fostering a mindful revolution! With your support, we'll create initiatives, workshops, and educational programs to bring mindfulness to the forefront of mental health discussions. Together, let's empower individuals to navigate life's challenges with resilience and peace.
</span>
            <DonationBar totalGoal={donationData.totalGoal} currentAmount={donationData.currentAmount}/>
            <span className='amount-text'>{donationData.currentAmount} raised of {donationData.totalGoal}</span>
            <DefaultButton/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Page