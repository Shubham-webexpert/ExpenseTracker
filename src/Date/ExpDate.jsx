import React from "react";
import "./date.css";

const ExpDate = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const expdate = new Date(props.date);
  const Month = months[expdate.getMonth()];
  const Year = expdate.getFullYear();
  const Day = expdate.getDate();

  // console.log("ExpDate:"+ props.date);
  // console.log(Month,Year,Day);
  // console.log(curDate)
  return (
    <div>
      <div className="date">
        <span className="date-month">{Month}</span>
        <span className="date-year">{Year}</span>
        <span className="date-day">{Day}</span>
      </div>
    </div>
  );
};

export default ExpDate;
