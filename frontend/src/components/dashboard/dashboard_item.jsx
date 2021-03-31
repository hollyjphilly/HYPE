import React from 'react';

const DashboardItem = props => {
  const dateObj = new Date(props.event.dateTime);
  let fullDate = dateObj.toDateString();
  return (
    <div className="dashboard-single-event-container">
      <h3>{props.event.title}</h3>
      <p>{props.event.sport}</p>
      <p>{fullDate}</p>
    </div>
  )
}

export default DashboardItem;