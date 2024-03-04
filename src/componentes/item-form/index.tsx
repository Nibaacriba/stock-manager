import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Input } from "..";
import { useNavigate } from "react-router-dom";
import { useStock } from "@/contexts/use-stock";

type Props = {
  productId: string | undefined;
};

export default function ItemForm({ productId }: Props) {
  const [product, setProduct] = useState({
    name: "",
    quantity: 0,
    price: 0,
    category: "",
    description: "",
    id: "",
  });
  const navigate = useNavigate();
  const { createItem, updateItem } = useStock();

  const handleSubmit = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    let canUpdate;
    let canCreate;

    if (productId) canUpdate = updateItem(product);
    else canCreate = createItem(product);
    if (canUpdate || canCreate) navigate("/itens");
  };

  const { allStock } = useStock();

  useEffect(() => {
    if (productId && allStock.length > 0) {
      const foundProduct = allStock.find((prod) => prod.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }

    return () => {
      setProduct({
        name: "",
        quantity: 0,
        price: 0,
        category: "",
        description: "",
        id: "",
      });
    };
  }, [productId, allStock]);
  return (
    <form onSubmit={handleSubmit} className="w-full px-44">
      <div className="flex items-center justify-between">
        <Input
          type="text"
          id="name"
          name="name"
          value={product?.name}
          onChange={(ev) =>
            setProduct((currentProduct) => {
              const name = ev.target.value;
              return { ...currentProduct, name };
            })
          }
        />
        <Input
          type="number"
          id="quantidade"
          name="quantidade"
          min={0}
          value={`${product?.quantity}`}
          onChange={(ev) =>
            setProduct((currentProduct) => {
              const quantity = +ev.target.value;
              return { ...currentProduct, quantity };
            })
          }
        />
        <Input
          type="number"
          id="preço"
          name="preço"
          min={0}
          value={`${product.price}`}
          onChange={(ev) =>
            setProduct((currentProduct) => {
              const price = +ev.target.value;
              return { ...currentProduct, price };
            })
          }
        />
        <Input
          type="text"
          id="Categoria"
          name="Categoria"
          value={product.category}
          onChange={(ev) =>
            setProduct((currentProduct) => {
              const category = ev.target.value;
              return { ...currentProduct, category };
            })
          }
        />
      </div>
      <div className="flex flex-col items-start justify-between mt-4 gap-1">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          className="w-full h-[20rem] bg-[var(--black)] rounded-md p-3"
          name="descricao"
          id="descricao"
          value={product.description}
          onChange={(ev) =>
            setProduct((currentProduct) => {
              const description = ev.target.value;
              return { ...currentProduct, description };
            })
          }
        ></textarea>
      </div>
      <button
        type="submit"
        className={twMerge(
          "w-fit h-fit p-1 bg-blue-400 text-[var(--black)] rounded-sm mt-4",
          "hover:bg-[#c9c6c5] hover:bg-opacity-20"
        )}
      >
        {productId ? "Atualizar" : "Salvar"}
      </button>
    </form>
  );
}
