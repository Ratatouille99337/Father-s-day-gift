import React from "react";
import FaqItem from "../elements/FaqItem";

// load assets
import "../../assets/scss/Faq.scss";

const faqData = [
  {
    id: 1,
    question: "  When is Father’s Day 2024 in Australia?",
    answer: `<ul> 
    <li><a href="#1">1 September 2024 (first Sunday of September)</a></li></ul>`,
  },
  {
    id: 2,
    question: " Introduction",
    answer: `<ul> 
    <li><a href="#2">About the father's day</a></li></ul>`,
  },
  {
    id: 3,
    question:
      "A Variety of Choices for Every Dad: From Whiskey Lovers to Tea Enthusiasts",
    answer: `<ul >
      <li><a href="#3">Hampers for Whiskey Connoisseurs </a></li>
      <li><a href="#3">Tea Lover's Delight </a></li>
      <li><a href="#3">Gourmet Snack Extravaganza </a></li>
      <li><a href="#3">Wine Enthusiast's Paradise </a></li>
      <li><a href="#3">Beer Lover's Bundle </a></li>
    </ul>`,
  },
  {
    id: 4,
    question:
      "  Personalise Your Gift: Customisable Hampers to Show Your Thoughtfulness",
    answer: `<ul >
      <li><a href="#4">  Customising Contents </a></li>
      <li><a href="#4"> Adding Personal Messages </a></li>
      <li><a href="#4">Special Packaging Options </a></li>
      <li><a href="#4"> Corporate Customisation </a></li>
      <li><a href="#4">  Easy Customisation Process </a></li>
    </ul>`,
  },
  {
    id: 5,
    question:
      " Premium Products and Local Delicacies: Only the Best for Your Father",
    answer: `<ul >
      <li><a href="#5">  Gourmet Food Selection </a></li>
      <li><a href="#5"> Fine Beverages </a></li>
      <li><a href="#5"> Luxurious Self-Care Products </a></li>
      <li><a href="#5"> Supporting Local Businesses </a></li>
      <li><a href="#5">  Beautiful Presentation </a></li>
    </ul>`,
  },
  {
    id: 6,
    question: "  Convenient and Hassle-Free: Free Delivery Across Australia",
    answer: `<ul >
      <li><a href="#6">   Fast Order Processing </a></li>
      <li><a href="#6">  Free Standard Delivery </a></li>
      <li><a href="#6"> Express Shipping Options</a></li>
      <li><a href="#6"> Easy Online Ordering </a></li>
      <li><a href="#6">  Exceptional Customer Service </a></li>
    </ul>`,
  },
  {
    id: 7,
    question:
      "   How to Select the Perfect Hamper: Tips for Matching Your Dad’s Interests",
    answer: `<ul >
      <li><a href="#7">     Know His Preferences </a></li>
      <li><a href="#7">   Consider His Hobbies and Interests </a></li>
      <li><a href="#7"> Look for Quality</a></li>
      <li><a href="#7"> Personalise the Gift </a></li>
      <li><a href="#7">  Think About Presentation </a></li>
    </ul>`,
  },
  {
    id: 8,
    question: "  Conclusion",
    answer: `<ul >
      <li><a href="#8">   Diverse Range of Options </a></li>
      <li><a href="#8">    Personalised and Convenient Service </a></li>
    </ul>`,
  },
  {
    id: 9,
    question: "About The Hamper Boutique Co",
    answer: `<ul >
      <li><a href="#9">  Corporate Gifting Experts </a></li>
      <li><a href="#9">   Extensive Product Range </a></li>
      <li><a href="#9">   Commitment to Quality and Sustainability </a></li>
    </ul>`,
  },
];

const Faq = () => {
  return (
    <div className="container">
      <div className="faq-section">
        <h2 className="title">
          FATHER'S DAY GIFT HAMPERS THAT WILL MAKE DAD FEEL EXTRA SPECIAL
        </h2>
        {faqData.map((item, key) => {
          return <FaqItem key={key} faqItem={item} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
