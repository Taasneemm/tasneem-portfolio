import { Fragment } from "react";

interface Props {
  heading?: string;
  body: string[];
  selected?: string[];
  selectedStyle?: string;
}

export default function TextBlock({
  heading,
  body,
  selected,
  selectedStyle,
}: Props) {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 md:w-[600px]">
      <h3 className="text-neutral-900 dark:text-neutral-100">{heading}</h3>
      {!selected
        ? body.map((text, idx) => (
            <p key={idx} className="b1 text-neutral-600 dark:text-neutral-400">
              {text}
            </p>
          ))
        : body.map((text, idx) => {
            const words = text.split(/\s+/); // Split on whitespace
            const highlighted = words.map((word) => {
              if (!selected.includes(word)) return word;
              return (
                <span key={word} className={selectedStyle}>
                  {word}
                </span>
              );
            });

            return (
              <p
                key={idx}
                className="b1 text-neutral-600 dark:text-neutral-400"
              >
                {highlighted.map((word, idx) => (
                  <Fragment key={idx}>{word} </Fragment>
                ))}
              </p>
            );
          })}
    </div>
  );
}
