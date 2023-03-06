import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";

const Card = forwardRef(({ data }: { data: string[] }, ref) => {
    const dataRef = useRef(new Map());

    const [index, setIndex] = useState<string>();
    useImperativeHandle(ref, () => {
        return {
            setSelected(index: string) {
                debugger;
                dataRef.current.get(index).click();
            },
        };
    });
    return (
        <div>
            {data.map((item) => {
                return (
                    <div
                        ref={(ele) => dataRef.current.set(item, ele)}
                        style={{ color: index === item ? "red" : "blue" }}
                        key={item}
                        onClick={() => {
                            setIndex(item);
                        }}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    );
});

export const index = () => {
    const [data, setData] = useState(["1", "2", "3"]);
    const cardRef = useRef<any>();
    return (
        <div>
            <ul>
                <li
                    onClick={async () => {
                        await new Promise((r) => {
                            setData((s) => {
                                r();
                                return ["11", "22", "33"];
                            });
                        }).then(() => {
                            cardRef.current.setSelected("11");
                        });
                    }}
                >
                    获取数据
                </li>
                <li>
                    <Card ref={cardRef} data={data} />
                </li>
            </ul>
        </div>
    );
};
export default index;
