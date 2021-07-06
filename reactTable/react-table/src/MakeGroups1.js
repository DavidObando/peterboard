import React from "react";
import { Formik, Form, Field } from "formik";
import { studentList } from "./list";

export const MakeGroups1 = () => (
  <div>
    <h1>Make Groups V1!</h1>
    <Formik
      initialValues={{
        group: [{ students: [] }],
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Field as="select" multiple="6" name="students">
          {studentList.map((s) => (
            <option value={s.name}>{s.name}</option>
          ))}
        </Field>

        <Field as="select" name="group">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);
