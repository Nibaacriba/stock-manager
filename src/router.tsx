import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RootLayout from "./root-layout";
import Itens from "./pages/itens";
import ItensLayout from "./layouts/itens-layout";
import NewIten from "./pages/new-iten";
import Item from "./pages/item";
import ItemsBoundary from "./error-boundaries/items-boundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/itens",
        element: <ItensLayout />,
        children: [
          {
            index: true,
            element: <Itens />,
          },
          {
            path: "/itens/new_iten",
            element: <NewIten />,
          },
          {
            path: "/itens/update/:productId",
            element: <NewIten />,
            errorElement: <ItemsBoundary />,
          },
          {
            path: "/itens/:productId",
            element: <Item />,
            errorElement: <ItemsBoundary />,
          },
        ],
      },
    ],
  },
]);

export default router;
