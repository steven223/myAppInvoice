import React, { useState } from 'react';

const PartyForm = ({ onSubmit }) => {
  const [partyName, setPartyName] = useState('');
  const [mobile, setMobile] = useState('');
  const [gstin, setGstin] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParty = { partyName, mobile, gstin, pincode, city, state, address };
    onSubmit(newParty);
    setPartyName('');
    setMobile('');
    setGstin('');
    setPincode('');
    setCity('');
    setState('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-header">Add Party</div>
      
      {/* Row 1: Party Name */}
      <div className="form-row">
        <label>
          Party Name:
          <input
            type="text"
            value={partyName}
            onChange={(e) => setPartyName(e.target.value)}
            required
          />
        </label>
      </div>

      {/* Row 2: Mobile Number and GSTIN */}
      <div className="form-row">
        <div className="form-group">
          <label>
            Mobile #:
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            GSTIN:
            <input
              type="text"
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Row 3: Pincode, City, State, and Address */}
      <div className="form-row">
        <div className="form-group">
          <label>
            Pincode:
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            State:
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group full-width">
          <label>
            Address:
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PartyForm;
