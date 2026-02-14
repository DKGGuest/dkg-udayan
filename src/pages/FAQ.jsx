import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}

            <style>{`
        .faq-item {
          background: white;
          border-radius: 8px;
          margin-bottom: 1rem;
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary);
          text-align: left;
          transition: var(--transition);
        }

        .faq-question:hover {
          background: var(--bg-warm);
        }

        .faq-answer {
          padding: 0 2rem 1.5rem;
          color: var(--text-muted);
          line-height: 1.7;
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            category: 'Artisan Onboarding',
            questions: [
                {
                    question: 'How can I register as an artisan with Udayan Trust?',
                    answer: 'You can register by visiting our "Get Involved" page and filling out the artisan registration form. Our team will review your application and contact you within 5-7 business days.'
                },
                {
                    question: 'What are the eligibility criteria for artisans?',
                    answer: 'We welcome artisans of all skill levels who practice traditional Indian crafts. Priority is given to rural artisans, especially women, who are committed to preserving traditional art forms.'
                },
                {
                    question: 'Is there any fee to join the program?',
                    answer: 'No, there is absolutely no fee to join Udayan Trust. We are a non-profit organization dedicated to empowering artisans free of cost.'
                }
            ]
        },
        {
            category: 'Workshops & Training',
            questions: [
                {
                    question: 'What types of workshops do you conduct?',
                    answer: 'We conduct skill development workshops, business training, digital literacy programs, quality improvement sessions, and marketing workshops to help artisans grow their craft and business.'
                },
                {
                    question: 'Are workshops free for registered artisans?',
                    answer: 'Yes, all workshops and training programs are completely free for our registered artisans. We also provide materials and refreshments during sessions.'
                },
                {
                    question: 'How can I register for upcoming workshops?',
                    answer: 'Visit our Workshops page to see upcoming programs. You can register online or contact us directly. We also notify registered artisans via SMS and email.'
                }
            ]
        },
        {
            category: 'Marketplace & Products',
            questions: [
                {
                    question: 'How does the inquiry-based marketplace work?',
                    answer: 'Instead of direct purchases, interested buyers send inquiries about products. We connect buyers with artisans to discuss customization, pricing, and delivery, ensuring fair compensation for artisans.'
                },
                {
                    question: 'Can I customize products?',
                    answer: 'Yes! Most of our artisans offer customization options. When you send an inquiry, you can discuss your specific requirements directly with the artisan.'
                },
                {
                    question: 'How are artisans compensated?',
                    answer: 'Artisans receive fair compensation for their work. We do not take any commission from sales. Our role is to facilitate connections and ensure ethical transactions.'
                }
            ]
        },
        {
            category: 'Partnerships',
            questions: [
                {
                    question: 'How can my organization partner with Udayan Trust?',
                    answer: 'We welcome partnerships with corporates, NGOs, and academic institutions. Visit our Partnerships page or contact us to discuss collaboration opportunities aligned with our mission.'
                },
                {
                    question: 'What types of partnerships do you offer?',
                    answer: 'We offer CSR partnerships, skill development collaborations, market access initiatives, research partnerships, and volunteer programs. Each partnership is customized to create maximum impact.'
                }
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>FAQs - Udayan Public Empowerment Trust</title>
                <meta name="description" content="Frequently asked questions about Udayan Trust's artisan programs, workshops, marketplace, and partnerships." />
            </Helmet>

            <div className="faq-page">
                <section className="page-hero">
                    <div className="container">
                        <h1>Frequently Asked Questions</h1>
                        <p>Find answers to common questions about our programs and services</p>
                    </div>
                </section>

                <section className="faq-content">
                    <div className="container">
                        {faqs.map((category, idx) => (
                            <div key={idx} className="faq-category">
                                <h2>{category.category}</h2>
                                <div className="faq-list">
                                    {category.questions.map((faq, faqIdx) => (
                                        <FAQItem key={faqIdx} question={faq.question} answer={faq.answer} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style>{`
        .page-hero {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          padding: 8rem 0 5rem;
          text-align: center;
          color: white;
          margin-top: 5rem;
        }

        .page-hero h1 {
          font-size: 3rem;
          color: white;
          margin-bottom: 1rem;
        }

        .page-hero p {
          font-size: 1.2rem;
          opacity: 0.95;
        }

        .faq-content {
          padding: 5rem 0;
        }

        .faq-category {
          max-width: 900px;
          margin: 0 auto 4rem;
        }

        .faq-category h2 {
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--border-color);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
        </>
    );
};

export default FAQ;
