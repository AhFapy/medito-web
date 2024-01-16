import React from 'react';

const DonationBar = ({ totalGoal, currentAmount }) => {
  // Remove the '$' and ',' from the amounts and convert them to numbers
  const totalGoalAmount = parseFloat(totalGoal.replace(/[^\d.]/g, ''));
  const currentAmountValue = parseFloat(currentAmount.replace(/[^\d.]/g, ''));

  // Calculate the percentage of the current amount raised
  const percentage = (currentAmountValue / totalGoalAmount) * 100;

  const barStyle = {
    width: '35vw',
    height: '0.5rem',
    marginTop: "2rem",
    backgroundColor: '#f0f0f0',
    border: '1px solid black',
    position: 'relative',
    borderRadius: '0.5rem',
    overflow: 'hidden',
  };

  const greenLayerStyle = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: '#4CBB17',
    position: 'absolute',
    top: '0',
    left: '0',
    borderRadius: '0.5rem',
    transition: 'width 0.5s ease',
  };

  return (
    <div style={barStyle}>
      <div style={greenLayerStyle}></div>
    </div>
  );
};


export default DonationBar