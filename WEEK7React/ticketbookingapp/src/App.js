import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1>Ticket Booking App</h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
      {loggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
