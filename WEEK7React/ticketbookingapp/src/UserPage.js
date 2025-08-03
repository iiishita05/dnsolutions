import React from "react";

function UserPage() {
  return (
    <div>
      <h2>Welcome, User</h2>
      <p>Select a flight to book your ticket.</p>
      <ul>
        <li>Flight A <button>Book</button></li>
        <li>Flight B <button>Book</button></li>
        <li>Flight C <button>Book</button></li>
      </ul>
    </div>
  );
}

export default UserPage;
