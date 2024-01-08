// import { useEffect} from "react";

// export default function selectedContactId({ selectedContactId, setSelectedContactId }) {
//   // const [contact, setContact] = useState(null);

//   useEffect(() => {
//     async function fetchSelected() {
//       try {
//         const response = await fetch(
//           `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
//         );
//         const result = await response.json();
//         setSelectedContactId(result);
//         console.log("Success: ", result);
//       } catch (error) {
//         console.log("Error: ", error);
//       }
//     }
//     fetchSelected();
//   }, []);
// }

import React, { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setSelectedContact(result);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedContactId) {
      fetchSelectedContact();
    }
  }, [selectedContactId]);

  return (
    <div>
      <button onClick={() => setSelectedContactId(null)}>Go Back</button>
      {selectedContact ? (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
