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
  return (
    <li
      className={interviewerClass}
      onClick={() => props.setInterviewer(props.name)}
    >
      <img className={imageClass} src={props.avatar} alt={props.name} />
      {props.name}
    </li>
  );
}
