"use client"
import React, { useState } from "react";
import "@/styles/faq.css";

export default function FaqSection() {

// declearing the type for the faq array
type Faqs = {
    question: string;
    answer: string;
}

// created an array for the contents insdie the faq to reduces the code complexity
  const faqs: Faqs[] = [
    {
      question: "What is my eligibility to book a car?",
      answer:
        "You should be of 18 years old above and you must possess a valid driving license",
    },
    {
      question: "Can I book for any period of time?",
      answer: "Can I book for any period of time?",
    },
    {
      question: "Can I book one-way trip?",
      answer: "Can I book for any period of time?",
    },
    {
      question: "Is there home delivery option available?",
      answer: "Can I book for any period of time?",
    },
    {
      question: "How can I make the payment?",
      answer: "Can I book for any period of time?",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null); // Track the open FAQ

  // toogle open and close functionality for show and hide answer
  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the FAQ if it's already open
    } else {
      setOpenIndex(index); // Open the selected FAQ
    }
  };



  return (
    // <!-- faq container -->
    <div className="faq_container_parent">
      <div className="faq_container">
        <div className="faq_title_container">
          <h2>Frequently asked questions</h2>
        </div>
        {/* map the whole array to reduces the code reusability */}
        {faqs.map((faq, index) => (
          <div key={index} className={`faq${index + 1}`}>
            <div className="faq-question">
              {faq.question}
              <img src="assets/images/open.svg" className="open"       style={{ display: openIndex === index ? 'none' : 'inline' }}
                onClick={() => toggleFAQ(index)} />
              <img src="assets/images/close.svg" className="close"   style={{ display: openIndex === index ? 'inline' : 'none' }}
                onClick={() => toggleFAQ(index)} />
            </div>
            <div className="faq-answer"   style={{
                display: openIndex === index ? 'block' : 'none',
              }}>{faq.answer}</div>
            {index < faqs.length - 1 && <hr />}
          </div>
        ))}

      </div>
    </div>
  );
}
