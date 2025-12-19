'use client';

import { useState } from 'react';
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  startOfDay,
} from 'date-fns';
import css from './Calendar.module.css';

interface CustomCalendarProps {
  value: Date | null;
  onChange: (date: Date) => void;
}

export default function CustomCalendar({ value, onChange }: CustomCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(value || new Date());
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const today = startOfDay(new Date());

  const generateCalendarRows = () => {
    const rows: JSX.Element[] = [];
    let days: JSX.Element[] = [];
    let day = startDate;
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isDisabled = day < today;
        const dayClass = [
          css.day,
          isSameDay(day, value || new Date(0)) && css.selected,
          !isSameMonth(day, monthStart) && css.notCurrentMonth,
          isDisabled && !isSameDay(day, value || new Date(0)) && css.disabled,
          isSameDay(day, today) && css.today,
        ]
          .filter(Boolean)
          .join(' ');
        days.push(
          <div
            key={cloneDay.toISOString()}
            className={dayClass}
            onClick={() => !isDisabled && onChange(cloneDay)}
          >
            {' '}
            {format(day, 'd')}{' '}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={`week-${rows.length}`} className={css.weekRow}>
          {' '}
          {days}{' '}
        </div>
      );
      days = [];
    }
    return rows;
  };

  const weekDays = Array.from({ length: 7 }, (_, i) =>
    format(addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), i), 'EEE')
  );
  return (
    <div className={css.calendar}>
      <div className={css.header}>
        <button type="button" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
          <span className={css.icon}>
            <svg width="16" height="16" aria-hidden="true">
              <use href={'/symbol-defs.svg#icon-stroke-left'} />
            </svg>
          </span>
        </button>
        <span className={css.monthLabel}>{format(currentMonth, 'MMMM yyyy')}</span>
        <button type="button" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <span className={css.icon}>
            <svg width="16" height="16" aria-hidden="true">
              <use href={'/symbol-defs.svg#icon-stroke-rigth'} />
            </svg>
          </span>
        </button>
      </div>
      <div className={css.weekDays}>
        {weekDays.map((d) => (
          <div key={d} className={css.weekDay}>
            {d}
          </div>
        ))}
      </div>
      <div className={css.days}>{generateCalendarRows()}</div>
    </div>
  );
}
