import { Dispatch, SetStateAction, useMemo, useRef, useState } from "react";
interface ComponentState {
    visible: boolean;
}

class Action {
    private dispatch!: Dispatch<SetStateAction<ComponentState>>;
    private state!: ComponentState;
    init(props: [ComponentState, Dispatch<SetStateAction<ComponentState>>]) {
        const [state, setState] = props;
        this.dispatch = setState;
        this.state = state;
    }
    getState() {
        return this.state;
    }
    show() {
        this.dispatch({
            visible: true,
        });
    }
    hide() {
        this.dispatch({
            visible: false,
        });
    }
}
interface ComponentProps {
    instance: Action;
}
abstract class Component {
    static useInstance() {
        const ins = useRef<Action>();
        const value = useMemo(() => {
            if (!ins.current) {
                ins.current = new Action();
            }
            return ins.current;
        }, [ins.current]);
        return value;
    }
    static render: React.FC<ComponentProps> = ({ instance }) => {
        const [state, setState] = useState<ComponentState>({ visible: false });
        instance.init([state, setState]);
        return <div>{state.visible && "展示"} </div>;
    };
}

const Demo3 = () => {
    const instance1 = Component.useInstance();
    const instance2 = Component.useInstance();

    return (
        <div>
            <Component.render instance={instance1} />
            <div
                onClick={() => {
                    instance1.show();
                }}
            >
                change1
            </div>
            <Component.render instance={instance2} />
            <div
                onClick={() => {
                    instance2.show();
                }}
            >
                change2
            </div>
        </div>
    );
};
export default Demo3;
