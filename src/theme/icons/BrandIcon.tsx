import type { FC } from "react";

interface BrandIconProps {
  className: string;
}
export const BrandIcon: FC<BrandIconProps> = ({ className }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 52 52"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs></defs>
      <path fillRule="evenodd" clipRule="evenodd" d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z"/>
    </svg>
  );
};


