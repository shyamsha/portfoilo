"use client";
import React from "react";
import {
  MapPinIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      window.location.href = `mailto:shyamkumar97@live.com?subject=${formData.subject}&body=${formData.message}`;
    }
  };
  return (
    <div
      id="contact"
      className="flex relative flex-col text-center md:text-left md:text-row max-w-7xl justify-evenly mx-auto items-center gap-8"
    >
      <h3 className="tracking-[20px] text-center uppercase text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 items-start justify-center">
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-8 w-8 animate-pulse" />
            <p className="text-xl text-white text-center">
              shyamkumar97@live.com
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <DevicePhoneMobileIcon className="h-8 w-8 animate-pulse" />
            <p className="text-xl text-white text-center">+919849084994</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-8 w-8 animate-pulse" />
            <p className="text-xl text-white text-center">Bangalore</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-60 sm:w-full mx-auto"
        >
          <div className="space-y-2 flex flex-col md:flex">
            <input
              {...register("name", { required: "name is required" })}
              placeholder="Name"
              type="text"
              className="outline-none bg-slate-400/10 rounded-sm w-80  px-6 py-4  text-white placeholder-gray-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <input
              {...register("email", { required: "email is required" })}
              placeholder="Email"
              type="email"
              className="outline-none bg-slate-400/10 rounded-sm w-80   px-6 py-4  text-white placeholder-gray-500"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <input
            placeholder="Subject"
            {...register("subject", { required: "subject is required" })}
            className="outline-none bg-slate-400/10 rounded-sm w-80   px-6 py-4  text-white placeholder-gray-500"
            type="text"
          />
          {errors.subject && (
            <p className="text-red-500">{errors.subject.message}</p>
          )}
          <textarea
            {...register("message", { required: "message is required" })}
            placeholder="Message"
            className="outline-none bg-slate-400/10 rounded-sm w-80   px-6 py-4  text-white placeholder-gray-500"
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
          <input
            type="submit"
            className="bg-blue-500 px-4 py-3 rounded-sm font-bold w-80  text-white"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
