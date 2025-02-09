import Link from "next/link";
import React from "react";

import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { Socials } from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-10 xl:py-18 h-[84vh] xl:pt-18 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-0">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Hello, my name is Abdulla</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Self-taught web developer with a passion for building web
              applications, excelling in problem-solving and rapidly learning
              new technologies.
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a href="/Abdulla.pdf" download>
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            <Socials
              containerStyles={"flex gap-x-6 mx-auto xl:mx-0"}
              iconsStyles={
                "text-foreground text-[22px] hover:text-primary transition-all"
              }
            />
          </div>

          <div className="hidden xl:flex relative w-[40%]">
            <Badge
              containerStyles={
                "absolute top-[24%] lg:-left-[5rem] 2xl:-left-[2rem]"
              }
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText={"Year Of Experience"}
            />

            <Badge
              containerStyles={
                "absolute top-[80%] 2xl:-left-[0rem] lg:-left-[1rem]"
              }
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText={"K"}
              badgeText={"Finished Projects"}
            />

            <Badge
              containerStyles={"absolute top-[75%] -right-6"}
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText={"K"}
              badgeText={"Happy clients"}
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                containerStyles={
                  "bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                }
                imgSrc="/hero/developer.png"
              />
            </div>
          </div>
        </div>

        {/* <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
