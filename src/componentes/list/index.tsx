import { useStock } from "@/contexts/use-stock";
import { RUNNING_OUT_ITENS } from "@/pages/dashboard/types/dashboard-card-enum";
import ListHeader from "./components/header";
import ListContent from "./components/list-content";

type Props = {
  title: string;
};

export default function List({ title }: Props) {
  const { verifyCreatedAtProduct, verifyRunningOutProduct } = useStock();

  const handleListMap = () => {
    if (title === RUNNING_OUT_ITENS) return verifyRunningOutProduct();
    return verifyCreatedAtProduct();
  };
  return (
    <div className="w-full">
      <ListHeader title={title} />
      <ListContent title={title} handleListMap={handleListMap} />
    </div>
  );
}
