import { twMerge } from "tailwind-merge";

export default function AllListHeader() {
  return (
    <div
      className={twMerge(
        "w-full h-16 flex items-center px-4 justify-between bg-[var(--black)] rounded-md"
      )}
    >
      <p className="w-2/6">ID</p>
      <p className="w-1/6">Nome</p>
      <p className="w-1/6">Em estoque</p>
      <p className="w-1/6">categoria</p>
      <p className={twMerge("text-start w-1/6")}>ações</p>
    </div>
  );
}
