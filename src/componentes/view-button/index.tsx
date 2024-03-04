import { Link } from "react-router-dom";
import { ListButton } from "..";

type Props = {
  productId: string;
};

export default function ViewButton({ productId }: Props) {
  return (
    <Link to={`/itens/${productId}`}>
      <ListButton />
    </Link>
  );
}
