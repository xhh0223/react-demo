import { slice } from "ramda";
import { useEffect, useRef, useState } from "react";

const row = 4;
const lineHeight = 20;
const str = `${"12345".repeat(10)}222222`;
let left = 0;
let right = str.length;
let mid = Math.floor((left + right) / 2);
let baseHeight = lineHeight * row;

export const index = () => {
    const [state, setState] = useState(str.slice(0, mid));
    const ref = useRef();
    const extra = useRef();
    const extra2 = useRef();
    const count = useRef(1);
    useEffect(() => {
        let height = Number(getComputedStyle(ref.current).height.slice(0, -2));
        if (left <= right) {
            if (baseHeight > height) {
                left = mid + 1;
                mid = Math.floor((left + right) / 2);
                setState(str.slice(0, mid));
            } else if (baseHeight < height) {
                right = mid - 1;
                mid = Math.floor((left + right) / 2);
                setState(str.slice(0, mid));
            }
            if (baseHeight === height) {
                left = mid + 1;
                mid = Math.floor((left + right) / 2);
                setState(`${str.slice(0, mid)}`);
            }
        } else {
            let width = Number(
                getComputedStyle(extra2.current).width.slice(0, -2)
            );
            let width2 = Number(
                getComputedStyle(extra.current).width.slice(0, -2)
            );
            if (width2 > width) {
                setState(`${str.slice(0, mid - count.current)}...更多`);
                count.current += 1;
            }
        }
    }, [state]);
    return (
        <div style={{ wordBreak: "break-all", width: "5em" }}>
            {str}
            <hr />
            <div
                ref={ref}
                style={{ lineHeight: `${lineHeight}px`, width: "fit-content" }}
            >
                {state}
            </div>
            <hr />
            <div
                ref={extra}
                style={{ lineHeight: `${lineHeight}px`, width: "fit-content" }}
            >
                ...更多
            </div>
            <hr />

            <div
                ref={extra2}
                style={{ lineHeight: `${lineHeight}px`, width: "fit-content" }}
            >
                {state.slice(-count.current)}
            </div>
        </div>
    );
};
export default index;
