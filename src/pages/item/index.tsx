import { UpdateButton, DeleteButton, InfoCard } from "@/componentes";
import { useStock } from "@/contexts/use-stock";
import { Link, useParams } from "react-router-dom";

export default function Item() {
  const { productId } = useParams();
  const { findItem } = useStock();
  const item = findItem(productId);

  const handleDate = (isUpdate?: boolean) => {
    if (item) {
      if (!isUpdate) return new Date(item?.createdAt).toDateString();
      if (item?.updatedAt) return new Date(item?.updatedAt).toDateString();
    }
  };

  return (
    <div className="flex flex-col items-start justify-between gap-4">
      <div className="flex items-center justify-between gap-4 ">
        <p className="text-[1.5rem] font-normal">{item?.name}</p>
        <div className=" flex gap-3">
          {productId && (
            <>
              <UpdateButton productId={productId} />
              <Link to={"/"}>
                <DeleteButton productId={productId} />
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between w-1/2">
        <InfoCard text={`Categoria: ${item?.category}`} />
        <InfoCard text={`Quantidade em estoque: ${item?.quantity}`} />
        <InfoCard text={`Preço: R$${item?.price}`} />
      </div>
      <label htmlFor="descricao">Descrição:</label>
      <p
        className="whitespace-pre-wrap w-1/2 border rounded-md p-4"
        id="descricao"
      >
        {item?.description}
      </p>

      <p className="font-normal">{`Cadastrado em: ${handleDate()}`}</p>
      {item?.updatedAt && (
        <p className="font-normal">{`Atualizado em:  ${handleDate(true)}`}</p>
      )}
    </div>
  );
}
