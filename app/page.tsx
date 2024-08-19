"use client";

import { cn } from "@/lib/utils";
import { ArrowDownRight } from "lucide-react";
import { Asap, Comfortaa } from "next/font/google";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import banner from "../public/img1.webp";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { Highlight } from "@/components/Highlight";
import { CardStack } from "@/components/ui/card-stack";

const inter = Asap({ subsets: ["latin"], weight: "600" });
const para = Comfortaa({ subsets: ["latin"], weight: "400" });

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        This project offers seamless Stripe integration, allowing you to
        <Highlight>securely process payments </Highlight> with ease. It ensures
        a smooth transaction experience, making payment handling effortless and
        reliable. 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        You can instantly check and manage form{" "}
        <Highlight>responses in real-time</Highlight>, thanks to the intuitive
        tracking system. This feature keeps all submissions organized and{" "}
        <Highlight>easily accessible </Highlight>whenever you need them.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The project also boasts a beautifully designed,{" "}
        <Highlight>responsive user interface</Highlight>. It provides an
        engaging and consistent experience across all devices, making it{" "}
        <Highlight>both visually appealing and user-friendly</Highlight>.
      </p>
    ),
  },
];

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <main
      ref={ref}
      className="flex min-h-screen mx-12 relative flex-col items-center justify-between"
    >
      <div className="w-full h-[85vh]">
        <div className="flex flex-col md:flex-row h-full gap-3">
          <div className="flex w-full md:w-1/2 h-auto">
            {/* Left side */}
            <div className="flex flex-col w-full gap-3">
              {/* Upper part */}
              <div className="h-[70vh]">
                <div className="h-full relative flex flex-col py-10 sm:py-4 md:py-3 sm:px-2 md:px-2 items-center justify-between rounded-[28px] bg-[#e1e2f3]">
                  <h1
                    className={cn(
                      "font-bold text-4xl mt-4 sm:text-5xl md:text-4xl lg:text-6xl px-4 sm:mt-2 md:mt-5 py-4 sm:py-6 leading-tight",
                      inter.className
                    )}
                  >
                    Create Smart, Dynamic Forms Effortlessly with{" "}
                    <p className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500 underline underline-offset-2">
                      FORMULATEAI
                    </p>
                  </h1>
                  <p
                    className={cn(
                      "mr-4 text-[15px] mb-4 lg:mr-2 flex items-start justify-start px-4 my-10",
                      para.className
                    )}
                  >
                    FormulateAI leverages advanced AI to automatically generate
                    customized forms with ease. Designed by Nikhil, it
                    simplifies form creation, making it intuitive and efficient
                    for any project.
                  </p>
                </div>
              </div>
              <div className="flex w-full h-[30vh]">
                <div className="flex flex-row md:flex-row w-full justify-between gap-x-2">
                  <div className="relative w-full sm:w-[40vw] md:w-[23rem] md:h-full sm:h-1/3">
                    <video
                      autoPlay
                      muted
                      loop
                      className="rounded-[35px] aspect-auto"
                    >
                      <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dash/dbx-header-blur-1920x1080.mp4" />
                    </video>
                  </div>
                  <div className="bg-[#f97d36] hidden sm:flex relative rounded-[35px] w-[19rem] h-40 md:w-[23vw] md:h-[96%] items-center justify-center">
                    <ArrowDownRight
                      size={180}
                      strokeWidth={1}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 w-full  relative sm:w-1/2 bg-gray-900 h-full rounded-[35px]">
            <div className="h-full flex sm:flex-col md:flex-row gap-4">
            <div>
              <DirectionAwareHover imageUrl={banner}>
                <p className="hidden md:block">
                  Innovative, user-friendly form builder.
                </p>
              </DirectionAwareHover>
            </div>
            <div className="text-white w-1/3">
              <div className="h-full w-full p-2">
                <p className="mb-2 bg-[#e1e2f3] text-gray-900 relative rounded-[28px] h-1/3 px-4 text-lg font-bold py-4 w-60">
                  Welcome to our new innovative <Highlight>AI-driven form</Highlight>
                  creation project, expertly crafted by Nikhil Mishra
                </p>
                <div className="mt-2 hidden md:block rounded-[32px] h-2/3">
                  <CardStack items={CARDS} />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
