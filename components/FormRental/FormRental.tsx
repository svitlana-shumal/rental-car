'use client';

import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import CustomCalendar from '@/components/Calendar/Calendar';
import css from './FormRental.module.css';
import { format } from 'date-fns';

export default function FormRental() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };
    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const comment = formData.get('comment')?.toString().trim();
    if (!name || !email || !selectedDate) {
      toast.error('Please fill in all required fields.');
      return;
    }

    toast.success('Your booking was successful!');
    e.currentTarget.reset();
    setSelectedDate(null);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h3 className={css.title}>Book your car now</h3>
      <p className={css.desc}>Stay connected! We are always ready to help you.</p>
      <label className={css.label}>
        <input type="text" name="name" required className={css.input} placeholder="Name*" />
      </label>
      <label className={css.label}>
        <input type="email" name="email" required className={css.input} placeholder="Email*" />
      </label>

      <label className={css.label}>
        <input
          type="text"
          name="date"
          value={selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}
          onFocus={() => setShowCalendar(true)}
          readOnly
          className={css.input}
          placeholder="Booking date"
        />
        {showCalendar && (
          <div className={css.calendarPopup} ref={calendarRef}>
            <CustomCalendar
              value={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setShowCalendar(false);
              }}
            />
          </div>
        )}
      </label>
      <label className={css.label}>
        <input name="comment" className={css.input} placeholder="Comment" />
      </label>
      <button type="submit" className={css.button}>
        Send
      </button>
    </form>
  );
}
