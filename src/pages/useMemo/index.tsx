import { useMemo } from "react";

const UseMemo = () => {
    /**
     * 可以把useMemo理解为一个组件的私有属性，
     * 只有组件被调用的时候（<Component></Component>）才会初始化它
     * 就像  类在实例化的时候会初始化私有属性一样
     * 
        class Person{
            filed ={
              a: 1,
              b: 2,
            } 
        }
        new Person()
     */
    const filed = useMemo(
        () => ({
            a: 1,
            b: 2,
        }),
        []
    );
    return <></>;
};
export default UseMemo;
