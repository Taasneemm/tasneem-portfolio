import { IconProps } from "@/models/interfaces";

export default function ({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 1.26562V2.93229M13.3333 8.26563H15M2.66667 8.26563H1M8 13.599V15.2656M4 4.26563L3 3.26563M12 12.2656L13 13.2656M4 12.2656L3 13.2656M12 4.26563L13 3.26563M11.3333 8.26563C11.3333 10.1066 9.84095 11.599 8 11.599C6.15905 11.599 4.66667 10.1066 4.66667 8.26563C4.66667 6.42468 6.15905 4.93229 8 4.93229C9.84095 4.93229 11.3333 6.42468 11.3333 8.26563Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
