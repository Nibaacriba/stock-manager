import { Outlet } from "react-router-dom";
import HeaderButton from "./componentes/header-button";

export default function RootLayout() {
  return (
    <>
      <header className="flex justify-between">
        <h5 className="font-bold">REACT STOCK</h5>
        <div className="flex gap-6">
          <HeaderButton text="inicio" path="/" />
          <HeaderButton text="itens" path="/itens" />
        </div>
      </header>
      <Outlet />
    </>
  );
}
