import React, { useState } from "react";
import "./CalendarApp.css";
const CalendarApp = () => {
  const daysOfWeek = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [setlectedDate, setSelectedDate] = useState(currentDate.getDate());
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventTime, setEventTime] = useState({ hours: "00", minute: "00" });
  const [eventText, setEventText] = useState("");
  const [editingEvent, setEditingEvent] = useState(null);
  const [deletingEvent, setDeletingEvent] = useState(null);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth).getDay();

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  const handleDayClick = (day) => {
    const clickedDate = new Date(currentYear, currentMonth, day);
    const today = new Date();
    if (clickedDate >= today || isSameDay(clickedDate, today)) {
      setSelectedDate(clickedDate);
      setShowEventPopup(true);
      setEventText("");
      setEventTime({ hours: "00", minute: "00" });
      setEditingEvent(null);
    }
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const handleDeleteEvent = (event) => {
    setDeletingEvent(event);
    setEvents(events.filter((e) => e.id !== event.id));

  }

  const handleEventSubmit = () => {
    const newEvent = {
      id: editingEvent ? editingEvent.id : Date.now(),
      date: setlectedDate,
      time: `${eventTime.hours.padStart(2, "0")}:${eventTime.minute.padStart(
      2,
      "0"
      )}`,
      text: eventText,
    };
    console.log(newEvent.id)
    
    let updatedEvents = [...events];

    if (editingEvent) {
      updatedEvents = updatedEvents.map((event) =>
        event.id === editingEvent.id ? newEvent : event
      );
    }
    else{
      updatedEvents.push(newEvent);
    }

    updatedEvents.sort((a,b)=>new Date (a.date) - new Date(b.date));

    setEvents([...events, newEvent]);
    setEventTime({ hours: "00", minute: "00" });
    setEventText("");
    setShowEventPopup(false);
    setEditingEvent(null)

   
  };
   const handleEditEvent = (event) => {
      setSelectedDate(new Date(event.date));
      setEventTime({
      hours: event.time.split(":")[0],
      minute: event.time.split(":")[1],
      });
      setEventText(event.text);
      setEditingEvent(event);
      setShowEventPopup(true);
    };

      const handleEnter = (e) => {
        if (e.key ==="Enter"){
          handleEventSubmit()
        }
      }
  return (
    <div className="calendar-app">
      <div className="calendar">
        <h1 className="heading">Calendar</h1>
        <div className="navigate-date">
          <h2 className="month">{monthsOfYear[currentMonth]}</h2>
          <h2 className="year">{currentYear}</h2>
          <div className="buttons">
            <i className="bx bx-chevron-left" onClick={prevMonth}></i>
            <i className="bx bx-chevron-right" onClick={nextMonth}></i>
          </div>
        </div>
        <div className="weekdays">
          {daysOfWeek.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className="days">
          {[...Array(firstDayOfMonth).keys()].map((_, index) => (
            <span key={`empty-${index}`} />
          ))}
          {[...Array(daysInMonth).keys()].map((day) => (
            <span
              key={day + 1}
              className={
                day + 1 === currentDate.getDate() &&
                currentMonth === currentDate.getMonth() &&
                currentYear === currentDate.getFullYear()
                  ? "current-day"
                  : ""
              }
              onClick={() => handleDayClick(day + 1)}
            >
              {day + 1}
            </span>
          ))}
        </div>
      </div>
      <div className="events">
        {showEventPopup && (
          <div className="event-popup">
            <div className="time-input">
              <div className="event-popup-time">Time</div>
              <input
                type="number"
                name="hours"
                min={0}
                max={24}
                className="hours"
                value={eventTime.hours}
                onChange={(e) =>
                  setEventTime({ ...eventTime, hours: e.target.value })
                }
              />
              <input
                type="number"
                name="minute"
                min={0}
                max={24}
                className="minute"
                value={eventTime.minute}
                onChange={(e) =>
                  setEventTime({ ...eventTime, minute: e.target.value })
                }
              />
            </div>
            <textarea
              name=""
              placeholder="Enter Event Text "
              id=""
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              onKeyDown={(e) =>handleEnter(e) }
            ></textarea>
            <button className="event-popup-btn" onClick={handleEventSubmit}>
              Add Event
            </button>
            <button className="close-event-popup">
              <i
                className="bx bx-x"
                onClick={() => setShowEventPopup(false)}
              ></i>
            </button>
          </div>
        )}

        { events.length === 0 ? (<><h1 className="no-event">No items</h1></>) : (events.map((event, index) => {
          return (
            <div className="event" key={index}>
              <div className="event-date-wrapper">
                <div className="event-date">
                  {`${
                    monthsOfYear[new Date(event.date).getMonth()]
                  } ${new Date(event.date).getDate()} ${new Date(event.date).getFullYear()}`}
                </div>
                <div className="event-time">{event.time}</div>
              </div>
              <div className="event-text">{event.text}</div>
              <div className="event-button">
                <i className="bx bxs-edit-alt" onClick={()=>handleEditEvent(event)}></i>
                <i className="bx bxs-message-alt" onClick={()=>handleDeleteEvent(event)}></i>
              </div>
            </div>
          );
        }))
        }

        
      </div>
    </div>
  );
};

export default CalendarApp;
