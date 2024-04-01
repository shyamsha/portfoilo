"use client";
import React, { useEffect, useRef, useState } from "react";
import Skill from "./Skill";
import lottie from "lottie-web";
import { client } from "../../../portfolio/sanity";
import { groq } from "next-sanity";

async function getData() {
  return client.fetch(groq`*[_type == "skill"]`);
}

function Skills() {
  const skills = [
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 190,
      type: "React",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 140,
      type: "Next Js",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 180,
      type: "Javascript",
    },

    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 140,
      type: "Tailwind",
    },

    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 170,
      type: "HTML",
    },
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 170,
      type: "CSS & Frameworks",
    },
  ];
  const container = useRef(null);
  const animationData = require("../../../public/assets/skills.json");
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => instance.destroy();
  }, [animationData]);
  const [skillsData, setSkillsData] = useState([]);
  useEffect(() => {
    getData()
      .then((data) => {
        setSkillsData(data);
      })
      .catch((error) => {
        console.log("error fetching posts", error);
      });
  }, []);
  return (
    <div id="skills">
      <h3 className="tracking-[20px] text-center uppercase text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 grid grid-cols-3 gap-5">
          {skillsData?.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </div>

        <div className="md:w-1/2 z-auto pt-2 md:mt-0">
          <div className="container" ref={container}></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
