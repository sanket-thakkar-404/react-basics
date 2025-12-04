import React from "react";
import HeroSectionText from "../Section_two/HeroSectionText";
import Questions from "./Questions";
import HorizontalLine from "./HorizontalLine";
import Footer from "../Footer/Footer";

const FrequentlyQuestion = () => {
  const businessFAQs = [
    "Hamare product ka real target customer kaun hai aur unko kaise reach karein?",
    "Is quarter ka revenue target kya hona chahiye aur uske liye priority strategies kya hongi?",
    "Customer acquisition cost aur lifetime value ka ratio kaise improve karein?",
    "Competition se differentiate hone ke liye next feature ya service kya add karni chahiye?",
    "Marketing budget ka best ROI kaise nikaalein aur kis channel me zyada invest karein?",
  ];
  return (
    <div className="bg-purple-100 h-[80%] rounded-2xl">
      <HeroSectionText head={"Frequently"} span={"Asked Question"} />
      <Questions question = {businessFAQs}/>
    </div>
  );
};

export default FrequentlyQuestion;
