import { profile } from "../wailsjs/go/models";
import { Form, useField, useFormikContext, FieldAttributes } from "formik";

interface TextInputProps extends FieldAttributes<any> {
  label: string;
}

function TextInput({ label, ...props }: TextInputProps) {
  // FIXME:
  // @ts-ignore
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
    </>
  );
}

function Checkbox({ ...props }) {
  // FIXME:
  // @ts-ignore
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        Show?
      </label>
    </>
  );
}

function FieldInput({ name, parent }: { name: string; parent?: string }) {
  function buildName() {
    if (parent) {
      return `${parent}.${name}.`;
    }
    return `${name}.`;
  }
  return (
    <>
      <TextInput
        label={name}
        name={buildName() + "data"}
        type="text"
        placeholder={`Enter a ${name}`}
      />
      <Checkbox name={buildName() + "active"} />
    </>
  );
}

type Section = profile.HeaderSection | profile.WorkExperience;

export function ProfileInput() {
  const { values: userProfile } = useFormikContext<profile.Profile>();

  const inputSections = Object.entries(userProfile).flatMap(([key, obj]) => {
    if (typeof obj === "object") {
      return generateInputSection(key, obj);
    } else {
      return [];
    }
  });

  function generateInputSection(key: string, section: Section) {
    switch (key) {
      case "header": {
        return (
          <ProfileInputSection
            parent={key}
            profile={section as profile.HeaderSection}
            key={key}
          />
        );
      }
      case "workExperience": {
        return (
          <ProfileInputSection
            parent={key}
            profile={section as profile.WorkExperience}
            key={key}
          />
        );
      }
    }
  }

  return (
    <Form>
      {inputSections}
      <button type="submit">Save</button>
    </Form>
  );
}

function ProfileInputSection({
  profile,
  parent,
}: {
  profile: Section;
  parent: string;
}) {
  const fields = Object.entries(profile).flatMap(([key, data]) => {
    if (data && typeof data === "object") {
      return <FieldInput parent={parent} name={key} key={key} />;
    } else {
      return [];
    }
  });
  return <section>{fields}</section>;
}
