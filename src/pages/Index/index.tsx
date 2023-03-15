import { Image, ImageProps } from "antd";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";

const test = () => {
    const [show, setShow] = useState(false);
    const actions = {
        show: () => {
            setShow(true);
        },
        hide: () => {
            setShow(false);
        },
    };
    return [
        actions,
        <Image
            width={200}
            preview={{
                visible: show,
                onVisibleChange: (v) => {
                    actions.hide();
                },
            }}
        />,
    ] as [typeof actions, ImageProps];
};
export const index = () => {
    const [i, ins] = test();
    return (
        <>
            <div
                onClick={() => {
                    i.show();
                }}
            >
                ddddd
            </div>
            {ins}
            {ins}
        </>
    );
};
export default index;
