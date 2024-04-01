"use client";
import React, { useState, useEffect } from "react";
import { client } from "../../../portfolio/sanity";
import { groq } from "next-sanity";

async function getData() {
  return client.fetch(groq`*[_type == "experience"]`);
}

function Experience() {
  const cardsData = [
    {
      image:
        "https://play-lh.googleusercontent.com/mARUNHonOc6MW2rsbr7V9h1CMM0EbloWbfOw7E64K_r2QwCzTPAmaOD_VjlzgT4syA=w480-h960-rw",
      name: "Frontend Developer at Chance",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      image:
        "https://play-lh.googleusercontent.com/mARUNHonOc6MW2rsbr7V9h1CMM0EbloWbfOw7E64K_r2QwCzTPAmaOD_VjlzgT4syA=w480-h960-rw",
      name: "App Developer at Patilkaki",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      image:
        "https://play-lh.googleusercontent.com/mARUNHonOc6MW2rsbr7V9h1CMM0EbloWbfOw7E64K_r2QwCzTPAmaOD_VjlzgT4syA=w480-h960-rw",
      name: "Content Creator at Code Feast",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
  ];
  const [experienceData, setExperienceData] = useState([]);
  useEffect(() => {
    getData()
      .then((data) => {
        setExperienceData(data);
      })
      .catch((error) => {
        console.log("error fetching posts", error);
      });
  }, []);
  return (
    <div id="experience">
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Experience
      </h3>

      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
        {experienceData?.map((item, index) => (
          <div
            className="bg-slate-400 p-6 rounded-lg shadow-md mx-4"
            key={index}
          >
            <div className="flex items-center justify-center">
              <img
                className="rounded-full w-32 h-32 mx-auto md:mx-0 object-contain"
                src={item?.image}
              />
            </div>
            <h4 className="text-l text-white font-500 mb-2 mt-4">
              {item?.name}
            </h4>
            <div className="text-l font-light text-left">
              {item?.description.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
