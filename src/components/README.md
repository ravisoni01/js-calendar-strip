<h1 align="center"> js-calendar-strip </h1>
<div align="center">
  Crafted with passion by  <a href="https://github.com/ravisoni01">Ravi </a> 
</div>

<h2>Table of Contents</h2>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#props">Props</a></li>
  <li><a href="#animations">Animations</a></li>
  <li><a href="#localization">Localization</a></li>
  <li><a href="#device-specific-notes">Device Specific Notes</a></li>
  <li><a href="#development-with-sample-application">Local Development</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>

## Install

```sh
$ npm install js-calendar-strip
# OR
$ yarn add js-calendar-strip
```

## Usage

The `js-calendar-strip` package is a versatile calendar strip component designed for seamless integration into web applications. It offers a compact, intuitive display of dates with easily accessible navigation controls. Developers can effortlessly generate and customize date ranges, making it an ideal solution for applications requiring date-based interactions.

**Key Features:**

- **Calendar Strip Display:** Presents a visually intuitive strip of dates for easy reference.
- **Next and Previous Buttons:** Allows users to navigate forward and backward to view different date ranges.
- **Customization Options:** Offers a range of styling and design options for tailoring the calendar strip to suit specific application aesthetics.
- **Date Disabling:** Provides the functionality to selectively disable specific dates, offering fine-grained control over user interactions.

<div align="center">
  <img src="https://user-images.githubusercontent.com/6295083/82712731-54a98780-9c4e-11ea-9076-eddf0b756239.gif" alt="">
</div>

<details>

```jsx
import { View, StyleSheet } from 'react-native';
import JsCalendarStrip from 'js-calendar-strip';

const Example = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectDate = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <JsCalendarStrip
        selectedDate={selectedDate}
        onDateChange={handleSelectDate}
      />
    </div>
  );
};
```

## Props

