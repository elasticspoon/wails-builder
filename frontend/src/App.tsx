import { useState } from "react";
import "./App.css";
import { GetProfile } from "../wailsjs/go/profile/Profile";
import { profile } from "../wailsjs/go/models";

function Profile() {
  const [userProfile, setUserProfile] = useState<profile.Profile>();

  async function updateProfile() {
    let profile = await GetProfile();
    setUserProfile(profile);
  }

  return (
    <>
      <button className="btn" onClick={updateProfile}>
        Greet
      </button>
      {userProfile && userProfile!.workExperience?.title}
    </>
  );
}

function App() {
  return (
    <div id="App">
      <Profile />
    </div>
  );
}

export default App;
