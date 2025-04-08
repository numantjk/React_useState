import { useState } from 'react';

function App1() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
        <h1>Please log in</h1>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login Status
      </button>
    </div>
  );
}

export default App1;