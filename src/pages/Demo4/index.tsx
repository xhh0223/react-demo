import React, { useState } from "react";

const Display = (props: any) => {
    return (
        <>
            <div>{props.children}</div>
        </>
    );
};

export const Demo4 = () => {
    const [state, setState] = useState({ text1: "0", text2: "0" });
    const text = {
        node1: {
            text: { text: state.text1 },
        },
        node2: {
            text: { text: state.text2 },
        },
    };
    return (
        <>
            <Display>{JSON.stringify(text)}</Display>
            <div
                onClick={() => {
                    setState({
                        text1: `1${Math.random()}`,
                        text2: `2${Math.random()}`,
                    });
                }}
            >
                change
            </div>
        </>
    );
};
