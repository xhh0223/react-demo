import { Picker } from "antd-mobile";
import React, { useEffect, useReducer, useState } from "react";

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
    const [options, setOptions] = useState<any>([]);
    const [value, setValue] = useState<any>("3");
    useEffect(() => {
        setTimeout(() => {
            setOptions(["1", "2", "3"]);
        }, 1000);
    }, []);
    debugger;
    return (
        <>
            <div
                style={{ fontSize: 100, textAlign: "center", zIndex: 2 }}
                onClick={() => {}}
            >
                {value || "请选择"}
            </div>
            {options.length > 0 && (
                <Picker
                    columns={[options]}
                    defaultValue={[value]}
                    value={value}
                    visible={true}
                    onConfirm={(v) => {
                        setValue(v[0]);
                    }}
                />
            )}
        </>
    );
};
