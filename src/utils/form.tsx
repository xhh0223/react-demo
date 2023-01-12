import { Form, FormItemProps, FormProps } from "antd";
import shortid from "shortid";

type RequireKey<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: T[P];
};

export interface FormConfigs<FormValues> {
    formProps: RequireKey<FormProps<FormValues>, "id">;
    formItemListProps: RequireKey<FormItemProps<FormValues>, "id">[];
}

export class GenForm<FormValues> {
    private formConfigs: FormConfigs<FormValues>;
    constructor(formConfigs: FormConfigs<FormValues>) {
        this.formConfigs = formConfigs;
    }
    add(addFormConfigs?: Partial<FormConfigs<FormValues>>) {
        const {
            formProps: addFormProps,
            formItemListProps: addFormItemListProps,
        } = addFormConfigs ?? {};
        if (addFormProps) {
            this.formConfigs.formProps = addFormProps;
        }
        if (
            Array.isArray(addFormItemListProps) &&
            addFormItemListProps.length > 0
        ) {
            this.formConfigs.formItemListProps = {
                ...addFormItemListProps.filter((addItem) => {
                    !this.formConfigs.formItemListProps.find(
                        (item) => addItem.id === item.id
                    );
                }),
                ...this.formConfigs.formItemListProps,
            };
        }
        return this;
    }

    del(delConfigs: { formPropsId?: string; formItemListPropsId?: string[] }) {
        const {
            formPropsId: delFormPropsId,
            formItemListPropsId: delFormItemListPropsId,
        } = delConfigs;

        if (
            delFormPropsId &&
            this.formConfigs.formProps.id === delFormPropsId
        ) {
            this.formConfigs.formProps = {} as RequireKey<
                FormProps<FormValues>,
                "id"
            >;
        }
        if (
            Array.isArray(delFormItemListPropsId) &&
            delFormItemListPropsId.length > 0
        ) {
            this.formConfigs.formItemListProps =
                this.formConfigs.formItemListProps.filter((item) => {
                    !delFormItemListPropsId.includes(item.id);
                });
        }
        return this;
    }

    update(updateFormConfigs?: Partial<FormConfigs<FormValues>>) {
        const {
            formProps: updateFormProps,
            formItemListProps: updateFormItemListProps,
        } = updateFormConfigs ?? {};
        if (
            updateFormProps &&
            updateFormProps.id === this.formConfigs.formProps.id
        ) {
            this.formConfigs.formProps = {
                ...this.formConfigs.formProps,
                ...updateFormProps,
            };
        }
        if (
            Array.isArray(updateFormItemListProps) &&
            updateFormItemListProps.length > 0
        ) {
            this.formConfigs.formItemListProps =
                this.formConfigs.formItemListProps.map((item) => {
                    const updateItem = updateFormItemListProps.find(
                        (updateItem) => item.id === updateItem.id
                    );
                    if (updateItem) {
                        return {
                            ...item,
                            ...updateItem,
                        };
                    }
                    return item;
                });
        }
        return this;
    }
    exeRender() {
        const { formProps, formItemListProps } = this.formConfigs;
        return (
            <Form {...formProps}>
                {formItemListProps.map((item) => (
                    <Form.Item key={shortid.generate()} {...item} />
                ))}
            </Form>
        );
    }
}
