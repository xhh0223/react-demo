import { useCallback, useMemo, useRef, useState } from "react";

const useComponent = () => {
    interface Command {
        toggle(): void;
    }
    const ComponentRef = useRef<Command>(undefined!);
    interface ComponentProps {}
    const Component = useCallback<React.FC<ComponentProps>>(() => {
        const [state, setState] = useState({ visible: false });
        if (!ComponentRef.current) {
            ComponentRef.current = {
                toggle() {
                    setState((state) => ({
                        ...state,
                        visible: !state.visible,
                    }));
                },
            };
        }
        return <div>{JSON.stringify(state.visible)}</div>;
    }, []);
    return [Component, ComponentRef] as const;
};
const Demo5 = () => {
    const [Component, ref] = useComponent();
    return (
        <div>
            <div
                onClick={() => {
                    ref.current.toggle();
                }}
            >
                toggle
            </div>
            <hr />
            <Component />
        </div>
    );
};
export default Demo5;
