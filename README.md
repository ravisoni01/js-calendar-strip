<h1 align="center"> js-calendar-strip </h1>
<div align="center">
  Crafted with passion by  <a href="https://github.com/ravisoni01">Ravi </a> 
</div>


## Install

```sh
$ npm install js-calendar-strip
# OR
$ yarn add js-calendar-strip
```

## Usage


The `js-calendar-strip` package is a versatile calendar strip component designed for seamless integration into web applications. It offers a compact, intuitive display of dates with easily accessible navigation controls. Developers can effortlessly generate and customize date ranges, making it an ideal solution for applications requiring date-based interactions.

**Key Features:**

-   **Calendar Strip Display:** Presents a visually intuitive strip of dates for easy reference.
-   **Next and Previous Buttons:** Allows users to navigate forward and backward to view different date ranges.
-   **Customization Options:** Offers a range of styling and design options for tailoring the calendar strip to suit specific application aesthetics.
-   **Date Disabling:** Provides the functionality to selectively disable specific dates, offering fine-grained control over user interactions.

<div align="center">
  <img src="https://user-images.githubusercontent.com/71606441/273928522-18a9e259-1496-413d-9f16-249f91d0bab3.gif" alt="">
</div>

<details>

```jsx
import JsCalendarStrip from 'js-calendar-strip';

const Example = () => {
	const [selectedDate, setSelectedDate] = useState(new  Date());

	const  handleSelectDate  = date =>  {
		setSelectedDate(date);
	};
	
	return (
	  <div>
	    <JsCalendarStrip
	      selectedDate={selectedDate}
	      onDateChange={handleSelectDate}
	    />
	  </div>
)}

```

## Props

| Prop                 | Description                                                                                                                                                        | Type     | Default    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------- |
| **`selectedDate`**  | Holds the currently chosen date .                                        | |  Today's Date  | 
| **`onDateChange`**     | Callback function triggered when a user selects a new date .                                                                                                                                 | Function | |
| **`startDate`** | Sets the initial date from where the calendar needs to begin .                                                                | Date | |
| **`endDate`**   | Final date visible in the calendar .  | Date |
| **`disableDates`**   | Allows the inclusion of a list of dates that are not selectable within the calendar .                                      | Array |
| **`style`** | Style for the main container of the calendar .                                                                 | |
| **`headerStyle`**  | Style for the header text of the calendar .                                           | |
| **`dateNumberStyle`**| Style for the date number of the calendar strip .                  | |
| **`dayNameStyle`**| Style for the day name of the calendar strip .                               | |
| **`selectedDayNameStyle`**| Style for the selected day name of the calendar strip .                                | |
| **`selectedDateNumberStyle`**     | Style for the selected date number of the calendar strip .                                                               | |
| **`selectedDateStyle`**     | Style for the selected date of the calendar strip .          | |  |
| **`hoverStyle`**  | Hover Style for the calendar strip .                                                               | | |
| **`disableStyle`**        | Style for the disable date of the calendar strip .                                                       | |


## License

Licensed under the MIT License.
