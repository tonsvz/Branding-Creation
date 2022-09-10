import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Curology",
    title: "A custom formule for your skin's unique needs",
    img: "curology-min",
  },
  {
    id: 2,
    subtitle: "YourSpace",
    title: "Open space plans for your next adventure",
    img: "yourspace-min",
  },
  {
    id: 3,
    subtitle: "Lumin",
    title: "For your best look ever",
    img: "lumin-min",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev className="svg" />
          </div>
          <div className="cases-arrow next">
            <CasesNext className="svg" />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>
                  {caseItem.subtitle}
                  <h2>{caseItem.title}</h2>
                </span>
              </div>
              <div className="case-image">
                <img
                  src={`../assets/${caseItem.img}.png`}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
