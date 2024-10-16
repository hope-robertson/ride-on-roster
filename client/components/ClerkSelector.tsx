// import React, { useState, useEffect } from 'react';

// interface ClerkSelectorProps {
//   onSelect: (clerkId: number) => void;
// }

// function ClerkSelector({ onSelect }: ClerkSelectorProps) {
//   const [clerks, setClerks] = useState([]);

//   useEffect(() => {
//     // Fetch clerks from the backend, filtering by status
//     fetchClerks()
//       .then((data) => setClerks(data.filter((clerk) => clerk.status)))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <select onChange={(e) => onSelect(e.target.value)}>
//       <option value="">Select a clerk</option>
//       {clerks.map((clerk) => (
//         <option key={clerk.id} value={clerk.id}>
//           {clerk.name}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default ClerkSelector;
