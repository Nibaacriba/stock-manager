import { ViewButton, UpdateButton, DeleteButton } from "@/componentes";
import { useStock } from "@/contexts/use-stock";
import { twMerge } from "tailwind-merge";

export default function AllListContent() {
  const { allStock } = useStock();
  return (
    <ul className="w-full flex justify-center items-center flex-col px-4">
      {allStock.map((product) => (
        <li
          key={product.id}
          className="flex w-full items-center justify-between my-[1rem]"
        >
          <p className="w-2/6">{product.id}</p>
          <p className="w-1/6">{product.name}</p>
          <p className="w-1/6">{product.quantity} unid.</p>
          <p className="w-1/6">{product.category}</p>
          <div
            className={twMerge("flex items-center justify-center w-1/6 gap-2")}
          >
            <ViewButton productId={product.id} />
            <UpdateButton productId={product.id} />
            <DeleteButton productId={product.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}
