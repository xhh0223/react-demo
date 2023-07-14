import React, { useEffect, useMemo, useState } from "react";

const UseState = () => {
    /**
     * 1、作为类的私有属性使用，和useMemo类似
     * 2、setState用于重新初始化组件属性
     */
    const [state, setState] = useState({ a: 1 });
    useEffect(() => {
        setState({
            a: state.a + 1,
        });
    }, []);

    /**
     * 推荐使用这种方式减少多次使用useState，保证重新初始组件属性只有一个setState
     * 私有属性可以用useMemo替代,
     * 改变a属性后 用refresh重新初始化组件属性
     */
    const [_, refresh] = useState({});
    const state2 = useMemo(
        () => ({
            a: 1,
        }),
        []
    );
    useEffect(() => {
        state2.a = state2.a + 1;
        refresh({});
    }, []);
    /**
     * 改进版，把属性更新和组件重新初始属性放一块
     */
    const [__, refresh3] = useState({});
    const state3 = useMemo(
        () =>
            new Proxy(
                {
                    a: 1,
                },
                {
                    // 每次给状态赋值时会重新初始化组件属性，有点像vue
                    set(target: any, key, newValue) {
                        target[key] = newValue;
                        return true;
                    },
                }
            ),
        []
    );
    useEffect(() => {
        state3.a = state3.a + 1;
    }, []);
    return <></>;
};

export default UseState;
