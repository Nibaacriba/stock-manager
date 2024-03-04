import { useStock } from "@/contexts/use-stock";
import {
  RECENT_ITENS,
  RUNNING_OUT_ITENS,
  TOTAL_CATEGORY,
  TOTAL_INVENTORY,
} from "./types/dashboard-card-enum";
import { DashboardResumeCard, List } from "@/componentes";

export default function Dashboard() {
  const {
    allStock,
    verifyTotalStock,
    verifyCreatedAtProduct,
    verifyRunningOutProduct,
  } = useStock();
  return (
    <div className="flex flex-col h-fit py-4">
      <p className="text-[1.8rem]">Dashboard</p>
      <div className="w-full h-fit pt-4 flex items-center justify-between">
        <DashboardResumeCard
          title={TOTAL_CATEGORY}
          quantity={allStock.length}
        />
        <DashboardResumeCard
          title={TOTAL_INVENTORY}
          quantity={verifyTotalStock()}
        />
        <DashboardResumeCard
          title={RECENT_ITENS}
          quantity={verifyCreatedAtProduct().length}
        />
        <DashboardResumeCard
          title={RUNNING_OUT_ITENS}
          quantity={verifyRunningOutProduct().length}
        />
      </div>
      <div className="flex items-start justify-between gap-6 mt-8 ">
        <List title={RECENT_ITENS} />
        <List title={RUNNING_OUT_ITENS} />
      </div>
    </div>
  );
}
