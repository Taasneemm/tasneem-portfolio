import { IconProps } from "@/models/interfaces";

export default function ({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.6016 14.5001C18.5518 17.694 15.5452 20.0001 12 20.0001C7.58172 20.0001 4 16.4183 4 12.0001C4 8.45484 6.30607 5.44823 9.5 4.39844C9.5 4.39844 7.76509 9.76515 11 13.0001C14.2349 16.235 19.6016 14.5001 19.6016 14.5001Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
