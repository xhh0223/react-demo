import { Dispatch, SetStateAction, useRef, useState } from "react";

export interface ComponentInterface {
    state: {
        visible: boolean;
    };
    props: {};
    instance: {
        toggle: () => void;
    };
}

const useComponent = () => {
    const context = useRef({
        instance: undefined! as ComponentInterface["instance"],
        useInstance: () => {
            return context.current.instance;
        },
        initInstance: (instance: ComponentInterface["instance"]) => {
            context.current.instance = instance;
        },
        render: (props: ComponentInterface["props"]) => {
            const [state, setState] = useState<ComponentInterface["state"]>({
                visible: false,
            });
            context.current.initInstance({
                toggle() {
                    setState({ ...state, visible: !state.visible });
                },
            });
            return <div>{JSON.stringify(state)}</div>;
        },
    });
    return [context.current.render, context.current.useInstance] as const;
};

const Demo4 = () => {
    const [state, setState] = useState(true);
    const [Render1, useRender1] = useComponent();
    const [Render2, useRender2] = useComponent();
    return (
        <div>
            <div
                onClick={() => {
                    setState(!state);
                }}
            >
                刷新整个组建
            </div>
            <div
                onClick={() => {
                    useRender1().toggle();
                }}
            >
                刷新组件1
            </div>
            {<Render1 />}
            <hr />
            <div
                onClick={() => {
                    useRender2().toggle();
                }}
            >
                刷新组件2
            </div>
            {<Render2 />}
            <hr />
        </div>
    );
};
export default Demo4;
