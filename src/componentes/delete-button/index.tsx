import { useStock } from "@/contexts/use-stock";
import { ListButton } from "..";

type Props = {
  productId: string;
};
export default function DeleteButton({ productId }: Props) {
  const { deleteItem } = useStock();
  return (
    <ListButton
      text="Deletar"
      bgColor="bg-red-500"
      onClick={() => deleteItem(productId)}
    />
  );
}
