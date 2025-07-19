import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface Props {
  imageSrc: any;
  imageAlt: string;
  imageStyle?: string;
  caption?: string;
}

export default function ImageBlock({
  imageSrc,
  imageAlt,
  imageStyle,
  caption,
}: Props) {
  return (
    <div className="flex flex-col gap-3 items-center">
      <Zoom>
        <img src={imageSrc.src} alt={imageAlt} className={imageStyle} />
      </Zoom>
      {caption && (
        <p className="b2 text-neutral-600 dark:text-neutral-400 text-center">
          {caption}
        </p>
      )}
    </div>
  );
}
