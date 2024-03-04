import { ItemForm } from "@/componentes";
import { useParams } from "react-router-dom";

export default function NewIten() {
  const { productId } = useParams();

  return <ItemForm productId={productId} />;
}
