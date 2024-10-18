import React, { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "Will I receive a certificate upon completion of the workshop?",
      answer: "Yes, a certificate will be provided upon completion.",
    },
    {
      question:
        "What level of experience is required to attend the UX Design workshop?",
      answer: "No prior experience is necessary; all levels are welcome.",
    },
    {
      question: "What topics will be covered during the workshop?",
      answer:
        "Topics include user research, prototyping, and usability testing.",
    },
    {
      question: "What is the format of the UX Workshop?",
      answer:
        "The workshop will include lectures, hands-on activities, and group discussions.",
    },
    {
      question: "What resources will be provided?",
      answer:
        "Participants will receive handouts, access to software, and further reading materials.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-start items-center gap-20 mb-36 px-4 md:px-8 lg:px-16">
      <div className="text-center text-3xl md:text-4xl lg:text-5xl font-bold font-inter">
        <span className="text-white">Frequently </span>
        <span className="text-[#8a37f1]">Asked</span>
        <span className="text-white"> Questions</span>
      </div>
      <div className="flex flex-col justify-start items-start gap-4 w-full max-w-4xl">
        {questions.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-lg shadow-lg border border-[#8a1ef0] flex flex-col overflow-hidden" // Added overflow-hidden for rounded corners
          >
            <div
              className="h-16 px-4 py-4 md:px-8 bg-gradient-to-r from-[#7d33d6] via-[#9740ed] to-[#51c0ff] flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="text-white text-lg md:text-xl font-medium font-inter tracking-wide">
                {item.question}
              </div>
              <div className="w-6 h-6 justify-center items-center flex">
                {openIndex === index ? (
                  <span className="text-white">−</span> // Collapse icon
                ) : (
                  <span className="text-white">+</span> // Expand icon
                )}
              </div>
            </div>
            {openIndex === index && (
              <div className="bg-gray-800 p-4 text-white text-sm md:text-base rounded-b-lg">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
