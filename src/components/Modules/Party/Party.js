import React, { useState } from 'react';
import './Party.css';
import PartyForm from './PartyForm';
import PartyList from './PartyList';
import PartyView from './PartyView';
import Modal from '../../Modal'; // Import the Modal component

const Party = () => {
  const [parties, setParties] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [viewingParty, setViewingParty] = useState(null);

  const handleAddParty = (party) => {
    setParties([...parties, party]);
    setIsAdding(false);
  };

  const handleCancelAddParty = () => {
    setIsAdding(false);
  };

  const handleViewParty = (index) => {
    setViewingParty(parties[index]);
  };

  const handleDeleteParty = (index) => {
    const updatedParties = parties.filter((_, i) => i !== index);
    setParties(updatedParties);
  };

  const handleBack = () => {
    setViewingParty(null);
  };

  return (
    <div className="party-container">
      {viewingParty ? (
        <PartyView party={viewingParty} onBack={handleBack} />
      ) : (
        <>
          <button className="add-party-btn" onClick={() => setIsAdding(true)}>Add Party</button>
          <PartyList parties={parties} onView={handleViewParty} onDelete={handleDeleteParty} />

          {/* Modal for Add Party Form */}
          <Modal isVisible={isAdding} onClose={handleCancelAddParty}>
            <PartyForm onSubmit={handleAddParty} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default Party;
