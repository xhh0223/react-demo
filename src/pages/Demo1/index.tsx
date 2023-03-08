import { useMemo, useState } from "react";

const useCom = () => {
    const [state, setState] = useState({ visible: false });
    const actions = useMemo(
        () => ({
            show: () => {
                setState({ ...state, visible: true });
            },
            hide: () => {
                setState({ ...state, visible: false });
            },
        }),
        [state]
    );
    return [actions, <>{state.visible ? 1 : 0}</>] as [
        typeof actions,
        React.ReactNode
    ];
};

const Demo1 = () => {
    const [ins, com] = useCom();
    return (
        <>
            <div
                onClick={() => {
                    ins.show();
                }}
            >
                通过方法调用显示
            </div>
            {com}
        </>
    );
};
const c = () => {
    return <Demo1 />;
};

export default c;
