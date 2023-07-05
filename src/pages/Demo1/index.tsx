import React, {
    createContext,
    useContext,
    useEffect,
    useId,
    useMemo,
    useState,
} from "react";

const FormContext = createContext<any>({});

const Form = ({ children }: any) => {
    const store = useMemo(() => {
        return {
            fields: new Map(),
        };
    }, []);
    return (
        <FormContext.Provider value={store}>{children}</FormContext.Provider>
    );
};

const Filed = ({ children, setExtraProps = () => ({}) }: any) => {
    const { fields } = useContext(FormContext);
    const id = useId();
    useEffect(() => {
        fields.set(id, undefined);
        console.log(JSON.stringify([...fields.entries()]));
        return () => {
            fields.delete(id);
        };
    }, []);
    return React.isValidElement(children)
        ? React.cloneElement(children, {
              onClick(e) {
                  children.props.onClick(e);
              },
              ...setExtraProps(),
          })
        : children;
};

const Demo1 = () => {
    const [state, setState] = useState(true);

    return (
        <Form>
            {state && (
                <Filed
                    setExtraProps={() => {
                        return {
                            style: {
                                color: "red",
                            },
                        };
                    }}
                >
                    <div>22132</div>
                </Filed>
            )}
        </Form>
    );
};
export default Demo1;
