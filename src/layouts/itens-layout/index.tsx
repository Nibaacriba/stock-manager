import { Link, Outlet, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const buttonLayout = " h-full pb-[0.85rem]";
export default function ItensLayout() {
  const location = useLocation();
  return (
    <div className="flex flex-col h-fit py-4">
      <p className="text-[1.8rem]">Stock Itens</p>
      <div className="w-full h-10 border-b my-4 flex items-start justify-start gap-8">
        <Link to={"/itens"}>
          <button
            className={twMerge(
              buttonLayout,
              location.pathname === "/itens" ? "border-b" : "border-b-0"
            )}
          >
            Todos os itens
          </button>
        </Link>
        <Link to={"/itens/new_iten"}>
          <button
            className={twMerge(
              buttonLayout,
              location.pathname === "/itens/new_iten"
                ? "border-b"
                : "border-b-0"
            )}
          >
            Novo item
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
