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
      className="w-[900px] h-[600px] backdrop-blur-sm border border-white bg-transparent rounded-3xl p-20"
    >
      <div className="flex justify-between mb-12">
        <div className="lg:w-[300px] flex flex-col relative">
          <label
            htmlFor="name"
            className="text-sm absolute -top-[9px] left-6 pointer-events-none"
          >
            First Name
          </label>
          <input
            type="text"
            className="border border-white px-6 py-2 rounded-lg"
            {...register("firstName")}
          />
        </div>

        <div className="lg:w-[300px] flex flex-col relative">
          <label
            htmlFor="name"
            className="text-sm absolute -top-[9px] left-6 pointer-events-none"
          >
            Last Name
          </label>
          <input
            type="text"
            className="border border-white px-6 py-2 rounded-lg"
            {...register("lastName")}
          />
        </div>
      </div>

      <div className="flex justify-between mb-12">
        <div className="lg:w-[300px] flex flex-col relative">
          <label
            htmlFor="name"
            className="text-sm absolute -top-[9px] left-6 pointer-events-none"
          >
            Email
          </label>
          <input
            type="text"
            className="border border-white px-6 py-2 rounded-lg"
            {...register("email")}
          />
        </div>

        <div className="lg:w-[300px] flex flex-col relative">
          <label
            htmlFor="name"
            className="text-sm absolute -top-[9px] left-6 pointer-events-none"
          >
            Phone Number
          </label>
          <input
            type="text"
            className="border border-white bg-transparent px-6 py-2 rounded-lg"
            {...register("number")}
          />
        </div>
      </div>

      <div className="relative bg-transparent">
        <label
            htmlFor="name"
            className="text-sm absolute -top-[9px] left-6 pointer-events-none"
          >
            Message
          </label>
          <textarea className="border border-white rounded-xl w-full h-[200px] bg-transparent">

          </textarea>
        </div>
    </form>
  );
}
