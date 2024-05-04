"use client";

import FormValueProps from "@/types";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueProps>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      onSubmit={onSubmit}
      className="px-6 md:px-12 lg:px-16 py-12 lg:py-12 w-full lg:w-[900px] backdrop-blur-sm lg:border lg:border-white bg-transparent rounded-3xl"
    >
      <h1 className="text-3xl mb-8">Send us a message</h1>
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="md:w-[300px] flex flex-col relative mb-8 lg:mb-0">
          <label
            htmlFor="firstName"
            className="text-sm pointer-events-none"
          >
            First Name
          </label>
          <input
            type="text"
            className="bg-transparent border border-white outline-none px-6 py-3 rounded-lg focus:border-2"
            {...register("firstName")}
          />
        </div>

        <div className="md:w-[300px] flex flex-col relative">
          <label
            htmlFor="name"
            className="text-sm   left-6 pointer-events-none"
          >
            Last Name
          </label>
          <input
            type="text"
            className="bg-transparent border border-white outline-none focus:border-2 px-6 py-3 rounded-lg"
            {...register("lastName")}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="md:w-[300px] flex flex-col relative mb-8 lg:mb-0">
          <label
            htmlFor="name"
            className="text-sm   left-6 pointer-events-none"
          >
            Email
          </label>
          <input
            type="text"
            className="bg-transparent border border-white outline-none focus:border-2 px-6 py-3 rounded-lg"
            {...register("email")}
          />
        </div>

        <div className="md:w-[300px] flex flex-col relative">
          <label
            htmlFor="name"
            className="text-sm   left-6 pointer-events-none"
          >
            Phone Number
          </label>
          <input
            type="text"
            className="border border-white outline-none focus:border-2 bg-transparent px-6 py-3 rounded-lg"
            {...register("number")}
          />
        </div>
      </div>

      <div className="relative bg-transparent mb-8">
        <label
          htmlFor="name"
          className="text-sm   left-6 pointer-events-none"
        >
          Message
        </label>
        <textarea className="border border-white outline-none focus:border-2 rounded-xl w-full h-[200px] bg-transparent px-6 py-3"></textarea>
      </div>

      <div className="bg-transparent text-right">
        <button className="px-6 py-3 border-2 rounded-xl">Send Message</button>
      </div>
    </form>
  );
}
