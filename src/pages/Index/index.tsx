import { Button, Form } from "antd";
import BaseForm, { FormValues, FormName, FormId } from "./BaseForm";

const index = () => {
    const [baseForm] = Form.useForm<FormValues>();
    return (
        <div>
            <BaseForm
                formProps={{
                    id: FormId,
                    form: baseForm,
                    onFinish: (v) => {
                        console.log(v);
                    },
                }}
                formItemListProps={[
                    {
                        id: FormName.name,
                        label: "姓名12322",
                        rules: [],
                    },
                ]}
            />
            <Button
                onClick={() => {
                    baseForm.submit();
                }}
            >
                提交
            </Button>
        </div>
    );
};

export default index;
