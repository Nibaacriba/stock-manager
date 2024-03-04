import { Link } from "react-router-dom";
import { ListButton } from "..";

type Props = {
  productId: string;
};

export default function UpdateButton({ productId }: Props) {
  return (
    <Link to={`/itens/update/${productId}`}>
      <ListButton text="Atualizar" bgColor="bg-blue-400" />
    </Link>
  );
}
