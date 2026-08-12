import { faqData } from '../../data/faqData';
import FAQCategory from './FAQCategory';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './FAQ.css';

export default function FAQ() {
  const anim = useScrollAnimation();

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div ref={anim.ref}>
          <h2 className={`section-title animate-on-scroll ${anim.className}`}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className={`section-subtitle animate-on-scroll animate-delay-1 ${anim.className}`}>
            Everything you need to know about investing, our services, and how KDJ Wealth works.
          </p>
        </div>

        <div className="faq__categories">
          {faqData.map((category, index) => (
            <FAQCategory key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
