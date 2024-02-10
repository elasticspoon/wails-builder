import { useState } from "react";
import "./App.css";
import { GetProfile } from "../wailsjs/go/profile/Profile";
import { profile } from "../wailsjs/go/models";

type Section = profile.HeaderSection;

function Profile({ userProfile }: { userProfile: profile.Profile }) {
  const inputSections = Object.entries(userProfile).flatMap(([key, obj]) => {
    if (typeof obj === "object") {
      return generateInputSection(key, obj);
    } else {
      return [];
    }
  });

  const renderSections = Object.entries(userProfile).flatMap(([key, obj]) => {
    if (typeof obj === "object") {
      return generateRenderSection(key, obj);
    } else {
      return [];
    }
  });

  function generateRenderSection(key: string, section: Section) {
    switch (key) {
      case "header": {
        return <ProfileRenderSection profile={section} key={key} />;
      }
    }
  }
  function generateInputSection(key: string, section: Section) {
    switch (key) {
      case "header": {
        return <ProfileInputSection profile={section} key={key} />;
      }
    }
  }

  return (
    <div>
      <div>{inputSections}</div>
      <div>{renderSections}</div>
    </div>
  );
}

function ProfileInputSection({ profile }: { profile: profile.HeaderSection }) {
  const fields = Object.entries(profile).flatMap(([key, data]) => {
    if (data && typeof data === "object") {
      console.log(data);
      return <DataField data={data} key={key} />;
    } else {
      return [];
    }
  });
  return <section>{fields}</section>;
}

// FIXME: This is not a proper type
type SectionFields = "name" | "phone" | "email";

function ProfileRenderSection({ profile }: { profile: profile.HeaderSection }) {
  function show(field: SectionFields) {
    return profile[field]?.active ? profile[field]?.data : null;
  }

  return (
    <article>
      <h1>{show("name")}</h1>
      <br />
      <ul>
        <li></li>
      </ul>
    </article>
  );
}

function DataField({ data }: { data: profile.ProfileField | undefined }) {
  return (
    <div>
      <label htmlFor="">
        {data?.id}
        <input type="text" value={data?.data} />
      </label>
      <label htmlFor="">
        Display?
        <input type="checkbox" value={String(data?.active)} />
      </label>
    </div>
  );
}

function Navbar({ updateProfile }: { updateProfile: () => Promise<void> }) {
  return (
    <button className="btn" onClick={updateProfile}>
      Save
    </button>
  );
}

function App() {
  const [userProfile, setUserProfile] = useState<profile.Profile>();

  if (userProfile === undefined) {
    updateProfile();
  }

  async function updateProfile() {
    let profile = await GetProfile();
    console.log(profile);
    setUserProfile(profile);
  }

  return (
    <div id="App">
      <Navbar updateProfile={updateProfile} />
      {userProfile && <Profile userProfile={userProfile} />}
    </div>
  );
}

export default App;
