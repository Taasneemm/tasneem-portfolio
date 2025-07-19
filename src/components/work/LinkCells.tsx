import GitHubIcon from "@/icons/GitHubIcon";
import GlobeIcon from "@/icons/GlobeIcon";
import GooglePlayIcon from "@/icons/GooglePlayIcon";
import AppStoreIcon from "@/icons/AppStoreIcon";

interface Props {
  github: string;
  website?: string;
  appstore?: string;
  playstore?: string;
}

export default function LinksCell({
  github,
  website,
  appstore,
  playstore,
}: Props) {
  return (
    <div className="flex flex-row items-center justify-around w-full bg-neutral-900 dark:bg-neutral-100 max-md:p-12 rounded-[24px] md:w-[600px] md:py-16 md:justify-center md:gap-24">
      {playstore && (
        <a
          href={playstore}
          target="_blank"
          className="animate-opacity animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
        >
          <div className="flex flex-col gap-2 items-center">
            <GooglePlayIcon className="fill-neutral-100 dark:fill-neutral-900 w-9 md:w-12 lg:w-14" />
            <p className="b1 text-neutral-100 dark:text-neutral-900">
              Play Store
            </p>
          </div>
        </a>
      )}

      <a
        href={github}
        target="_blank"
        className="animate-opacity animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
      >
        <div className="flex flex-col gap-2 items-center">
          <GitHubIcon className="fill-neutral-100 dark:fill-neutral-900 w-9 md:w-12 lg:w-14" />
          <p className="b1 text-neutral-100 dark:text-neutral-900">GitHub</p>
        </div>
      </a>

      {website && (
        <a
          href={website}
          target="_blank"
          className="animate-opacity animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
        >
          <div className="flex flex-col gap-2 items-center">
            <GlobeIcon className="fill-neutral-100 dark:fill-neutral-900 w-9 md:w-12 lg:w-14" />
            <p className="b1 text-neutral-100 dark:text-neutral-900">Website</p>
          </div>
        </a>
      )}

      {appstore && (
        <a
          href={appstore}
          target="_blank"
          className="animate-opacity animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
        >
          <div className="flex flex-col gap-2 items-center">
            <AppStoreIcon className="fill-neutral-100 dark:fill-neutral-900 w-9 md:w-12 lg:w-14" />
            <p className="b1 text-neutral-100 dark:text-neutral-900">
              App Store
            </p>
          </div>
        </a>
      )}
    </div>
  );
}
