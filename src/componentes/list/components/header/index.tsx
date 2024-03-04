import { twMerge } from "tailwind-merge";
import { RUNNING_OUT_ITENS } from "../../../../pages/dashboard/types/dashboard-card-enum";

type Props = {
  title: string;
};

export default function ListHeader({ title }: Props) {
  return (
    <div
      className={twMerge(
        "w-full h-16 flex items-center px-4 justify-between bg-[var(--black)] rounded-md"
      )}
    >
      <p className={twMerge(title === RUNNING_OUT_ITENS ? "w-1/3" : "w-auto")}>
        {title}
      </p>
      {title === RUNNING_OUT_ITENS && <p className="text-center w-1/3">Qtd.</p>}
      <p
        className={twMerge(
          "text-center",
          title === RUNNING_OUT_ITENS ? "w-1/3" : "w-auto"
        )}
      >
        ações
      </p>
    </div>
  );
}
