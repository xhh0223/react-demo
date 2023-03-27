import { Path } from "@/constants/path";
import Demo1 from "@/pages/Demo1";
import Demo2 from "@/pages/Demo2";
import Demo3 from "@/pages/Demo3";
import Demo4 from "@/pages/Demo4";
import Index from "@/pages/Index";
import { useRoutes } from "react-router-dom";

export const Routes = () =>
    useRoutes([
        {
            path: Path.Root,
            element: <Index />,
        },
        {
            path: Path.Index,
            element: <Index />,
        },
        {
            path: Path.Demo1,
            element: <Demo1 />,
        },
        {
            path: Path.Demo2,
            element: <Demo2 />,
        },
        {
            path: Path.Demo3,
            element: <Demo3 />,
        },
        {
            path: Path.Demo4,
            element: <Demo4 />,
        },
    ]);
