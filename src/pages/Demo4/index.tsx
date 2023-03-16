import React, { useReducer, useState } from "react";

export enum ActionType {
    ChangeName,
    ChangeAge,
}
interface ChangeNameAction {
    type: ActionType.ChangeName;
    payload: {
        name: string;
    };
}
interface ChangeAgeAction {
    type: ActionType.ChangeAge;
    payload: {
        age: string;
    };
}

function reducer(
    state: { name: string; age: string },
    action: ChangeAgeAction | ChangeNameAction
) {
    switch (action.type) {
        case ActionType.ChangeName: {
            return {
                ...state,
                ...action.payload,
            };
            break;
        }
        case ActionType.ChangeAge: {
            return {
                ...state,
                ...action.payload,
            };
            break;
        }
    }
}

export const Demo4 = () => {
    const [state, dispatch] = useReducer(reducer, { name: "xhh", age: "18" });
    return (
        <>
            {state.name}-{state.age}
            <div
                onClick={() => {
                    dispatch({
                        type: ActionType.ChangeName,
                        payload: { name: "xhh0409" },
                    });
                }}
            >
                changeName
            </div>
            <div
                onClick={() => {
                    dispatch({
                        type: ActionType.ChangeAge,
                        payload: { age: "20" },
                    });
                }}
            >
                changeAge
            </div>
            <div
                onClick={() => {
                    dispatch({
                        type: ActionType.ChangeAge,
                        payload: { age: "20" },
                    });
                    dispatch({
                        type: ActionType.ChangeName,
                        payload: { name: "xhh0409" },
                    });
                }}
            >
                changeName_changeAge
            </div>
        </>
    );
};
