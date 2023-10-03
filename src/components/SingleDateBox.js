import React, { useState } from 'react';
import { format, isEqual } from 'date-fns';

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const itsSameDate = (currentDate, date) => {
  return isEqual(
    new Date(format(currentDate, 'yyyy-MM-dd')),
    new Date(format(date, 'yyyy-MM-dd'))
  );
};

const SingleDateBox = props => {
  const {
    date,
    currentDate,
    onDateChange,
    dateStyle,
    dayNameStyle,
    selectedDayNameStyle,
    selectedDateStyle,
    selectedDateNumberStyle,
    hoverStyle,
    disableDates,
    disableStyle,
  } = props;

  const [hover, setHover] = useState(false);

  const isDisabledDate = () => {
    if (!disableDates || !Array.isArray(disableDates)) return false;

    if (Array.isArray(disableDates)) {
      for (const item of disableDates) {
        if (itsSameDate(item, date)) {
          return true;
        }
      }
    }
  };

  const isSelected = itsSameDate(currentDate, date);
  const isDisabled = isDisabledDate();

  const handleDateChange = () => {
    if (!isDisabled) {
      onDateChange(date);
    }
  };

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      value={format(date, 'MMM')}
      onClick={handleDateChange}
      className={`calendar_strip_card ${isSelected ? 'selected_date' : ''} ${
        isDisabled ? 'isDisabled_date' : ''
      }`}
      style={
        isSelected
          ? { ...selectedDateStyle }
          : hover
          ? { ...hoverStyle }
          : isDisabled
          ? { ...disableStyle }
          : {}
      }
    >
      <p
        className="day_name_text"
        style={isSelected ? { ...selectedDayNameStyle } : { ...dateStyle }}
      >
        {days[date.getDay()]}
      </p>
      <p
        className="day_number_text"
        style={
          isSelected ? { ...selectedDateNumberStyle } : { ...dayNameStyle }
        }
      >
        {date.getDate()}
      </p>
    </div>
  );
};

export default SingleDateBox;
