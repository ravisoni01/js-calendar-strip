import { useEffect, useRef, useState } from 'react';
import { addDays, format, subDays } from 'date-fns';
import useViewPort from '../utils/useViewPort';

function useHorizontalScroll(handlePrevious, handleNext, visibleDates) {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();

        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth',
        });

        if (el.scrollLeft === 0 && visibleDates.length > 0) {
          handlePrevious();
        } else if (
          Math.ceil(el.scrollLeft) ===
          el.scrollWidth - el.clientWidth
        ) {
          handleNext();
        }
      };

      const onScroll = () => {
        const scrollDiff = el.scrollWidth - el.clientWidth - el.scrollLeft;

        if (scrollDiff <= 1 && visibleDates.length > 0) {
          handleNext();
        } else if (el.scrollLeft === 0) {
          handlePrevious();
        }
      };

      el.addEventListener('wheel', onWheel);
      el.addEventListener('scroll', onScroll);

      return () => {
        el.removeEventListener('wheel', onWheel);
        el.removeEventListener('scroll', onScroll);
      };
    }
  }, [visibleDates]);
  return elRef;
}

const isPreviousDate = (currentDate, startDate) => {
  const date1 = new Date(format(currentDate, 'yyyy-MM-dd'));
  const date2 = new Date(format(startDate, 'yyyy-MM-dd'));

  return date1 < date2;
};
const isNextDate = (currentDate, startDate) => {
  const date1 = new Date(format(currentDate, 'yyyy-MM-dd'));
  const date2 = new Date(format(startDate, 'yyyy-MM-dd'));

  return date1 > date2;
};

const CalendarLogic = (startDate, endDate) => {
  const { width } = useViewPort();

  const generateNextOrPreviousDateCount = width > 410 ? 5 : 2;

  const [visibleDates, setVisibleDates] = useState([]);
  const [firstMonthVisible, setFirstMonthVisible] = useState('');
  const [secondMonthVisible, setSecondMonthVisible] = useState('');

  const generateDates = start => {
    let dates = [];
    let i = startDate ? 0 : -5;
    let lastRenderValue = startDate ? 15 : 10;
    for (i; i <= lastRenderValue; i++) {
      dates.push(addDays(start, i));
    }

    return dates;
  };

  const handlePrevious = () => {
    const newVisibleDates = [...visibleDates];
    const start = new Date(newVisibleDates[0]);

    for (let i = 1; i <= generateNextOrPreviousDateCount; i++) {
      const newDate = subDays(start, i);
      if (!startDate) {
        newVisibleDates.pop();
        newVisibleDates.unshift(newDate);
      }
      if (startDate && !isPreviousDate(newDate, startDate)) {
        newVisibleDates.pop();
        newVisibleDates.unshift(newDate);
      }
    }

    setVisibleDates(newVisibleDates);
  };
  const handleNext = () => {
    const newVisibleDates = [...visibleDates];
    const lastDate = new Date(newVisibleDates[newVisibleDates.length - 1]);

    for (let i = 1; i <= generateNextOrPreviousDateCount; i++) {
      const newDate = addDays(lastDate, i);
      if (!endDate) {
        newVisibleDates.shift();
        newVisibleDates.push(newDate);
      }
      if (endDate && !isNextDate(newDate, endDate)) {
        newVisibleDates.shift();
        newVisibleDates.push(newDate);
      }
    }

    setVisibleDates(newVisibleDates);
  };

  const scrollRef = useHorizontalScroll(
    handlePrevious,
    handleNext,
    visibleDates
  );

  useEffect(() => {
    const initialDate = startDate ? startDate : new Date();
    const initialDates = generateDates(initialDate);

    setVisibleDates(initialDates);
  }, [startDate]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        entries => {
          console.log(entries.length);
          let tempFirstMonthVisible = entries[0].target.getAttribute('value');
          let tempSecondMonthVisible =
            entries[entries.length - 1].target.getAttribute('value');

          if (tempFirstMonthVisible === tempSecondMonthVisible) {
            setFirstMonthVisible(tempFirstMonthVisible);
            setSecondMonthVisible('');
          } else {
            setFirstMonthVisible(tempFirstMonthVisible);
            setSecondMonthVisible(tempSecondMonthVisible);
          }
        },
        { threshold: 0.5 }
      );

      const cards = document.querySelectorAll('.calendar_strip_card');

      cards.forEach(card => {
        observer.observe(card);
      });

      return () => {
        cards.forEach(card => {
          observer.unobserve(card);
        });
      };
    }
  }, [visibleDates]);

  return {
    handlePrevious,
    handleNext,
    visibleDates,
    scrollRef,
    firstMonthVisible,
    secondMonthVisible,
  };
};

export default CalendarLogic;
