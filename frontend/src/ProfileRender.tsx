import { profile } from "../wailsjs/go/models";
import { useFormikContext } from "formik";

type Section = profile.HeaderSection;

export function ProfileRender({ profile }: { profile?: profile.Profile }) {
  let userProfile;
  if (profile === undefined) {
    let { values: up } = useFormikContext<profile.Profile>();
    userProfile = up;
  } else {
    userProfile = profile;
  }

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

  return <div>{renderSections}</div>;
}

function show(profile: Section, field: ProfileFieldKeys<typeof profile>) {
  return profile[field]?.active ? profile[field]?.data : null;
}

type ProfileFieldKeys<T> = {
  [K in keyof T]-?: T[K] extends profile.ProfileField | undefined ? K : never;
}[keyof T];

function ProfileRenderSection({ profile }: { profile: profile.HeaderSection }) {
  return (
    <article>
      <h1>{show(profile, "name")}</h1>
      <br />
      <ul>
        <li>{show(profile, "phone")}</li>
        <li>{show(profile, "email")}</li>
        <li>{show(profile, "location")}</li>
        <li>{show(profile, "github")}</li>
        <li>{show(profile, "linkedin")}</li>
        <li>{show(profile, "portfolio")}</li>
      </ul>
    </article>
  );
}
