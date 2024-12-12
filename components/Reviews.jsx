'use client'
import React from "react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const reviewData = [
  {
    avatar: "/review/avatar-1.png",
    name: "John Doe",
    job: "chef",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    avatar: "/review/avatar-2.png",
    name: "John Doe 2",
    job: "chef",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    avatar: "/review/avatar-3.png",
    name: "John Doe 3",
    job: "chef",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    avatar: "/review/avatar-4.png",
    name: "John Doe 4",
    job: "chef",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>

        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
