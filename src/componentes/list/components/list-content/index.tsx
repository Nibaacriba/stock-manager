import { twMerge } from "tailwind-merge";
import { RUNNING_OUT_ITENS } from "../../../../pages/dashboard/types/dashboard-card-enum";
import ViewButton from "../../../view-button";
import { Products } from "../../../../types/Products";

type Props = {
  title: string;
  handleListMap: () => Products;
};
export default function ListContent({ title, handleListMap }: Props) {
  return (
    <ul className="w-full flex justify-center items-center flex-col px-4">
      {handleListMap().map((product) => (
        <li
          key={product.id}
          className="flex w-full items-center justify-between my-[1rem]"
        >
          <p
            className={twMerge(
              title === RUNNING_OUT_ITENS ? "w-1/3" : "w-auto"
            )}
          >
            {product.name}
          </p>
          {title === RUNNING_OUT_ITENS && (
            <p className="w-1/3 text-center">{product.quantity}</p>
          )}
          <div
            className={twMerge(
              title === RUNNING_OUT_ITENS ? "w-1/3" : "w-auto",
              " flex items-center justify-center"
            )}
          >
            <ViewButton productId={product.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}
