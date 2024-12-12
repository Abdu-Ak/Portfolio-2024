"use client";

import "swiper/css";
import "swiper/css/pagination";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide, } from "swiper/react";
import { ProjectCard } from "./ProjectCard";
import { Pagination } from "swiper/modules";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Nexa Website",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Nexa Website",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    link: "/",
    github: "/",
  },
];

const Works = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest projects</h2>
          <p className="subtitle mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link href={"/projects"}>
            <Button>All projects</Button>
          </Link>
        </div>

        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
