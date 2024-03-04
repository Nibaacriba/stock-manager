import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  quantity: number;
};

export default function DashboardResumeCard({ title, quantity }: Props) {
  return (
    <div
      className={twMerge(
        "bg-[var(--black)] w-[20rem] h-[8rem] p-4 gap-4 rounded-md ",
        "flex justify-start items-center flex-col"
      )}
    >
      <p className="w-full text-start">{title}</p>
      <h2 className="text-[2rem]">{quantity}</h2>
    </div>
  );
}
