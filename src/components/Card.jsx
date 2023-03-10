import React from "react";
import "./card.css";
import "../App.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="row">
        <div className="col">
          <img src={props.imgSrc} alt="Project Image" />
        </div>
        <div className="col">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <div className="usedSkills">
            {props.usedSkills != undefined &&
              props.usedSkills.map((skillIcon) => {
                return (
                  <div className="icons" key={props.usedSkills.indexOf(skillIcon)}>
                    {skillIcon}
                  </div>
                );
              })}
          </div>
          <button
            className="card-button"
            onClick={() => window.open(props.btnUrl)}
          >
            {props.btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
