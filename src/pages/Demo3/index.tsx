import { Dispatch, SetStateAction, useRef, useState } from "react";

export interface ComponentInterface {
    state: {
        visible: boolean;
    };
    props: {};
}

const Component = () => {
    let setState: Dispatch<SetStateAction<ComponentInterface["state"]>>;
    const actions = {
        toggle() {
            setState((preState) => ({
                ...preState,
                visible: !preState.visible,
            }));
        },
    };
    return {
        render() {
            const hook = useState<ComponentInterface["state"]>({
                visible: false,
            });
            const state = hook[0];
            setState = hook[1];
            return <div>{JSON.stringify(state)}</div>;
        },
        actions,
    };
};

const Demo3 = () => {
    const componentRef = useRef(Component());
    return (
        <div>
            <div
                onClick={() => {
                    componentRef.current.actions.toggle();
                }}
            >
                刷新
            </div>
            {<componentRef.current.render />}
        </div>
    );
};
export default Demo3;
