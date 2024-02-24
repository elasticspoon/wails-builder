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
      <input
        className="text-input"
        {...field}
        {...props}
        style={{
          flexGrow: "1",
        }}
      />
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

function buildName(name: string | number, parent?: string) {
  if (parent) {
    return typeof name === "number"
      ? `${parent}[${name}]`
      : `${parent}.${name}`;
  }
  return `${name}`;
}

function FieldInput({
  id,
  element,
}: {
  id: string;
  element?: profile.ProfileField;
}) {
  return (
    <div
      style={{
        display: "flex",
        columnGap: ".5rem",
        width: "100%",
      }}
    >
      <TextInput
        label={element?.id || " - "}
        name={id + ".data"}
        type="text"
        placeholder={`Enter a ${element?.id}`}
      />
      {!element?.mandatory && <Checkbox name={id + ".active"} />}
    </div>
  );
}

function renderElement(element: ProfileElement, name: string) {
  switch (element.type) {
    case "section": {
      return <ProfileInputSection parent={name} profile={element} key={name} />;
    }
    case "field": {
      return (
        <FieldInput
          element={element as unknown as profile.ProfileField}
          id={name}
          key={name}
        />
      );
    }
  }
}

export function ProfileInput() {
  const { values: userProfile } = useFormikContext<profile.Profile>();

  const inputSections = Object.entries(userProfile).flatMap(([key, obj]) => {
    if (obj instanceof Array) {
      return obj.map((item, index) => {
        return renderElement(item, buildName(index, key));
      });
    } else if (obj && typeof obj === "object") {
      return renderElement(obj, buildName(key));
    } else {
      return [];
    }
  });

  return (
    <Form
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
      }}
    >
      {inputSections}
      <button type="submit">Save</button>
    </Form>
  );
}

type ProfileElement =
  | profile.HeaderSection
  | profile.WorkExperience
  | profile.ProfileField;

function ProfileInputSection({
  profile,
  parent,
}: {
  profile: ProfileElement;
  parent: string;
}) {
  const fields = Object.entries(profile).flatMap(([key, data]) => {
    if (data instanceof Array) {
      return data.map((item, index) => {
        return renderElement(item, buildName(index, `${parent}.${key}`));
      });
    } else if (data && typeof data === "object") {
      return renderElement(data, buildName(key, parent));
    } else {
      return [];
    }
  });
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "1rem",
        flexGrow: "1",
      }}
    >
      {fields}
    </section>
  );
}
