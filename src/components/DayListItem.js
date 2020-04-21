import React from "react";
import "./DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const formatSpots = function () {
    if (props.spots === 0) {
      return <h3 className="text--light">no spots remaining</h3>;
    }
    if (props.spots === 1) {
      return <h3 className="text--light">{props.spots} spot remaining</h3>;
    }
    return <h3 className="text--light">{props.spots} spots remaining</h3>;
  };

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      {formatSpots()}
    </li>
  );
}
