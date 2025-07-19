import ArrowLeftIcon from "@/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/icons/ArrowRightIcon";

interface Props {
  prevText?: string;
  prevLink?: string;
  nextText?: string;
  nextLink?: string;
}

export default function NextCell({
  prevText,
  prevLink,
  nextText,
  nextLink,
}: Props) {
  return (
    <div className="flex flex-col justify-center gap-6 p-12 pb-16 rounded-[24px] border-2 border-primary-200 dark:border-primary-800 md:flex-row md:gap-24 md:py-[120px]">
      {prevLink && prevText && (
        <a
          href={prevLink}
          className="flex flex-col items-start md:items-end animate-underline md:decoration-4 underline-offset-[8px] hover:underline-offset-[12px]"
      >
        <ArrowLeftIcon className="stroke-neutral-800 dark:stroke-neutral-200 w-8 md:w-12" />
          <h3 className="text-neutral-800 dark:text-neutral-200">{prevText}</h3>
        </a>
      )}
      {nextLink && nextText && (
        <a
        href={nextLink}
        className="flex flex-col items-end md:items-start animate-underline md:decoration-4 underline-offset-[8px] hover:underline-offset-[12px]"
      >
          <ArrowRightIcon className="stroke-neutral-800 dark:stroke-neutral-200 w-8 md:w-12" />
          <h3 className="text-neutral-800 dark:text-neutral-200">{nextText}</h3>
        </a>
      )}
    </div>
  );
}
