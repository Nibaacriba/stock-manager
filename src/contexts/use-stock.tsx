/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product, Products } from "@/types";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type StockContextData = {
  allStock: Product[];
  setAllStock: React.Dispatch<React.SetStateAction<Product[]>>;
  verifyTotalStock: () => number;
  verifyCreatedAtProduct: () => Product[];
  verifyRunningOutProduct: () => Product[];
  createItem: (product: any) => boolean;
  updateItem: (product: any) => boolean;
  deleteItem: (productId: any) => void;
  findItem: (productId: any) => Product | undefined;
};

export const StockContext = createContext({} as StockContextData);

function getData() {
  const data = localStorage.getItem("stock");
  if (data === null) {
    return [];
  }
  const stock = JSON.parse(data);

  return stock;
}

export function StockProvider({ children }: PropsWithChildren) {
  const [allStock, setAllStock] = useState<Products>([]);

  const verifyTotalStock = useCallback(() => {
    let totalStock: number = 0;
    allStock.map((product) => {
      totalStock += product.quantity;
    });
    return totalStock;
  }, [allStock]);

  const verifyCreatedAtProduct = useCallback(() => {
    return allStock.filter((product) => {
      const createdAt = new Date(product.createdAt);
      if (createdAt instanceof Date && !isNaN(createdAt.getTime())) {
        return createdAt.getDate() < Date.now();
      }
      return false;
    });
  }, [allStock]);

  const verifyRunningOutProduct = useCallback(() => {
    return allStock.filter((product) => product.quantity < 10);
  }, [allStock]);

  const createRandomId = () => {
    // Caracteres permitidos para o ID
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let randomId = "";

    // Gera um ID aleatório concatenando caracteres aleatórios
    for (let i = 0; i < 15; i++) {
      randomId += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return randomId;
  };

  const createItem = useCallback((product: any) => {
    if (
      product.name !== "" &&
      product.quantity > 0 &&
      product.price > 0 &&
      product.category !== "" &&
      product.description !== ""
    ) {
      const createdAt = new Date();
      const id = createRandomId();
      product = { ...product, createdAt, id };
      setAllStock((currentStock) => {
        const updatedStock = [product, ...currentStock];
        localStorage.setItem("stock", JSON.stringify(updatedStock));
        return updatedStock;
      });
      return true;
    } else {
      alert("não foi possível registrar o produto, tente novamente");
      return false;
    }
  }, []);

  const updateItem = useCallback(
    (product: any) => {
      const productIndex = allStock.findIndex((prod) => prod.id === product.id);

      // Se o índice for encontrado, atualize o produto e o estado allStock
      if (
        product.name !== "" &&
        product.quantity > 0 &&
        product.price > 0 &&
        product.category !== "" &&
        product.description !== "" &&
        productIndex !== -1
      ) {
        const updatedStock = [...allStock];
        const updatedAt = new Date();
        updatedStock[productIndex] = { ...product, updatedAt };
        setAllStock(updatedStock);

        localStorage.setItem("stock", JSON.stringify(updatedStock));
        return true;
      } else {
        alert("não foi possível atualizar o produto, tente novamente.");
        return false;
      }
    },
    [allStock]
  );

  const deleteItem = useCallback(
    (productId: string) => {
      const stock = allStock.filter((prod) => prod.id !== productId);

      setAllStock(stock);
      localStorage.setItem("stock", JSON.stringify(stock));
    },
    [allStock]
  );

  const findItem = useCallback(
    (productId: string) => {
      const product = allStock.find((prod) => prod.id === productId);

      return product;
    },
    [allStock]
  );

  useEffect(() => {
    setAllStock(getData());

    return () => {
      setAllStock([]);
    };
  }, []);

  const memorizeValue = useMemo<StockContextData>(
    () => ({
      allStock,
      setAllStock,
      verifyTotalStock,
      verifyCreatedAtProduct,
      verifyRunningOutProduct,
      createItem,
      updateItem,
      deleteItem,
      findItem,
    }),
    [
      allStock,
      createItem,
      deleteItem,
      findItem,
      updateItem,
      verifyCreatedAtProduct,
      verifyRunningOutProduct,
      verifyTotalStock,
    ]
  );
  return (
    <StockContext.Provider value={memorizeValue}>
      {children}
    </StockContext.Provider>
  );
}

export const useStock = () => useContext(StockContext);
