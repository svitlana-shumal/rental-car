'use client';

import { useState } from 'react';
import css from './MileageInput.module.css';

export default function MileageInputs() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const formatMileage = (value: string) =>
    value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <div className={css.inputContainer}>
      <label className={css.label}>Car mileage / km</label>
      <div className={css.inputs}>
        <input
          className={css.input}
          name="from"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(formatMileage(e.target.value))}
        />
        <div className={css.separator} />
        <input
          className={css.input}
          name="to"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(formatMileage(e.target.value))}
        />
      </div>
    </div>
  );
}
