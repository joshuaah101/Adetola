import TiltCard from "@/components/tilt";
import Image from "next/image";

type Props = {
  imgSrc: any;
  title: string;
  paragraph: string;
  imgAlt: string;
};

const AchievementCard = ({ imgSrc, title, paragraph, imgAlt }: Props) => {
  return (
    <TiltCard>
      <div className="flex flex-col rounded-lg shadow-xl">
        <Image src={imgSrc} alt={imgAlt} className="w-full h-52 rounded-t-lg" />
        <div className="flex flex-col p-4 space-y-3">
          <header className="text-lg font-medium">{title}</header>
          <span className="border w-[45%] border-purple-400"></span>
          <p className="font-light font text-sm">{paragraph}</p>
        </div>
      </div>
    </TiltCard>
  );
};

export default AchievementCard;
