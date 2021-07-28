import React, { useState } from "react";
import Calendar from "./components/Calendar";
import Login from "./components/Login";

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    loggedIn?<Calendar />:<Login setLoggedIn={setLoggedIn} />
  );
}

export default App;
