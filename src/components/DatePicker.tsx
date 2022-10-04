import { useEffect, useState } from "react";

function createArray(length: number, startingAt: number) {
  return new Array(length)
    .fill(startingAt)
    .map((value, index) => value + index);
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const YEARS = createArray(110, 1905);

type TDateColProps = {
  inRange: boolean;
  selected: boolean;
  currentItem: number | string;
  handleClick: (index: number) => void;
  index: number;
};

function DateCol({
  inRange,
  currentItem,
  selected,
  handleClick,
  index,
}: TDateColProps) {
  return (
    <button
      onClick={() => handleClick(index)}
      type="button"
      className={`flex-1 cursor-pointer items-center justify-center py-3 font-bold  ${
        inRange ? "flex" : "hidden"
      } ${
        selected
          ? "border-t border-b border-t-gray-200 border-b-gray-200 text-4xl  text-gray-900"
          : "text-2xl  text-gray-700"
      }`}
    >
      {currentItem}
    </button>
  );
}

type TDateRowProps = {
  items: Array<string | number>;
  current: number;
  handleChange: (index: number) => void;
};

function DateRow({ current, items, handleChange }: TDateRowProps) {
  const shown = [
    Math.max(0, current - 1),
    current,
    Math.min(current + 1, items.length - 1),
  ];

  return (
    <div className="flex h-full flex-grow flex-col gap-4">
      {items.map((item, index) => (
        <DateCol
          index={index}
          key={item}
          inRange={shown.includes(index)}
          selected={current === index}
          currentItem={item}
          handleClick={handleChange}
        />
      ))}
    </div>
  );
}

type TDatePickerProps = {
  handleChange: (year: number, month: number, day: number) => void;
};

function DatePicker({ handleChange }: TDatePickerProps) {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(5);
  const [selectedDayIndex, setSelectedDayIndex] = useState(15);
  const [selectedYearIndex, setSelectedYearIndex] = useState(81);
  const [currentMonthDays, setCurrentMonthDays] = useState(createArray(30, 0));

  useEffect(() => {
    const month = selectedMonthIndex + 1;
    const year = YEARS[selectedYearIndex];
    if ([4, 6, 9, 11].includes(month)) setCurrentMonthDays(createArray(30, 0));
    else if ([1, 3, 5, 7, 8, 10, 12].includes(month))
      setCurrentMonthDays(createArray(31, 0));
    else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
      setCurrentMonthDays(createArray(29, 0));
    else setCurrentMonthDays(createArray(28, 0));
  }, [selectedMonthIndex, selectedYearIndex]);

  const handleChangeMonth = (selectedMonth: number) => {
    setSelectedMonthIndex(selectedMonth);
    handleChange(
      YEARS[selectedYearIndex],
      selectedMonthIndex + 1,
      selectedDayIndex
    );
  };

  const handleChangeDay = (selectedDay: number) => {
    setSelectedDayIndex(selectedDay);
    handleChange(
      YEARS[selectedYearIndex],
      selectedMonthIndex,
      selectedDayIndex + 1
    );
  };

  const handleChangeYear = (selectedYear: number) => {
    setSelectedYearIndex(selectedYear);
    handleChange(
      YEARS[selectedYearIndex],
      selectedMonthIndex,
      selectedDayIndex
    );
  };

  return (
    <div className="flex w-full flex-grow flex-wrap gap-6">
      <DateRow
        items={MONTHS}
        handleChange={handleChangeMonth}
        current={selectedMonthIndex}
      />
      <DateRow
        items={currentMonthDays}
        handleChange={handleChangeDay}
        current={selectedDayIndex}
      />
      <DateRow
        items={YEARS}
        handleChange={handleChangeYear}
        current={selectedYearIndex}
      />
    </div>
  );
}

export default DatePicker;
