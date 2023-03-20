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
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState<any>("0");

    return (
        <>
            <div
                style={{ fontSize: 100, textAlign: "center", zIndex: 2 }}
                onClick={() => {
                    setVisible(true);
                }}
            >
                {"请选择"}
            </div>
            <Picker
                columns={[["1", "2", "3"]]}
                value={[value]}
                visible={visible}
                onConfirm={(v) => {
                    setValue(v[0]);
                    setVisible(false);
                }}
            />
            <div
                onClick={() => {
                    setValue(undefined);
                }}
            >
                reset
            </div>
        </>
    );
};
