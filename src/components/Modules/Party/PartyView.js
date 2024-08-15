import React from 'react';

const PartyView = ({ party, onBack }) => {
  return (
    <div>
      <h2>Party Details</h2>
      <p><strong>Name:</strong> {party.partyName}</p>
      <p><strong>Mobile:</strong> {party.mobile}</p>
      <p><strong>GSTIN:</strong> {party.gstin}</p>
      <p><strong>Pincode:</strong> {party.pincode}</p>
      <p><strong>City:</strong> {party.city}</p>
      <p><strong>State:</strong> {party.state}</p>
      <p><strong>Address:</strong> {party.address}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default PartyView;
