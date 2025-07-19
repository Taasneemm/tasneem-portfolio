import ncsImg from "@/../public/about/ncs.png";
import sussImg from "@/../public/about/suss.png";
import ctcglobalImg from "@/../public/about/ctcglobal.png";
import ntuImg from "@/../public/about/ntu.png";
import mindsImg from "@/../public/about/minds.png";
import placeholderImg from "@/../public/placeholder.png";
import { Experience } from "@/models/enums";

interface Props {
  experience: Experience;
}

export default function ExperienceCell({ experience }: Props) {
  let company = "";
  let position = "";
  let year = "";
  let imageSrc = placeholderImg;
  let imageAlt = "";
  let style = "";
  let href = "";

  switch (experience) {
    case Experience.NTU: {
      company = "NTU Tamil Literary Society and Tamils Representative Council";
      position = "Entrepreneuship Trainee";
      year = "2019";
      imageSrc = ntuImg;
      imageAlt = "NTU Logo";
      style =
        "md:absolute md:top-[288px] lg:top-[352px] md:left-0 md:right-[40%]";
      href = "https://www.ntu.edu.sg/";
      break;
    }

    case Experience.MINDS: {
      company = "MINDSG Ltd";
      position = "Teacher for the intellectually disabled";
      year = "2024-25";
      imageSrc = mindsImg;
      imageAlt = "MINDS Logo";
      style = "md:absolute md:top-0 md:left-[50%] md:right-[10%]";
      href = "https://www.minds.org.sg/";
      break;
    }
    case Experience.NCS: {
      company = "NCS Pte Ltd";
      position = "Software Developer Java";
      year = "2022";
      imageSrc = ncsImg;
      imageAlt = "NCS Logo";
      style =
        "md:absolute md:top-[72px] lg:top-[88px] md:left-[35%] md:right-[25%]";
      href = "https://www.ncs.co/en-sg/";
      break;
    }
    case Experience.SUSS: {
      company = "SUSS Venture Builder";
      position = "Entrepreneuship Trainee";
      year = "2021";
      imageSrc = sussImg;
      imageAlt = "SUSS Logo";
      style =
        "md:absolute md:top-[144px] lg:top-[176px] md:left-[20%] md:right-[30%]";
      href = "https://www.suss.edu.sg/life-at-suss/student-experiences/entrepreneurship/venture-builder";
      break;
    }
    case Experience.CTCGlobal: {
      company = "CTC Global Pte Ltd";
      position = "Desktop Support Engineer";
      year = "2019-20";
      imageSrc = ctcglobalImg;
      imageAlt = "CTC Logo";
      style =
        "md:absolute md:top-[216px] lg:top-[264px] md:left-[10%] md:right-[35%]";
      href = "https://ctc-g.com.sg/";
      break;
    }

  }

  return (
    <a
      href={href}
      className={`flex flex-row justify-between items-center bg-primary-200 dark:bg-primary-800 py-3 md:py-2 lg:py-3 px-6 md:px-3 lg:px-6 rounded-[48px] animate-opacity ${style}`}
    >
      <div className="flex flex-row gap-3 items-center">
        <img src={imageSrc.src} alt={imageAlt} className="rounded-[16px] w-14" />
        <div className="flex flex-col">
          <p className="b1 font-medium text-neutral-900 dark:text-neutral-100">
            {company}
          </p>
          <p className="label text-neutral-700 dark:text-neutral-300">
            {position}
          </p>
        </div>
      </div>
      <p className="b1 font-medium text-neutral-900 dark:text-neutral-100">
        {year}
      </p>
    </a>
  );
}
