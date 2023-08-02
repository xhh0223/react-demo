import { forwardRef, useImperativeHandle, useRef } from "react";

const UseRef = (props: any, ref: any) => {
    /**
     * 可以把useRef理解为一个组件的属性，既可以作为私有属性、也可以做为组件实例对外暴露内容
     * 只有组件被调用的时候（<Component></Component>）才会初始化它
     * 就像  类在实例化的时候会初始化属性一样
     * 
        class Person{
            filed ={
              current:{
                a: 1,
                b: 2,
              }
            } 
            current={
              filed:this.filed
            }
            getInstance(){
              return this.current
            }
        }
        const instance = new Person().getInstance()
        instance.current.filed
     */

    /** 作为私有属性 */
    const filed = useRef(() => ({
        a: 1,
        b: 2,
    }));

    /** 暴露组件实例 */
    useImperativeHandle(
        ref,
        () => ({
            filed,
        }),
        []
    );
    return <></>;
};
export default forwardRef(UseRef);
