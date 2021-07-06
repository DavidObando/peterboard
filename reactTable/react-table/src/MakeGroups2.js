import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

export const MakeGroups2 = () => (
  <div>
    <h1>Make Groups V2!</h1>
    <Formik
      initialValues={{
        groups: [
          {
            name: "",
            group: "",
          },
        ],
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="groups">
            {({ remove, push }) => (
              <div>
                {values.groups.length > 0 &&
                  values.groups.map((groups, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label htmlFor={`groups.${index}.name`}> Name </label>

                        <Field
                          name={`groups.${index}.name`}
                          placeholder=""
                          type="text"
                        />
                        <ErrorMessage
                          name={`groups.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <label htmlFor={`groups.${index}.group`}>
                          Group Number
                        </label>
                        <Field
                          name={`groups.${index}.group`}
                          placeholder="2"
                          type="number"
                        />
                        <ErrorMessage
                          name={`groups.${index}.group`}
                          component="div"
                          className="field-error"
                        />
                      </div>
                      <div className="col">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  type="button"
                  className="secondary"
                  onClick={() => push({ name: "", group: "" })}
                >
                  Add Student
                </button>
              </div>
            )}
          </FieldArray>
          <button type="submit">Create!</button>
        </Form>
      )}
    </Formik>
  </div>
);
