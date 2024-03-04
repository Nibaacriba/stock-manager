import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  path: string;
};
export default function HeaderButton({ text, path }: Props) {
  const location = useLocation();
  return (
    <Link to={path}>
      <button
        className={twMerge(
          location.pathname === path ? "font-bold" : "font-normal"
        )}
      >
        {text}
      </button>
    </Link>
  );
}
