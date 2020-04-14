import React from "react";
import "./InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  const imageClass = classNames("interviewers__item-image", {
    "interviewers__item-image--selected": props.selected,
  });
  const showName = function () {
    const name = props.name;
    if (props.selected) {
      return name;
    }
  };
  return (
    <li
      className={interviewerClass}
      onClick={() => props.setInterviewer(props.id)}
    >
      <img className={imageClass} src={props.avatar} alt={props.name} />
      {showName()}
    </li>
  );
}
