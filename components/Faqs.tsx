"use client";

import Image from "next/image";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex((prevIndex: number | null) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="px-6 py-16 md:px-12 lg:px-24 lg:py-20 flex flex-col lg:flex-row justify-between">
      <div className="lg:w-1/2 lg:mr-20 mb-16 lg:mb-0">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-b pb-4 mb-4"
              onClick={() => toggleAnswer(index)}
            >
              <div className="font-semibold">{item.question}</div>
              <div className="mt-2">
                {openIndex === index && (
                  <div className="mt-2">{item.answer}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image 
        src="/images/questions.jpg"
        alt="Questions"
        width={500}
        height={500}
      />
    </div>
  );
}
