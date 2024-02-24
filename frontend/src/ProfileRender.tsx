import { profile } from "../wailsjs/go/models";
import { useFormikContext } from "formik";

type Section =
  | profile.HeaderSection
  | profile.WorkExperience
  | profile.ProjectExperience
  | profile.EducationSection;

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
    if (!section || (!section.mandatory && !section.active)) return;
    switch (key) {
      case "header": {
        return (
          <RenderHeader profile={section as profile.HeaderSection} key={key} />
        );
      }
      case "workExperience": {
        return (
          <RenderExperience exp={section as profile.WorkExperience} key={key} />
        );
      }
      case "projectExperience": {
        return (
          <RenderProjects
            projects={section as profile.ProjectExperience}
            key={key}
          />
        );
      }
      case "education": {
        return (
          <RenderEducationSection
            education={section as profile.EducationSection}
            key={key}
          />
        );
      }
    }
  }

  return (
    <div
      style={{
        padding: "1rem",
        // maxHeight: "100dvh",
        // overflowY: "scroll",
      }}
      className="render-container"
    >
      <div id="resume">{renderSections}</div>
    </div>
  );
}

// function show(profile: Section, field: ProfileFieldKeys<typeof profile>) {
//   return profile[field]?.active ? profile[field]?.data : null;
// }
//
// type ProfileFieldKeys<T> = {
//   [K in keyof T]-?: T[K] extends profile.ProfileField | undefined ? K : never;
// }[keyof T];

function RenderEducationSection({
  education,
}: {
  education: profile.EducationSection;
}) {
  return (
    <section>
      <h2 id="projects">Education</h2>
      {education.educations.flatMap((section) => {
        return section.active ? (
          <RenderEducation key={section.title} section={section} />
        ) : (
          []
        );
      })}
    </section>
  );
}

function RenderEducation({ section }: { section: profile.Education }) {
  return (
    <>
      <h3>
        <span>{section.title}</span>
        <span>
          {section.startDate?.data} -{" "}
          {section.endDate?.active ? section.endDate.data : "present"}
        </span>
      </h3>
      {section.certificate?.active && <p>{section.certificate.data}</p>}
    </>
  );
}
function RenderProjects({ projects }: { projects: profile.ProjectExperience }) {
  return (
    <section>
      <h2 id="projects">Projects</h2>
      {projects.projects.flatMap((section) => {
        return section.active ? (
          <RenderProject key={section.title} section={section} />
        ) : (
          []
        );
      })}
    </section>
  );
}

function RenderProject({ section }: { section: profile.ProjectSection }) {
  return (
    <>
      <h3>
        <span>{section.title}</span>
        <span>
          {section.startDate?.data} -{" "}
          {section.endDate ? section.endDate.data : "present"}
        </span>
      </h3>
      {section.description?.active && <p>{section.description.data}</p>}
      {section.projectDuties.length > 0 && (
        <ul>
          {section.projectDuties.map((duty, index) => {
            return duty.active && <li key={index}>{duty.data}</li>;
          })}
        </ul>
      )}
    </>
  );
}
function RenderExperience({ exp }: { exp: profile.WorkExperience }) {
  return (
    <section>
      <h2 id="experience">Experience</h2>
      {exp.jobs.flatMap((section) => {
        return section.active ? (
          <RenderWorkSection key={section.title} section={section} />
        ) : (
          []
        );
      })}
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
