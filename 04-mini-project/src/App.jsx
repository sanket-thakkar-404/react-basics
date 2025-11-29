import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      posted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Entry Level",
      pay: "$42/hour",
      location: "Bangalore",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      posted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$48/hour",
      location: "Hyderabad",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      posted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Chennai",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      posted: "1 week ago",
      post: "UI Engineer",
      tag1: "Part-time",
      tag2: "Entry Level",
      pay: "$38/hour",
      location: "Mumbai",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      posted: "4 days ago",
      post: "Cloud Support Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$60/hour",
      location: "Noida",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      posted: "6 days ago",
      post: "JavaScript Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$65/hour",
      location: "Delhi",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      posted: "3 weeks ago",
      post: "Software Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$50/hour",
      location: "Pune",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      posted: "2 days ago",
      post: "AI Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$78/hour",
      location: "Bangalore",
    },
    {
      brandLogo: "https://logo.clearbit.com/stripe.com",
      companyName: "Stripe",
      posted: "8 days ago",
      post: "Full Stack Engineer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$68/hour",
      location: "Remote",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      posted: "5 hours ago",
      post: "Research Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Remote",
    },
  ];
  return (
    <div className="parent">
      {jobs.map((elem) => (
        <Card brandLogo={elem.brandLogo} companyName={elem.companyName} posted={elem.posted} tag1={elem.tag1} tag2={elem.tag2} location={elem.location}  pay={elem.pay} post={elem.post}/>
      ))}
    </div>
  );
};

export default App;
