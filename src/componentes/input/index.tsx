import { ClassAttributes, InputHTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";

export default function Input(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.id}>{props.name}</label>
      <input
        className={twMerge(
          "bg-[var(--black)] w-[15rem] rounded-md h-10 font-normal text-white p-4"
        )}
        {...props}
      />
    </div>
  );
}
