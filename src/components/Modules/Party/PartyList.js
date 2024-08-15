import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Modal';
import '../Party/Party.css'

const PartyList = ({ parties }) => {
  const [selectedParty, setSelectedParty] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddParty, setIsAddParty] = useState(false);

  const handleViewClick = (party) => {
    setSelectedParty(party);
    setIsAddParty(false);
    setIsModalVisible(true);
  };

  // const handleAddPartyClick = () => {
  //   setSelectedParty(null);
  //   setIsAddParty(true);
  //   setIsModalVisible(true);
  // };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedParty(null);
    setIsAddParty(false);
  };

  return (
    <div className="party-list">
      {/* <button className="add-party-btn" onClick={handleAddPartyClick}>
        Add Party
      </button> */}
      <table>
        <thead>
          <tr>
            <th>Party Name</th>
            <th>Mobile</th>
            <th>GSTIN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parties.map((party) => (
            <tr key={party.id}>
              <td>{party.partyName}</td>
              <td>{party.mobile}</td>
              <td>{party.gstin}</td>
              <td>
                <button
                  onClick={() => handleViewClick(party)}
                  className="view-btn"
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalVisible && (
        <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
          {/* <div className="modal-header">
            {isAddParty ? 'Add Party' : 'Party Details'}
          </div> */}
          <form>
            {isAddParty ? (
              <>
                {/* Add Party Form */}
                <div className="form-row">
                  <div className="form-group">
                    <label>Party Name</label>
                    <input type="text" placeholder="Enter Party Name" />
                  </div>
                  <div className="form-group">
                    <label>Mobile</label>
                    <input type="text" placeholder="Enter Mobile Number" />
                  </div>
                  <div className="form-group">
                    <label>GSTIN</label>
                    <input type="text" placeholder="Enter GSTIN" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Pincode</label>
                    <input type="text" placeholder="Enter Pincode" />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" placeholder="Enter City" />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" placeholder="Enter State" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea placeholder="Enter Address"></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </>
            ) : (
              <>
                {/* Party Details Form */}
                <div className="form-row">
                  <div className="form-group">
                    <label>Party Name</label>
                    <input type="text" value={selectedParty?.partyName} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Mobile</label>
                    <input type="text" value={selectedParty?.mobile} readOnly />
                  </div>
                  <div className="form-group">
                    <label>GSTIN</label>
                    <input type="text" value={selectedParty?.gstin} readOnly />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Pincode</label>
                    <input type="text" value={selectedParty?.pincode} readOnly />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" value={selectedParty?.city} readOnly />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" value={selectedParty?.state} readOnly />
                  </div>
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea value={selectedParty?.address} readOnly />
                </div>
                <button type="button" className="cancel-btn" onClick={handleCloseModal}>
                  Close
                </button>
              </>
            )}
          </form>
        </Modal>
      )}
    </div>
  );
};

export default PartyList;
