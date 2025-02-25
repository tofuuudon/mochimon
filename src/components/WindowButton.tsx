import { Minus, X } from "@phosphor-icons/react";
import classNames from "classnames";

type WindowButtonProps = {
  type: "close" | "minimize";
};

export default function WindowButton({ type }: WindowButtonProps) {
  const icon =
    type === "close" ? (
      <X weight="bold" size={12} />
    ) : (
      <Minus weight="bold" size={12} />
    );

  return (
    <button
      className={classNames(
        "flex h-4 w-4 cursor-pointer items-center justify-center rounded-full transition-colors",
        {
          "bg-red-600 text-red-600 hover:text-red-800": type === "close",
          "bg-yellow-600 text-yellow-600 hover:text-yellow-800":
            type === "minimize",
        },
      )}
    >
      {icon}
    </button>
  );
}
