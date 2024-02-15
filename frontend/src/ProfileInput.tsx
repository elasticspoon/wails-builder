import { profile } from "../wailsjs/go/models";
import { Form, useField, useFormikContext, FieldHookConfig } from "formik";

function TextInput({
  label,
  ...props
}: {
  label: string;
  props: string | FieldHookConfig<any>;
}) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
    </>
  );
}

function Checkbox({ ...props }) {
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
        name={buildName() + "value"}
        type="text"
        placeholder={`Enter a ${name}`}
      />
      <Checkbox name={buildName() + "active"} />
    </>
  );
}

type Section = profile.HeaderSection;

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
          <ProfileInputSection sectionName={key} profile={section} key={key} />
        );
      }
    }
  }

  return <Form>{inputSections}</Form>;
}

function ProfileInputSection({
  profile,
  sectionName,
}: {
  profile: profile.HeaderSection;
  sectionName: string;
}) {
  const fields = Object.entries(profile).flatMap(([key, data]) => {
    if (data && typeof data === "object") {
      return <DataField data={data} key={key} />;
    } else {
      return [];
    }
  });
  return <section>{fields}</section>;
}

type ProfileFieldKeys<T> = {
  [K in keyof T]-?: T[K] extends profile.ProfileField | undefined ? K : never;
}[keyof T];

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
