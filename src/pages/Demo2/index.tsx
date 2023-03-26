import React, { MutableRefObject, useEffect, useRef, useState } from "react";

interface Instance {
    toggle: () => void;
}

type ComponentProps = {
    instance: MutableRefObject<Instance | undefined>;
    name: string;
    age: number;
};

const Component: React.FC<ComponentProps> = ({ instance, ...otherProps }) => {
    const [state, setState] = useState({ visible: false });
    instance.current = {
        toggle() {
            setState({ ...state, visible: !state.visible });
        },
    };
    return (
        <>
            <div>state:{JSON.stringify(state)}</div>
            <div>props:{JSON.stringify(otherProps)}</div>
        </>
    );
};

const Demo2 = () => {
    const instance = useRef<Instance>();
    const [state, setState] = useState(false);
    return (
        <div>
            <div
                onClick={() => {
                    setState(!state);
                }}
            >
                刷新子组件
            </div>
            <div
                onClick={() => {
                    instance.current?.toggle();
                }}
            >
                toggle
            </div>
            <Component instance={instance} name={"xhh"} age={18} />
        </div>
    );
};

export default Demo2;
