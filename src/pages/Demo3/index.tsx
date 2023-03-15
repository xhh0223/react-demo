import { Form } from "antd";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

interface Instance extends React.FunctionComponent<{ instance: any }> {
    useInstance: any;
}
const Test: Instance = ({ instance }) => {
    const [state, setState] = useState("");
    if (instance) {
        instance.setState = setState;
    }
    return <div>{state}</div>;
};

Test.useInstance = () => {
    const ins = useRef<any>();
    if (!ins.current) {
        ins.current = {
            set(v: string) {
                this.setState(v);
            },
        };
    }
    return ins.current;
};
Form.useForm
const Demo3 = () => {
    const ins = Test.useInstance();
    const ins2 = Test.useInstance();

    return (
        <>
            <Test instance={ins} />
            <Test instance={ins2} />
            <div
                onClick={() => {
                    ins.set(new Date().toString());
                }}
            >
                update1
            </div>
            <div
                onClick={() => {
                    ins2.set(new Date().toString());
                }}
            >
                update2
            </div>
        </>
    );
};

export default Demo3;
