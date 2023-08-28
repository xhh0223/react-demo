import { Path } from "@/constants/path";
import Context from "@/pages/context";
import { TestDemo } from "@/pages/testDemo";
import UseCallback from "@/pages/useCallback";
import UseMemo from "@/pages/useMemo";
import UseRef from "@/pages/useRef";

import { useRoutes } from "react-router-dom";

export const Routes = () =>
  useRoutes([
    {
      path: Path.UseMemo,
      element: <UseMemo />,
    },
    {
      path: Path.UseRef,
      element: <UseRef />,
    },
    {
      path: Path.UseCallback,
      element: <UseCallback />,
    },
    {
      path: Path.Context,
      element: <Context />,
    },
    {
      path: Path.TestDemo,
      element: <TestDemo />
    }
  ]);
