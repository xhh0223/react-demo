import { Dispatch, useRef, useState } from "react";

class Component {
    private setState!: Dispatch<React.SetStateAction<typeof this.state>>;
    private state: any;
    private ref?: React.MutableRefObject<any>;
    show() {
        this.setState({
            ...this.state,
            visible: true,
        });
    }
    hide() {
        this.setState({
            ...this.state,
            visible: false,
        });
    }
    loading() {
        this.setState({
            ...this.state,
            loading: true,
        });
    }
    unLoading() {
        this.setState({
            ...this.state,
            loading: false,
        });
    }
    render: React.FC<any> = (props) => {
        const [state, setState] = useState({
            visible: false,
            loading: false,
        });
        this.state = state;
        this.setState = setState;
        this.ref = useRef<any>();
        return (
            <div ref={this.ref}>
                <div>loading:{JSON.stringify(state.loading)}</div>
                <div>visible:{JSON.stringify(state.visible)}</div>
                <div>props:{JSON.stringify(props)}</div>
            </div>
        );
    };
}

// 每次new一个实例避免了闭包问题，可以直接调用实例方法改变状态，减少不必要的函数重新调用，
// 调用简单,理解起来也简单
const C1 = new Component();
const C2 = new Component();
const Demo1 = () => {
    const [count, setState] = useState(0);
    return (
        <div>
            <div
                onClick={() => {
                    setState(Math.random());
                }}
            >
                给个随机数
            </div>
            <hr/>
            <div
                onClick={() => {
                    C1.show();
                }}
            >
                showC1
            </div>
            <div
                onClick={() => {
                    C1.hide();
                }}
            >
                hideC1
            </div>
            <div
                onClick={() => {
                    C1.loading();
                }}
            >
                loadingC1
            </div>
            <div
                onClick={() => {
                    C1.unLoading();
                }}
            >
                unloadingC1
            </div>
            <hr />
            <C1.render xhh={{ number: count }} skill={["react", "ts"]} />
            <hr />
            <div
                onClick={() => {
                    C2.show();
                }}
            >
                showC2
            </div>
            <div
                onClick={() => {
                    C2.hide();
                }}
            >
                hideC2
            </div>
            <div
                onClick={() => {
                    C2.loading();
                }}
            >
                loadingC2
            </div>
            <div
                onClick={() => {
                    C2.unLoading();
                }}
            >
                unloadingC2
            </div>
            <hr />
            <C2.render xhh={{ number: count + "---" }} skill={["ax", "js"]} />
        </div>
    );
};
export default Demo1;
