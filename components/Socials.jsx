import Link from "next/link";
import React from "react";

import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";

const icons = [
  // {
  //     path : "/",
  //     name : <RiYoutubeFill/>
  // },
  {
    path: "https://www.linkedin.com/in/abdu-ak-45319b253/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Abdu-Ak",
    name: <RiGithubFill />,
  },
  // {
  //     path : "/",
  //     name : <RiFacebookFill/>
  // },
  {
    path: "https://www.instagram.com/abd._ak_/",
    name: <RiInstagramFill />,
  },
];

export const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a target="_blank" href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};
