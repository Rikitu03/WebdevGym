import Header from '../components/Header';
import '../styles/FAQs.css';
import { useState } from 'react';

function FAQs() {
  const [activeIndices, setActiveIndices] = useState({
    section1: null,
    section2: null
  });

  const toggleFAQ = (section, index) => {
    setActiveIndices(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };

  const faqData1 = [
    {
      question: "Do you offer personal training?",
      answer: "Yes, we offer customized personal training programs with expert coaches for weight loss, strength building, endurance, and more. Our programs include Body Toning, Strength and Conditioning, Circuit Training, Athletic Training, Weight Loss/Gain, and Running Clinics."
    },
    {
      question: "What are your opening hours?",
      answer: "Our gym is open Monday-Friday from 6 AM to 12 AM, and Saturday-Sunday from 7 AM to 10 PM."
    },
    {
      question: "Do you have parking available?",
      answer: "Yes, we ensure all our locations have adequate parking facilities for our members' convenience."
    },
    {
      question: "Can I bring a guest?",
      answer: "Members can bring guests for a small fee. Guest passes are available at the front desk, and we also offer family-friendly programs for members who want to bond through fitness."
    },
    {
      question: "What equipment do you have?",
      answer: "We feature high-end cardio machines, strength training equipment, free weights, and functional training tools in a spacious, well-equipped facility with dedicated zones for different workout needs."
    }
  ];
  
  const faqData2 = [
    {
      question: "Can I try before signing up?",
      answer: "We occasionally offer trial classes and promotional events. Contact us at amigosfitnessgym.management@gmail.com or call +639760760570 to inquire about current trial offers."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including cash, credit/debit cards, and digital payments. Specific options can be confirmed with our front desk staff."
    },
    {
      question: "Is there an age requirement to join?",
      answer: "We welcome members of all ages! We have special programs for students and families, making fitness accessible to youth and adults alike."
    },
    {
      question: "Do you have group classes?",
      answer: "Yes! We offer diverse group classes including Tabata (HIIT), Dynamic Functional Training, Zumba, Yoga, Boxing, and Muay Thai - all included in your membership."
    },
    {
      question: "Can I pause or freeze membership?",
      answer: "We offer flexible membership options. Please speak with our membership consultant about our pause/freeze policies tailored to different situations."
    },
    {
      question: "Is there a cancellation fee?",
      answer: "Cancellation policies vary by membership type. Our team will provide full details during signup to ensure transparency about any applicable fees."
    }
  ];

  return (
    <div>
      <h3 className="title">FREQUENTLY ASKED QUESTIONS</h3>
      
      <div className='maindiv'>
        {faqData1.map((faq, index) => (
          <section className={`faqs ${activeIndices.section1 === index ? 'active' : ''}`} key={`section1-${index}`}>
            <div 
              className='questions'
              onClick={() => toggleFAQ('section1', index)}
            >
              <h3>{faq.question}</h3>
              <svg 
                width="15" 
                height="10" 
                viewBox="0 0 42 25"
                className={`arrow ${activeIndices.section1 === index ? 'rotated' : ''}`}
              >
                <path 
                  d="M3 3L21 21L39 3" 
                  stroke='white' 
                  strokeWidth="7" 
                  strokeLinecap='round'
                />
              </svg>
            </div>
            <div className='answers'>
              <p>{faq.answer}</p>
            </div>
          </section>
        ))}
      </div>

      <div className='seconddiv'>
        {faqData2.map((faq, index) => (
          <section className={`faqs ${activeIndices.section2 === index ? 'active' : ''}`} key={`section2-${index}`}>
            <div 
              className='questions'
              onClick={() => toggleFAQ('section2', index)}
            >
              <h3>{faq.question}</h3>
              <svg 
                width="15" 
                height="10" 
                viewBox="0 0 42 25"
                className={`arrow ${activeIndices.section2 === index ? 'rotated' : ''}`}
              >
                <path 
                  d="M3 3L21 21L39 3" 
                  stroke='white' 
                  strokeWidth="7" 
                  strokeLinecap='round'
                />
              </svg>
            </div>
            <div className='answers'>
              <p>{faq.answer}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default FAQs;