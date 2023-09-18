import React, { useState } from 'react';

function GuestList() {
  const [guestName, setGuestName] = useState('');
  const [guests, setGuests] = useState([]);

  const handleAddGuest = () => {
    if (guestName.trim() !== '') {
      setGuests([...guests, guestName]);
      setGuestName('');
    }
  };

  const handleRemoveGuest = (index) => {
    const updatedGuests = [...guests];
    updatedGuests.splice(index, 1);
    setGuests(updatedGuests);
  };

  return (
    <div>
      <h2>Guest List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter guest name"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
        <button onClick={handleAddGuest}>Add Guest</button>
      </div>
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>
            {guest}
            <button onClick={() => handleRemoveGuest(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestList;
