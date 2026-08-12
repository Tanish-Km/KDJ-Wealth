import { useState } from 'react';
import FAQItem from './FAQItem';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function FAQCategory({ category, index }) {
  const [openIndex, setOpenIndex] = useState(0);
  const anim = useScrollAnimation({ threshold: 0.1 });

  const handleToggle = (qIndex) => {
    setOpenIndex((prev) => (prev === qIndex ? -1 : qIndex));
  };

  return (
    <div
      ref={anim.ref}
      className={`faq-category animate-on-scroll ${anim.className}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="faq-category__header">
        <span className="faq-category__label">{category.category}</span>
      </div>
      <div className="faq-category__items">
        {category.questions.map((item, qIndex) => (
          <FAQItem
            key={qIndex}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === qIndex}
            onToggle={() => handleToggle(qIndex)}
          />
        ))}
      </div>
    </div>
  );
}
