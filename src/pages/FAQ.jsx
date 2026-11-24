import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const faqs = [
  {
    question: 'What types of memorials do you offer?',
    answer:
      'We offer a wide selection of granite and bronze memorials, including grave markers, upright monuments, slant memorials, cremation memorials, and memorial benches.'
  },
  {
    question: 'Can I customize a memorial design?',
    answer:
      'Yes. Our memorial designs can be personalized according to your preferences. Our memorial consultants can guide you through the design process.'
  },
  {
    question: 'Will I receive a design before my memorial is made?',
    answer:
      'Yes. We provide a computer-generated drawing of your memorial with each order so you can review the design.'
  },
  {
    question: 'Do you help with cemetery requirements?',
    answer:
      'Yes. We work with your cemetery to provide the required documents at no additional charge.'
  },
  {
    question: 'Is engraving included in the price?',
    answer:
      'Our listed services include engraving of the name, dates, and one additional line of text. Additional design details may also be included as specified.'
  },
  {
    question: 'Do you ship memorials outside Texas?',
    answer:
      'Yes. We ship memorials to cemeteries throughout the contiguous United States.'
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">

      {/* PAGE BANNER */}
      <section className="page-banner">
        <div>
          <span className="section-label">HELP & INFORMATION</span>
          <h1>Frequently Asked Questions</h1>
          <p>Helpful information to guide you through the memorial process.</p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="faq-content">

        <ScrollReveal className="faq-heading">
          <span className="section-label">HOW CAN WE HELP?</span>
          <h2>Common Questions</h2>
          <p>
            We understand that choosing a memorial involves many decisions.
            Here are answers to some common questions.
          </p>
        </ScrollReveal>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div
                className={`faq-item ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={20}
                    className="faq-chevron"
                  />
                </button>

                <div
                  className={`faq-answer ${
                    activeIndex === index ? 'faq-answer-open' : ''
                  }`}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CONTACT SECTION */}
        <ScrollReveal>
          <div className="faq-contact">
            <h3>Still Have Questions?</h3>
            <p>
              Our team is here to help you understand your options
              and guide you through the process.
            </p>

            <Link to="/contact" className="btn-primary">
              Contact Our Team
            </Link>
          </div>
        </ScrollReveal>

      </section>
    </div>
  );
}

export default FAQ;