| Prop                          | Description                                                                                                                                                       | Type     | Default     |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| **`selectedDate`**            | Number of days shown in week. Applicable only when scrollable is false.                                                                                           | Number   | **`7`**     |
| **`onDateChange`**            | Dates are scrollable if true.                                                                                                                                     | Bool     | **`False`** |
| **`startDate`**               | Dates are scrollable as a page (7 days) if true (Only works with `scrollable` set to true).                                                                       | Bool     | **`False`** |
| **`endDate`**                 | Date to be used for centering the calendar/showing the week based on that date. It is internally wrapped by `moment` so it accepts both `Date` and `moment Date`. | Any      |
| **`disableDates`**            | Date to be used as pre selected Date. It is internally wrapped by `moment` so it accepts both `Date` and `moment Date`.                                           | Any      |
| **`style`**                   | Function to be used as a callback when a date is selected. Receives param `date` Moment date.                                                                     | Function |
| **`headerStyle`**             | Function to be used as a callback when a week is changed. Receives params `(start, end)` Moment dates.                                                            | Function |
| **`dateStyle`**               | Function to be used as a callback in `scrollable` mode when dates page starts gliding. Receives params `(start, end)` Moment dates.                               | Function |
| **`dayNameStyle`**            | Function to be used as a callback in `scrollable` mode when dates page stops gliding. Receives params `(start, end)` Moment dates.                                | Function |
| **`selectedDayNameStyle`**    | Function to be used as a callback when the header is selected. Receives param object `{weekStartDate, weekEndDate}` Moment dates.                                 | Function |
| **`selectedDateNumberStyle`** | Text to use in the header. Use with `onWeekChanged` to receive the visible start & end dates.                                                                     | String   |
| **`selectedDateStyle`**       | Update the week view if other props change. If `false`, the week view won't change when other props change, but will still respond to left/right selectors.       | Bool     | **`True`**  |
| **`hoverStyle`**              | start week on ISO day of week (default true). If false, starts week on _startingDate_ parameter.                                                                  | Bool     | **`True`**  |
| **`disableStyle`**            | minimum date that the calendar may navigate to. A week is allowed if minDate falls within the current week.                                                       | Any      |

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [an issue](https://github.com/ravisoni01/js-calendar-strip/issues).

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars0.githubusercontent.com/u/4005545?v=4" width="100px;"/><br /><sub><b>Bogdan Begovic</b></sub>](https://github.com/BugiDev)<br />[💬](#question-BugiDev 'Answering Questions') [💻](https://github.com/bugidev/react-native-calendar-strip/commits?author=BugiDev 'Code') [🎨](#design-BugiDev 'Design') [📖](https://github.com/bugidev/react-native-calendar-strip/commits?author=BugiDev 'Documentation') [💡](#example-BugiDev 'Examples') [🔧](#tool-BugiDev 'Tools') | [<img src="https://avatars3.githubusercontent.com/u/6295083?v=4" width="100px;"/><br /><sub><b>Peace</b></sub>](https://github.com/peacechen)<br />[💬](#question-peacechen 'Answering Questions') [🐛](https://github.com/bugidev/react-native-calendar-strip/issues?q=author%3Apeacechen 'Bug reports') [💻](https://github.com/bugidev/react-native-calendar-strip/commits?author=peacechen 'Code') [📖](https://github.com/bugidev/react-native-calendar-strip/commits?author=peacechen 'Documentation') [👀](#review-peacechen 'Reviewed Pull Requests') | [<img src="https://avatars1.githubusercontent.com/u/15834048?v=4" width="100px;"/><br /><sub><b>Chris Burns</b></sub>](http://www.usebillo.com)<br />[💬](#question-Burnsy 'Answering Questions') [🐛](https://github.com/bugidev/react-native-calendar-strip/issues?q=author%3ABurnsy 'Bug reports') [💻](https://github.com/bugidev/react-native-calendar-strip/commits?author=Burnsy 'Code') [📖](https://github.com/bugidev/react-native-calendar-strip/commits?author=Burnsy 'Documentation') [🔧](#tool-Burnsy 'Tools') [💡](#example-Burnsy 'Examples') [👀](#review-Burnsy 'Reviewed Pull Requests') | [<img src="https://avatars0.githubusercontent.com/u/26348965?v=4" width="100px;"/><br /><sub><b>samcolby</b></sub>](https://github.com/samcolby)<br />[💻](https://github.com/bugidev/react-native-calendar-strip/commits?author=samcolby 'Code') [⚠️](https://github.com/bugidev/react-native-calendar-strip/commits?author=samcolby 'Tests') | [<img src="https://avatars0.githubusercontent.com/u/239360?v=4" width="100px;"/><br /><sub><b>Florian Biebel</b></sub>](https://chromosom23.de)<br />[💻](https://github.com/bugidev/react-native-calendar-strip/commits?author=1ne8ight7even 'Code') | [<img src="https://avatars0.githubusercontent.com/u/986135?v=4" width="100px;"/><br /><sub><b>Vitaliy Zhukov</b></sub>](http://intspirit.com/)<br />[💻](https://github.com/bugidev/react-native-calendar-strip/commits?author=Vitall 'Code') | [<img src="https://avatars1.githubusercontent.com/u/15323137?v=4" width="100px;"/><br /><sub><b>lbrdar</b></sub>](https://github.com/lbrdar)<br />[💻](https://github.com/bugidev/react-native-calendar-strip/commits?author=lbrdar 'Code') |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                       [<img src="https://avatars0.githubusercontent.com/u/6774813?v=4" width="100px;"/><br /><sub><b>Dimka Vasilyev</b></sub>](https://github.com/gHashTag)<br />[💻](https://github.com/bugidev/react-native-calendar-strip/commits?author=gHashTag 'Code')                                                                                                                        |                                                                                                                                                       [<img src="https://avatars2.githubusercontent.com/u/6241354?v=4" width="100px;"/><br /><sub><b>Eugene</b></sub>](https://github.com/hellpirat)<br />[💻](https://github.com/bugidev/react-native-calendar-strip/commits?author=hellpirat 'Code')                                                                                                                                                        |

<!-- ALL-CONTRIBUTORS-LIST:END -->

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

## License

Licensed under the MIT License.

```

```
