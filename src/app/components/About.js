import React from "react";

function About() {
  const aboutData = `A vibrant Front End Developer boasting over 3+ years of expertise in website development, proactive feature enhancement,and meticulous debugging. 
    Possessing a robust proficiency in designing, testing, and implementing applications, I thrive on innovating solutions that elevate user experiences. My success stems from a foundation of integrity, efficiency, and ambition, coupledwitheffective communication, critical thinking, and problem-solving abilities. 
    I excel in motivating team members to maintain peak performance, ensuring the delivery of top-tier quality and service.`;
  return (
    <div className="mb-10" id="about">
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        About
      </h3>

      <div className="p-6 lg mx-64">
        <div className="text-xl text-slate-400 text-left">
          <p>{aboutData}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
