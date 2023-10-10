import React, { useState } from 'react';
import './App.css';
import JsCalendarStrip from './components/JsCalendarStrip';
import { addDays } from 'date-fns';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectDate = date => {
    setSelectedDate(date);
  };

  let disableDateslist = [addDays(new Date(), 2), addDays(new Date(), 13)];

  return (
    <div className="main_container">
      <div className="inside_main_container">
        <JsCalendarStrip
          // style={{ backgroundColor: 'red' }}
          // headerStyle={{ backgroundColor: 'red' }}
          // dateNumberStyle={{ backgroundColor: 'red' }}
          // dayNameStyle={{ backgroundColor: 'red' }}
          // selectedDayNameStyle={{ backgroundColor: 'red' }}
          // selectedDateNumberStyle={{ backgroundColor: 'red' }}
          // selectedDateStyle={{ backgroundColor: 'red' }}
          // buttonStyle={{ backgroundColor: 'red' }}
          // hoverStyle={{ backgroundColor: 'red' }}
          disableStyle={{ backgroundColor: 'red' }}
          // disableDates={disableDateslist}
          // startDate={new Date()}
          // endDate={addDays(new Date(), 20)}
          selectedDate={selectedDate}
          onDateChange={handleSelectDate}
        />
      </div>
    </div>
  );
};

export default App;
