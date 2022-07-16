import React from "react";

const Section = (props) => {
  return (
    <div className="section">
      <div className="section-title"> {props.title} </div>
      <div className="section-value"> {props.children} </div>
    </div>
  )
}

export default Section;