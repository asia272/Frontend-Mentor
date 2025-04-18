import { useState } from 'react'
import Fqs from './components/Fqs';
import "./App.css"
import starIcon from "./assets/images/icon-star.svg"

function App() {
  const [active, setIsActive] = useState(null);

  const toggle = (index) => {
    setIsActive(active === index ? null : index);
  };
  const faqs = [
    {
      qs: "What is Frontend Mentor, and how will it help me?",
      ans: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      qs: "Is Frontend Mentor free?",
      ans: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
      qs: "Can I use Frontend Mentor projects in my portfolio?",
      ans: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
      qs: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      ans: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
  ];
  return (
    <>
      <main>
        <div className="heading">
          <img src={starIcon} alt="star-icon" />
          <h1> FAQs</h1>
        </div>
        {faqs.map((faq, index) => (
          <Fqs
            key={index}
            qs={faq.qs}
            ans={faq.ans}
            isActive={active === index}
            click={() => toggle(index)}
          />
        ))}
      

      </main>
    </>
  )
}

export default App