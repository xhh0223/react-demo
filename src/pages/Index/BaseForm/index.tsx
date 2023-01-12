import { GenForm, FormConfigs } from "@/utils/form";
import { Input } from "antd";
import React, { useMemo } from "react";

export interface FormValues {
    name: string;
    age: string;
}
export enum FormName {
    name = "name",
    age = "age",
}
export const FormId = "baseForm";

const BaseForm: React.FC<Partial<FormConfigs<FormValues>>> = (
    updateFormConfigs
) => {
    const genFormInstance = useMemo(
        () =>
            new GenForm<FormValues>({
                formProps: {
                    id: FormId,
                },
                formItemListProps: [
                    {
                        id: FormName.name,
                        name: FormName.name,
                        rules: [{ required: true }],
                        label: "姓名",
                        children: <Input />,
                    },
                    {
                        id: FormName.age,
                        name: FormName.age,
                        label: "年龄",
                        children: <Input />,
                    },
                ],
            }),
        []
    );
    const FormJsx = useMemo(
        () =>
            updateFormConfigs
                ? genFormInstance.update(updateFormConfigs).exeRender()
                : genFormInstance.exeRender(),
        [updateFormConfigs]
    );
    return FormJsx;
};

export default BaseForm;
