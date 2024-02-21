import { useEffect, useRef, useState } from "react";
import { Form, Formik, useFormikContext } from "formik";
import "./App.css";
import { GetProfile } from "../wailsjs/go/profile/Profile";
import { profile } from "../wailsjs/go/models";
import { ProfileInput } from "./ProfileInput";
import { ProfileRender } from "./ProfileRender";
import { Navbar } from "./Navbar";

import { renderToString } from "react-dom/server";

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

  function getHtml() {
    return renderToString(<ProfileRender profile={userProfile} />);
  }

  return (
    <div id="App">
      <Navbar updateProfile={updateProfile} render={getHtml} />
      {userProfile && (
        <Formik
          initialValues={{ ...userProfile }}
          onSubmit={(v) => {
            let k = v as profile.Profile;
            setUserProfile(k);
          }}
        >
          <>
            <ProfileInput />
            <ProfileRender />
          </>
        </Formik>
      )}
    </div>
  );
}

export default App;
