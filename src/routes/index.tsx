import Index from "@/pages/Index";
import { useRoutes } from "react-router-dom";

export const layout = () => {
    return useRoutes([
        {
            path: "/",
            element: <Index />,
        },
    ]);
};
