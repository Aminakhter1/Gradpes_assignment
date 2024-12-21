import React from "react";
import "../styles/CardSection.css"; // Custom CSS for additional styling

const CardSection = () => {
  const cards = [
    {
      title: "Accreditation & Compliance",
      description: "Bring real-time monitoring for all users’ accreditation requirements for continuous quality improvement.",
      icon: "📜",
    },
    {
      title: "ILMS",
      description: "Customize the learning system by giving users a unified platform for all academic needs with easy-to-use technology.",
      icon: "🎓",
    },
    {
      title: "Exam Management System",
      description: "Streamline the examination process with Online Examinations, Live Proctoring, and more.",
      icon: "📄", 
    },
  ];

  return (
    <div className="container">
      <h3 className=" mb-4">
        Learn more about <span className="text-primary">what we solve</span>
      </h3>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100  card-hover">
              <div className="card-body ">
                <div className="icon mb-3">{card.icon}</div>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <div className="cardbtn">Learn More</div>
              
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="progress mt-4">
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "50%" }} // Adjust progress dynamically
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default CardSection;
