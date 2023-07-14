import { useCallback } from "react";

const UseCallback = () => {
    /**
     * 可以把useCallback理解为一个组件的私有方法，
     * 只有组件被调用的时候（<Component></Component>）才会初始化它
     * 就像  类在实例化的时候会初始化私有方法一样
     * 
        class Person{
            private fun1(){
            }
        }
        new Person()
     */
    const fun1 = useCallback(() => () => {}, []);
    return <></>;
};
export default UseCallback;
