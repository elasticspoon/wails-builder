import { profile } from "../wailsjs/go/models";
import { useFormikContext } from "formik";

type Section = profile.HeaderSection | profile.WorkExperience;

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
        return (
          section && (
            <RenderHeader
              profile={section as profile.HeaderSection}
              key={key}
            />
          )
        );
      }
      case "workExperience": {
        return (
          section && (
            <RenderExperience
              exp={section as profile.WorkExperience}
              key={key}
            />
          )
        );
      }
    }
  }

  return <div id="resume">{renderSections}</div>;
}

// function show(profile: Section, field: ProfileFieldKeys<typeof profile>) {
//   return profile[field]?.active ? profile[field]?.data : null;
// }
//
// type ProfileFieldKeys<T> = {
//   [K in keyof T]-?: T[K] extends profile.ProfileField | undefined ? K : never;
// }[keyof T];

function RenderExperience({ exp }: { exp: profile.WorkExperience }) {
  return (
    <section>
      <h2 id="experience">Experience</h2>
      {exp.jobs.map((section) => (
        <RenderWorkSection key={section.title} section={section} />
      ))}
    </section>
  );
}

function RenderWorkSection({ section }: { section: profile.JobSection }) {
  return (
    <>
      <h3>
        <span>
          {section.jobTitle?.data}, {section.company?.data}
        </span>
        <span>
          {section.startDate?.data} -{" "}
          {section.endDate ? section.endDate.data : "present"}
        </span>
      </h3>
      {section.description?.active && <p>{section.description.data}</p>}
      {section.jobDuties.length > 0 && (
        <ul>
          {section.jobDuties.map((duty, index) => {
            return duty.active && <li key={index}>{duty.data}</li>;
          })}
        </ul>
      )}
    </>
  );
}

function RenderHeader({ profile }: { profile: profile.HeaderSection }) {
  return (
    <article>
      <h1 id={profile.name?.data}>{profile.name?.data}</h1>
      <ul>
        {profile.email?.active && (
          <li>
            <a href={`mailto:${profile.email?.data}`}>{profile.email?.data}</a>
          </li>
        )}
        {profile.portfolio?.active && (
          <li>
            <a href={profile.portfolio.data}>{profile.portfolio.data}</a>
          </li>
        )}
        {profile.linkedin?.active && (
          <li>
            <a href={profile.linkedin.data}>{profile.linkedin.data}</a>
          </li>
        )}
        {profile.phone?.active && <li>{profile.phone.data}</li>}
        {profile.github?.active && (
          <li>
            <a href={profile.github.data}>{profile.github.data}</a>
          </li>
        )}
        {profile.location?.active && <li>{profile.location.data}</li>}
      </ul>
    </article>
  );
}
