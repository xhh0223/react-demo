import { Form } from "antd";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";
interface ComponentState {
    visible: boolean;
}

class Store {
    private dispatch!: Dispatch<SetStateAction<ComponentState>>;
    private state!: ComponentState;
    constructor([state, setState]: [
        ComponentState,
        Dispatch<SetStateAction<ComponentState>>
    ]) {
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
    instance: Store;
}
abstract class Component {
    static useInstance() {
        const ins = useRef<Store>();
        const [state, setState] = useState<ComponentState>({
            visible: false,
        });
        const value = useMemo(() => {
            if (!ins.current) {
                ins.current = new Store([state, setState]);
            }
            return ins.current;
        }, [ins.current]);
        return value;
    }
    static render: React.FC<ComponentProps> = ({ instance }) => {
        const state = instance.getState();
        return <div>{state.visible && "展示"} </div>;
    };
}
Form;
const Demo3 = () => {
    const instance = Component.useInstance();
    return (
        <div>
            <Component.render instance={instance} />
            <div
                onClick={() => {
                    instance.show();
                }}
            >
                change
            </div>
        </div>
    );
};
export default Demo3;
