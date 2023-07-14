import { Button, Form, Input } from "antd-mobile";
import React from "react";
const Demo6 = () => {
    const [form] = Form.useForm();
    return (
        <div>
            <Form
                layout="vertical"
                form={form}
                onFinish={(v) => {}}
                footer={<Button type="submit">提交</Button>}
            >
                <Form.Item
                    initialValue={""}
                    name={"xhh"}
                    label="测试"
                    getValueProps={(v) => {
                        return {};
                    }}
                    normalize={(v) => {
                        return v.repeat(2);
                    }}
                >
                    <input />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => {
                        return JSON.stringify(form.getFieldsValue());
                    }}
                </Form.Item>
            </Form>
        </div>
    );
};

export default Demo6;
