import React from "react";

export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[props.date.getMonth()];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let monthDay = props.date.getDate();
    if (hours < 10) {
        hours = `0${hours}`;
}

    let minutes = props.date.getMinutes();
if (minutes < 10) {
 minutes = `0${minutes}`;
}
    return (
      <div className="FormattedDate">
            {day}, {monthDay} {month}, {hours}:{minutes}
      </div>
    );
}