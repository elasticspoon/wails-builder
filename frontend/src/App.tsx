import { useEffect, useState } from "react";
import { Formik } from "formik";
import "./App.css";
import { GetProfile } from "../wailsjs/go/profile/Profile";
import { profile } from "../wailsjs/go/models";
// import { ProfileInput } from "./ProfileInput";
import { ProfileRender } from "./ProfileRender";
import { Navbar } from "./Navbar";

function App() {
  const [userProfile, setUserProfile] = useState<profile.Profile | undefined>();

  useEffect(() => {
    updateProfile();
  }, []);

  async function updateProfile() {
    GetProfile()
      .then((profile) => {
        setUserProfile(profile);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div id="App">
      <Navbar updateProfile={updateProfile} />
      {userProfile && (
        <Formik initialValues={{ ...userProfile }} onSubmit={() => {}}>
          <>
            {/* <ProfileInput /> */}
            <ProfileRender />
          </>
        </Formik>
      )}
    </div>
  );
}

export default App;
