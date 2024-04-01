import { FC } from "react";

export const IconChevron: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      data-testid="IconChevron"
      aria-hidden="true"
      className={className}
    >
      <g transform="rotate(0 12 12)">
        <g
          stroke="none"
          strokeWidth="1"
          fill="currentColor"
          fillRule="evenodd"
        >
          <path
            d="M9.7496212,4.5 L9.7496212,11.999 L17.2496212,12 L17.2496212,15 L9.7496212,14.999 L9.7496212,15 L6.7496212,15 L6.7496212,4.5 L9.7496212,4.5 Z"
            transform="rotate(-45 12 9.75)"
          ></path>
        </g>
      </g>
    </svg>
  );
};
