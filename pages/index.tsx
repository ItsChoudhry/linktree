import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex flex-col items-center space-y-4 px-24 pt-6">
          {linkCard(
            "https://www.twitter.com/itsChoudhry",
            "twitter-sign.png",
            "Twitter"
          )}
          {linkCard(
            "https://www.instagram.com/itsChoudhry",
            "instagram.png",
            "Instagram"
          )}
          {linkCard(
            "https://www.github.com/itsChoudhry",
            "github-sign.png",
            "Github"
          )}
          {linkCard(
            "https://www.youtube.com/@itsChoudhry1",
            "youtube.png",
            "Youtube"
          )}
        </div>
        <div className="flex flex-col items-center w-screen pb-2/3 relative">
        <Image src={"/yami2.jpg"} alt="yami" fill></Image>
        </div>
      </div>
    </main>
  );

  function linkCard(link: string, ico: string, text: string) {
    return (
      <Link
        href={link}
        className="flex items-center rounded-md space-x-5 px-5 w-full max-w-4xl h-20 p-1 border-2 border-black hover:scale-105 transition-all"
      >
        <Image src={`/${ico}`} alt={""} width={50} height={50}></Image>
        <text className="font-bold w-full text-center text-black text-xl">{text}</text>
      </Link>
    );
  }
}
