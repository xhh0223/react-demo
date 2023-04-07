import { Button, Form } from "antd";
import React from "react";
const Demo6 = () => {
    const [form] = Form.useForm();
    return (
        <div>
            <Form
                layout="vertical"
                form={form}
                onFinish={(v) => {
                    console.log(v);
                }}
            >
                <Form.Item
                    name={"xhh"}
                    label="测试"
                    getValueProps={() => ({ style: { backGround: "red" } })}
                >
                    <div>
                        <div>1</div>
                        <div>2</div>
                    </div>
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => {
                        return JSON.stringify(form.getFieldsValue());
                    }}
                </Form.Item>
                <Button htmlType="submit">提交</Button>
            </Form>
        </div>
    );
};

export default Demo6;
