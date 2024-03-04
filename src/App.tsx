import { RouterProvider } from "react-router-dom";
import router from "./router";
import { StockProvider } from "./contexts/use-stock";

export default function App() {
  return (
    <StockProvider>
      <RouterProvider router={router} />
    </StockProvider>
  );
}
