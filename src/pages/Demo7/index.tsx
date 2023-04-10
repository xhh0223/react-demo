import Form, { Field } from "rc-field-form";
import React from "react";
const Input = ({ value = "", ...props }) => <input value={value} {...props} />;
const Demo6 = () => {
    return (
        <div>
            <Form
                onFinish={(values) => {
                    console.log("Finish:", values);
                }}
            >
                <Field
                    name="username"
                    rules={[{ required: true, message: "122" }]}
                >
                    <Input placeholder="Username" />
                </Field>
                <br />
                <Field name="password">
                    <Input placeholder="Password" />
                </Field>
                <button>Submit</button>
            </Form>
        </div>
    );
};

export default Demo6;
