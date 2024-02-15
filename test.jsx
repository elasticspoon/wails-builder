import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import "./styles.css";

function TextInput({ label, ...props }) {
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

function FieldInput({ name, parent = null }) {
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

function AnotherThing() {
  const { values } = useFormikContext();
  return (
    <ul>
      {Object.entries(values).map(([key, val]) => {
        return val.active ? (
          <li key={key}>
            <h1>{key}</h1>
            <p>{val.value}</p>
          </li>
        ) : null;
      })}
    </ul>
  );
}

// And now we can use these
function SignupForm() {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          thing: {
            value: 1,
            active: false,
          },
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <>
          <Form>
            <FieldInput name={"thing"} />
            <button type="submit">Submit</button>
          </Form>
          <AnotherThing />
        </>
      </Formik>
    </>
  );
}

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
