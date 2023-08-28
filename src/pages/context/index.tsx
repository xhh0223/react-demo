import React, { createContext, useContext } from "react";

/**
 * Context在想给自己内部的任意组件传递私有属性时使用，
 * <ContextProvider></ContextProvider> 之间互相隔离
 */
const Context = createContext<any>(undefined!);

const ContextDemo = () => {
  const extraProps = {
    theme: "black",
  };
  return (
    <Context.Provider value={extraProps}>
      <Component1 />
      <Component2 />
      <Component3 />
    </Context.Provider>
  );
};

const Component1 = (props: any) => {
  const extraProps = useContext(Context);
  const myChildrenProps = {
    theme: "black",
  };
  return (
    <Context.Provider value={myChildrenProps}>
      <Component3></Component3>
    </Context.Provider>
  );
};
const Component2 = (props: any) => {
  const extraProps = useContext(Context);
  return <></>;
};
const Component3 = (props: any) => {
  const extraProps = useContext(Context);
  return <></>;
};

export default ContextDemo;
