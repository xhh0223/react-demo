import { Dispatch, SetStateAction, useRef } from "react";

export abstract class Instance<State, ExtraContext = unknown> {
    private __setState!: Dispatch<SetStateAction<State>>;

    private __state!: State;

    /**
     * 用于存储与状态无关的对象
     * 保证后代实例的this方法能够访问这个对象
     */
    private __extraContext?: ExtraContext;

    init(
        [state, setState]: [State, Dispatch<SetStateAction<State>>],
        extraContext?: ExtraContext
    ) {
        this.__state = state;
        this.__setState = setState;
        if (extraContext) {
            this.__extraContext = extraContext;
        }
    }

    get context() {
        return this.__extraContext;
    }

    get state() {
        return this.__state;
    }

    get setState() {
        return this.__setState;
    }
}

/**
 * 这个hooks的目的是为了把一个组件内部的状态管理实例传到外部
 * 优点：
 * 1、减少useImperativeHandle、forwardRef的编写量、减少使用ref同时使用current
 * 2、通过这个实例去更新子组件状态，不会引起父组件状态的刷新
 * 3、不用担心同一个组件在一个大组件内使用多次产生的数据竞争问题
 * 使用方式：
 * *和const [formInstance] = form.useForm(),<Form form={formInstance}/>差不多
 */
const useInstance = <State, Ins extends Instance<State>>(ins: Ins) => {
    const instance = useRef<Ins>();
    if (!instance.current) {
        instance.current = ins;
        return instance.current;
    }
    return instance.current;
};
export default useInstance;
