import React from 'react'

function FAQs() {
  const faqQuestions = [
    "Question goes here, question goes here?",
    "Question goes here, question goes here?",
    "Question goes here, question goes here?",
    "Question goes here, question goes here?"
  ]

  return (
    <section className="faqs" id="faqs">
      <div className="faqs-inner">
        <h2 className="faqs-title">FAQs</h2>
        <ul className="faqs-list">
          {faqQuestions.map((question, index) => (
            <li key={index} className="faqs-item">
              <span className="faqs-question">{question}</span>
              <img src="/QQ.png" alt="" className="faqs-icon" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQs
