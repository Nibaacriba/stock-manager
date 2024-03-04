/* eslint-disable @typescript-eslint/no-explicit-any */
import { twMerge } from "tailwind-merge";

type Props = {
  text?: string;
  bgColor?: string;
  onClick?: (product: any) => void;
};

export default function ListButton({
  text = "Ver",
  bgColor = "bg-white",
  onClick,
}: Props) {
  return (
    <button
      className={twMerge(
        bgColor,
        "w-fit px-2 h-[1.8rem] rounded-sm",
        "text-[var(--black)]",
        "hover:bg-[#c9c6c5] hover:bg-opacity-20"
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
