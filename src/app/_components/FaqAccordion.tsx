'use client';

import { useState } from 'react';
import faqData from '../../../data/faq-questions.json';

interface FaqQuestion {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);
  const questions: FaqQuestion[] = faqData.faqQuestions;

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <div className="faq-items">
        {questions.map((item) => (
          <div key={item.id} className="faq-item">
            <button
              className={`faq-question ${openId === item.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(item.id)}
            >
              {item.question}
              <span className="faq-icon">+</span>
            </button>
            <div className={`faq-answer ${openId === item.id ? 'active' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

