import { useState } from "react";
import "./App.css";
import { GetProfile } from "../wailsjs/go/profile/Profile";
import { LogDebug } from "../wailsjs/runtime/runtime.js";

// const [profile, setProfile] = useState({});

function showProfile() {
  GetProfile()
    .then((v) => {
      console.log(v);
      // LogDebug(JSON.stringify(v));
    })
    .catch((e) => {
      console.log(e);
      // LogDebug(JSON.stringify(e));
    });
}

function App() {
  return (
    <div id="App">
      <button className="btn" onClick={showProfile}>
        Greet
      </button>
    </div>
  );
}

export default App;
